function encrypt() {
    const text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);

    // Validate shift value
    if (shift < 1 || shift > 25 || isNaN(shift)) {
        alert("Shift value must be between 1 and 25.");
        return;
    }

    let result = ""; // Initialize result as an empty string

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            // Uppercase letters
            result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            // Lowercase letters
            result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else if (code >= 48 && code <= 57) {
            // Numbers (0-9)
            result += String.fromCharCode(((code - 48 + shift) % 10) + 48);
        } else {
            // Non-alphabetic characters
            result += char;
        }
    }

    document.getElementById("result").value = result; // Update the result field
}

function decrypt() {
    const text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);

    // Validate shift value
    if (shift < 1 || shift > 25 || isNaN(shift)) {
        alert("Shift value must be between 1 and 25.");
        return;
    }

    let result = ""; // Initialize result as an empty string

    for (let i = 0; i < text.length; i++) {
        const char = text.charAt(i);
        const code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) {
            // Uppercase letters
            result += String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            // Lowercase letters
            result += String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);
        } else if (code >= 48 && code <= 57) {
            // Numbers (0-9)
            result += String.fromCharCode(((code - 48 - shift + 10) % 10) + 48);
        } else {
            // Non-alphabetic characters
            result += char;
        }
    }

    document.getElementById("result").value = result; // Update the result field
}

function clearFields() {
    document.getElementById("text").value = ""; // Clear the text input
    document.getElementById("result").value = ""; // Clear the result textarea
}

function copyResult() {
    const result = document.getElementById("result").value;
    const copyButton = document.querySelector("#copyButton"); // Select the copy button

    if (result) {
        navigator.clipboard.writeText(result)
            .then(() => {
                // Change the button text to "Copied"
                copyButton.textContent = "Copied";

                // Revert the button text back to "Copy" after 2 seconds
                setTimeout(() => {
                    copyButton.textContent = "Copy";
                }, 2000);
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
            });
    }
}

