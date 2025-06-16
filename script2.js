 // Take two integer inputs from user
        let num1 = +prompt("Enter the first number:");
        let num2 = +prompt("Enter the second number:");

        // Compare the numbers and display the result
        if (num1 > num2) {
            document.write("The larger number is: " + num1);
        } else if (num2 > num1) {
            document.write("The larger number is: " + num2);
        } else {
            document.write("Both numbers are equal.");
        }