import React, { Component } from "react";
import styles from "./index.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import ClickOutHandler from "react-onclickout";
import { CSSTransition } from "react-transition-group";
import { Badge } from "antd";
import Logout from "../../navbar/logout";

const badgeStyles = {
	right: "22%",
	height: "16px",
	width: "16px",
	top: "10%",
	border: "2px solid #fff",
};
export default class index extends Component {
	state = {
		toggleNavbar: false,
	};

	onClickOut = (e) => {
		this.setState({ toggleNavbar: false });
	};
	render() {
		const { imageUrl, familyName } = this.props.user;
		return (
			<div className={styles.container}>
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
						<div className="mobile-menubar">
							<div className={styles.brand}>Hey! {familyName} 👋</div>
							<div className={styles.links}>
								<div className={styles.link}>Tutorials</div>
								<div className={styles.link}>Request Widget</div>
								<div className={styles.link}>
									<Logout />
								</div>
								<div
									className={styles.avatar__link}
									onClick={() =>
										this.setState({ toggleNavbar: !this.state.toggleNavbar })
									}
								>
									<Badge
										dot={true}
										status={"success"}
										className={styles.badge__circle}
										style={badgeStyles}
									>
										<div className={styles.badge}>
											<img
												src={imageUrl}
												alt="avatar"
												className={styles.avatar}
											/>
										</div>
									</Badge>
								</div>
							</div>
						</div>
					</ClickOutHandler>
				</CSSTransition>
			</div>
		);
	}
}
