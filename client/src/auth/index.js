export function isLoggedIn() {
	let user = getUserDetails(); //fetch data from localStorage
	if (
		user &&
		(user.accessToken || user.access_token) &&
		(getUserDetails().tokenObj.expires_at - new Date().getTime()) / 60000 > 5
	)
		return true;
	return false;
}


export  function getUserDetails() {
	let user = localStorage.getItem("user");
    user  =  JSON.parse(user);
	return user;
}

export  function logoutLocalStorage() {
    localStorage.removeItem("user");
}

export function	refreshTokenSetup (response) {
    const res = response || getUserDetails();
    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;

        // saveUserToken(newAuthRes.access_token);  <-- save new token

        // Setup the other timer after the first one
        setTimeout(refreshToken, refreshTiming);
    };

    // Setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
};


