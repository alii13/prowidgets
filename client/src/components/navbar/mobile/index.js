import React, { Component } from "react";
import styles from "./index.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import ClickOutHandler from "react-onclickout";
import { CSSTransition } from "react-transition-group";
import {Link} from 'react-router-dom'
import { Modal } from "antd";
import notification from "../../notification";
import GoogleLogin from "react-google-login";
import { withRouter } from "react-router-dom";
import { refreshTokenSetup } from "../../../auth";
import { api } from "../../../utils/api";

 class index extends Component {
	state = {
		toggleNavbar: false,
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
				notification("error", err.message);
			});
	};

	loginFailure = (e) => {
		notification("error", e.message);
	};

	onClickOut = (e) => {
		this.setState({ toggleNavbar: false });
	};


	render() {
		return (
			<div className={styles.container}>
				<div className={styles.centered__brand}>
					<span className={styles.bold}>prowidgets</span>.co
				</div>
				<GiHamburgerMenu
					className={styles.burger__icon}
					onClick={() =>
						this.setState({ toggleNavbar: !this.state.toggleNavbar })
					}
				/>
				<CSSTransition
					in={this.state.toggleNavbar}
					timeout={200}
					classNames="mobile__navbar__transition"
					unmountOnExit
				>
					<ClickOutHandler onClickOut={this.onClickOut}>
						{/* <div className="h-23"></div> */}
						<div className="mobile-navbar">
							<div className={styles.brand}>
								<span className={styles.bold}>Slider</span>.so
							</div>
							<div className={styles.links}>
								<div className={styles.link}>How it works</div>
								<div className={styles.link}>Usecases</div>
						<div className={`${styles.link} ${styles.link__btn}`}  onClick={()=>this.setState({ showModal: true })}>Create Your Slider</div>
							</div>
						</div>
					</ClickOutHandler>
				</CSSTransition>
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