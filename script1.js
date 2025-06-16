  // Take a single character input from user
        let input = prompt("Enter a single character:");

        // Get ASCII code of the first character
        let charCode = input.charCodeAt(0);

        // Check type using ASCII ranges
        if (charCode >= 48 && charCode <= 57) {
            document.write("You entered a Number.");
        } else if (charCode >= 65 && charCode <= 90) {
            document.write("You entered an Uppercase Letter.");
        } else if (charCode >= 97 && charCode <= 122) {
            document.write("You entered a Lowercase Letter.");
        } else {
            document.write("You entered a Special Character or Invalid Input.");
        }