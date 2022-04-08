let usernameRegex = /\w{3,}/;
let emailRegex = /\w+@\w+\.\w{2,}$/;
let passwordRegex = /.{6,}/;

const usernamefield = document.querySelector("input#username");
const emailfield = document.querySelector("input#email");
const passwordfield = document.querySelector("input#password");
const passwordrptfield = document.querySelector("input#passwordrpt");

document.querySelector("form").addEventListener("submit", function (event) {
	// prevents form submission
	event.preventDefault();
	validate();
    validateii();
});

function validate () {
	// remove the correct and wrong signs on the elements
	usernamefield.classList = "";
	emailfield.classList = "";
	passwordfield.classList = "";
	passwordrptfield.classList = "";
	// sets the error message to empty strings
	document.querySelector("p.username").innerHTML = " ";
	document.querySelector("p.email").innerHTML = " ";
	document.querySelector("p.password").innerHTML = " ";
	document.querySelector("p.passwordrpt").innerHTML = " ";
	
	if (usernamefield.value.match(usernameRegex) == null) {
		document.querySelector("p.username").innerHTML = "Username must be at least 3 characters";
		usernamefield.classList.add("red");
	} else {
		usernamefield.classList.add("green");
	}
	
	if (emailfield.value.match(emailRegex) == null) {
		document.querySelector("p.email").innerHTML = "Email is not valid";
		emailfield.classList.add("red");
	} else {
		emailfield.classList.add("green");
	}
	
	if (passwordfield.value.match(passwordRegex) == null) {
		document.querySelector("p.password").innerHTML = "Password must be at least 6 characters";
		passwordfield.classList.add("red");
	} else {
		passwordfield.classList.add("green");
	}

	if (passwordfield.value !== passwordrptfield.value) {
		document.querySelector("p.passwordrpt").innerHTML = "Passwords do not match";
		passwordrptfield.classList.add("red");
	} else if (passwordrptfield.value == "") {
		document.querySelector("p.passwordrpt").innerHTML = "This field is required";
		passwordrptfield.classList.add("red");
	} else {
		passwordrptfield.classList.add("green");
	}
}

function validateii() { 
    if (usernamefield.value.match(usernameRegex) && emailfield.value.match(emailRegex) && passwordfield.value.match(passwordRegex) && passwordfield.value == passwordrptfield.value) {
		alert('Nicely done!')
    }
}