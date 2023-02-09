const 
usernameRegex = /\w{3,}/,
emailRegex = /\w+@\w+\.\w{2,}$/,
passwordRegex = /.{6,}/;

const 
usernamefield = document.querySelector('#username'),
emailfield = document.querySelector('#email'),
passwordfield = document.querySelector('#password'),
passwordrptfield = document.querySelector('#passwordrpt'),
error_elements = document.querySelectorAll('p');

document.querySelector('form').addEventListener('submit', (e) => {
	// prevents default form submission
	e.preventDefault();
	validate();
})

function validate() {
	// remove the correct and wrong signs on the elements
	usernamefield.classList = '';
	emailfield.classList = '';
	passwordfield.classList = '';
	passwordrptfield.classList = '';

	// sets the error message to empty strings
	error_elements[0].innerHTML = '';
	error_elements[1].innerHTML = '';
	error_elements[2].innerHTML = '';
	error_elements[3].innerHTML = '';
	
	if (usernamefield.value.match(usernameRegex) === null) {
		error_elements[0].innerHTML = 'Username must be at least 3 characters';
		usernamefield.classList.add('red');
	} else {
		usernamefield.classList.add('green');
	}
	
	if (emailfield.value.match(emailRegex) === null) {
		error_elements[1].innerHTML = 'Email is not valid';
		emailfield.classList.add('red');
	} else {
		emailfield.classList.add('green');
	}
	
	if (passwordfield.value.match(passwordRegex) === null) {
		error_elements[2].innerHTML = 'Password must be at least 6 characters';
		passwordfield.classList.add('red');
	} else {
		passwordfield.classList.add('green');
	}

	if (passwordfield.value !== passwordrptfield.value) {
		error_elements[3].innerHTML = 'Passwords do not match';
		passwordrptfield.classList.add('red');
	} else if (passwordrptfield.value == '') {
		error_elements[3].innerHTML = 'This field is required';
		passwordrptfield.classList.add('red');
	} else {
		passwordrptfield.classList.add('green');
	}
}
