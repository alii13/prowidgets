import React, { Component } from "react";
import styles from "./index.module.css";
import { Badge } from "antd";
import Logout from "../../navbar/logout"

const badgeStyles = {
	right: "22%",
	height: "16px",
	width: "16px",
	top: "10%",
	border: "2px solid #fff",
};
export default class index extends Component {
	state = {
		toggleProfileMenu: false,
	};
	openProfileMenu=()=>{
	this.setState({ toggleProfileMenu: true });
	}
	closeProfileMenu=()=>{
	this.setState({ toggleProfileMenu: false });
	}
	render() {
		const { imageUrl, familyName } = this.props.user;
		return (
			<div className={styles.container}>
				<div className={styles.navbar}>
					<div className={styles.brand}>
						{/* <span className={styles.bold}>Slider</span>.so */}
						Hey! {familyName} 👋
					</div>
					<div className={styles.links}>
						<div className={styles.link}>Tutorials</div>
						<div className={styles.link}>Request Widget</div>
						<div
							className={styles.avatar__link}
							onMouseEnter={this.openProfileMenu}
							onMouseLeave={this.closeProfileMenu}
						>
							<Badge
								dot={true}
								status={"success"}
								className={styles.badge__circle}
								style={badgeStyles}
							>
								<div className={styles.badge}>
									<img src={imageUrl} alt="avatar" className={styles.avatar} />
								</div>
							</Badge>
							{this.state.toggleProfileMenu ? (
							<div className={styles.profile__menu} >
								<p className={styles.profile__menu__link}>Settings</p>
								<Logout/>
							</div>
						) : null}
						</div>

					</div>
				</div>
			</div>
		);
	}
}
