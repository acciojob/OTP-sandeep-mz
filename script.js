//your JS code here. If required.
const codeInputs = document.querySelectorAll(".code");

codeInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        const inputValue = e.target.value;

        // Move to the next input when a digit is entered
        if (inputValue.length === 1 && index < codeInputs.length - 1) {
            codeInputs[index + 1].focus();
        }

        // Move to the previous input when backspace is pressed
        if (inputValue.length === 0 && index > 0) {
            codeInputs[index - 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        // Prevent moving to the previous input when backspace is pressed
        if (e.key === "Backspace" && index > 0) {
            e.preventDefault();
        }
    });
});
