const codeInputs = document.querySelectorAll(".code");

// Function to handle input events
function handleInput(index) {
    return function (e) {
        const inputValue = e.target.value;

        // Move to the next input when a digit is entered
        if (inputValue.length === 1 && index < codeInputs.length - 1) {
            codeInputs[index + 1].focus();
        }

        // Move to the previous input when backspace is pressed
        if (inputValue.length === 0 && index > 0) {
            codeInputs[index - 1].focus();
        }

        // Check if all inputs are filled
        if (Array.from(codeInputs).every((input) => input.value.length === 1)) {
            alert("OTP verification successful!"); // You can customize this message
        }
    };
}

codeInputs.forEach((input, index) => {
    input.addEventListener("input", handleInput(index));

    input.addEventListener("keydown", (e) => {
        // Prevent moving to the previous input when backspace is pressed
        if (e.key === "Backspace" && index > 0) {
            e.preventDefault();
        }
    });

    input.addEventListener("focus", (e) => {
        e.target.select(); // Select the text when input is focused
    });
});
