// a. Store correct password
const correctPassword = "mySecret123";

// b. Ask user to enter their password
let userPassword = prompt("Please enter your password:");

// c. Validate the password
if (userPassword === "" || userPassword === null) {
    // i. If no password entered
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    // ii. If passwords match
    alert("Correct! The password you entered matches the original password");
} else {
    // If passwords do not match
    alert("Incorrect password");
}