const copiedP = document.querySelector('.copied')
function generatePassword() {
	const length = document.getElementById("passwordLength").value;
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const numbers = "0123456789";
	const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";


	const allChars = uppercase + lowercase + numbers + specialChars;

	let password = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * allChars.length);
		password += allChars.charAt(randomIndex);
	}

	document.getElementById("generatedPassword").textContent = password;
	window.generatedPassword = password;
	copiedP.textContent = ''
}
function copyPassword() {
	if (window.generatedPassword) {
		const tempInput = document.createElement("input");
		tempInput.value = window.generatedPassword;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand("copy");
		document.body.removeChild(tempInput);
		copiedP.textContent = 'password copied'


	} else {
		alert("Generate a password first before copying!");
	}

}