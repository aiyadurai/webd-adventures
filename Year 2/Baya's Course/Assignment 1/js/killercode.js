(function() {
	
	// Grabs the session "cookie", if there is one.
	var userCheck = sessionStorage.getItem('UserID');

	// Performs the session cookie check on loading the index page:
	if (/index/.test(window.location.href)) {

		// If you've already logged in this browser/tab session:
		if (userCheck !== null) {

			// .replace() prevents going back to the last page.
			window.location.replace("courseobj.html");
		}
	// If not on the login page, we still need to check for login status:
	} else {

		// If it's your first time on the WEBD site, log in first:
		if (userCheck === null) {

			window.location.replace("index.html");
		}
	}
})();

// Used for form-action on login page. 
function storeID () {
	
	// First, get user id details:
	var loginValue = document.getElementById('login').value;

	// Parse it for characters:
	if (loginValue.match(/^[a-z0-9]+$/i)) {

		// If it was sucessfully parsed, we set a session cookie to allow entrance then perform animations:
		sessionStorage.setItem("UserID", loginValue);
		document.querySelector('body').classList.add('fadeOut');

		setTimeout( function () { 

			window.location = "courseobj.html";
		}, 500);
	}
}