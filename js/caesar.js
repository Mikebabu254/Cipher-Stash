function encrypt() {
    const text = document.getElementById("text").value;
    const shift = parseInt(document.getElementById("shift").value);
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
        } else {
            // Non-alphabetic characters
            result += char;
        }
    }

    document.getElementById("result").value = result; // Update the result field
}

function decrypt() {
    const text = document.getElementById("text").value;
    const shift = parseInt(document.getElementById("shift").value);
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

    if (result) {
        navigator.clipboard.writeText(result)
            .then(() => {
                alert("Result copied to clipboard!");
            })
            .catch(err => {
                console.error("Failed to copy: ", err);
                alert("Failed to copy the text. Please try again.");
            });
    } else {
        alert("No result to copy!");
    }
}
    