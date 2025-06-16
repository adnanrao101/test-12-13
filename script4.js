// Take input from the user
let char = prompt("Enter a single character:");

// Convert to lowercase to handle uppercase input too
char = char.toLowerCase();

// Check if input is a single character
if (char.length === 1) {
    // Check if it's a vowel
    let isVowel = (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u');
    alert("Is it a vowel? " + isVowel);
} else {
    alert("Please enter only a single character.");
}