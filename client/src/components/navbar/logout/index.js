import React from "react";
import { GoogleLogout } from "react-google-login";
import styles from "./index.module.css";
import { logoutLocalStorage } from "../../../auth";
import { withRouter } from "react-router-dom";
import Media from "react-media";

function index(props) {
	const onSuccess = (s) => {
		console.log("logout succesfully", s);
		logoutLocalStorage();
		props.history.push("/");
	};
	return (
		<>
			<Media queries={{ small: "(max-width: 576px)" }}>
				{(matches) =>
					matches.small ? (
						<GoogleLogout
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						render={(renderProps) => (
							<p
								className={styles.mobile__btn}
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								Sign Out
							</p>
						)}
						onLogoutSuccess={onSuccess}
					></GoogleLogout>
					) : (
						<GoogleLogout
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						render={(renderProps) => (
							<p
								className={styles.btn}
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								Sign Out
							</p>
						)}
						onLogoutSuccess={onSuccess}
					></GoogleLogout>
					)
				}
			</Media>

		</>
	);
}

export default withRouter(index);
