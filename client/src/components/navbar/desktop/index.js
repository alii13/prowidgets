import React, { Component } from "react";
import styles from "./index.module.css";
import { withRouter } from "react-router-dom";
import { Modal } from "antd";
import GoogleLogin from "react-google-login";
import notification from "../../notification";
import { refreshTokenSetup } from "../../../auth";
import { api } from "../../../utils/api";

class index extends Component {
	state = {
		showModal: false,
	};

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	loginSuccess = (googleRes) => {
		const profileObj = googleRes.profileObj;

		const { email, name, imageUrl } = profileObj;
		api
			.post(
				"/v1/login",
				{
					email,
					name,
					imageUrl,
				},
				{
					headers: { Authorization: `Bearer ${googleRes.tokenId}` },
				}
			)
			.then((res) => {
				console.log(res.data);
				localStorage.setItem("user", JSON.stringify(googleRes));
				refreshTokenSetup(googleRes);
				this.setState({ showModal: false });
				this.props.history.push("/home");
			})
			.catch((err) => {
				console.log(err);
				if(err.message!='')
				notification("error", err.message);
			});
	};

	loginFailure = (e) => {
		if (e.message != "") notification("error", e.message);
	};

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.navbar}>
					<div className={styles.brand}>
						<span className={styles.bold}>prowidgets</span>.co
					</div>
					<div className={styles.links}>
						<div className={styles.link}>How it works</div>
						<div className={styles.link}>Usecases</div>
						<div
							className={`${styles.link} ${styles.link__btn}`}
							onClick={this.toggleModal}
						>
							Create Your Slider
						</div>
					</div>
				</div>
				<Modal
					visible={this.state.showModal}
					centered={true}
					footer={null}
					className={styles.auth__modal}
					onCancel={() => this.setState({ showModal: false })}
				>
					<div className={styles.auth__div}>
						<p className={styles.auth__text}>
							Step into <span className={styles.blue}>notion</span> widget world
							✨
						</p>
						<GoogleLogin
							clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
							buttonText="Continue with Google"
							className={styles.google__login__btn}
							isSignedIn={true}
							onSuccess={this.loginSuccess}
							onFailure={this.loginFailure}
							cookiePolicy={"single_host_origin"}
						/>
					</div>
				</Modal>
			</div>
		);
	}
}

export default withRouter(index);
