  // Take number input from user
        let number = +prompt("Enter a number:");

        // Check whether it's positive, negative or zero
        if (number > 0) {
            document.write("The number is Positive.");
        } else if (number < 0) {
            document.write("The number is Negative.");
        } else {
            document.write("The number is Zero.");
        }