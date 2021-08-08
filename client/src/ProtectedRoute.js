import React, { Component } from "react";
import { isLoggedIn, getUserDetails } from "./auth";
import { withRouter } from "react-router-dom";

class ProtectedRoute extends Component {
	constructor(props) {
		super(props);
		this.user = React.createRef();
	}

	render() {
		const loggedIn = isLoggedIn();
		!loggedIn
			? this.props.history.push("/")
			: (this.user.current = getUserDetails().profileObj);

		return (
			<>
				{loggedIn
					? React.cloneElement(this.props.children, {
							user: this.user.current,
					  })
					: null}
			</>
		);
	}
}
{
}

export default withRouter(ProtectedRoute);
