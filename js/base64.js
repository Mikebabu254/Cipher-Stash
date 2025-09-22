const copyButton = document.getElementById("copy");
const copyButton2 = document.getElementById("copy2");
const outputDiv = document.getElementById("outputBase64");
const outputDiv2 = document.getElementById("outputText");

// Toggle button state depending on output content
function toggleCopyButton() {
  if (
    outputDiv.textContent.trim() === "" ||
    outputDiv.textContent === "Please enter some text to encode." ||
    outputDiv.textContent === "Error: Unable to encode the text."
  ) {
    copyButton.disabled = true;
    copyButton.style.opacity = "0.5";
    copyButton.style.cursor = "not-allowed";
  } else {
    copyButton.disabled = false;
    copyButton.style.opacity = "1";
    copyButton.style.cursor = "pointer";
  }
}

function toggleCopyButton2() {
  if (
    outputDiv2.textContent.trim() === "" ||
    outputDiv2.textContent === "Please enter Base64 text to decode." ||
    outputDiv2.textContent === "Error: Invalid Base64 input."
  ) {
    copyButton2.disabled = true;
    copyButton2.style.opacity = "0.5";
    copyButton2.style.cursor = "not-allowed";
  } else {
    copyButton2.disabled = false;
    copyButton2.style.opacity = "1";
    copyButton2.style.cursor = "pointer";
  }
}

// Initial state check
toggleCopyButton();
toggleCopyButton2();

// Copy to clipboard event for Base64 output
copyButton.addEventListener("click", () => {
  const textToCopy = outputDiv.textContent.trim();
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert(textToCopy + " has been copied to clipboard.");
      copyButton.textContent = "COPIED";
      setTimeout(() => {
        copyButton.textContent = "COPY";
      }, 2000);
    });
  }
});

// Copy to clipboard event for decoded text output
copyButton2.addEventListener("click", () => {
  const textToCopy = outputDiv2.textContent.trim();
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert(textToCopy + " has been copied to clipboard.");
      copyButton2.textContent = "COPIED";
      setTimeout(() => {
        copyButton2.textContent = "COPY";
      }, 2000);
    });
  }
});

// Convert plain text to Base64
function convertToBase64() {
  const inputText = document.getElementById("inputText").value;
  if (!inputText) {
    outputDiv.textContent = "Please enter some text to encode.";
    toggleCopyButton();
    return;
  }
  try {
    const base64Text = btoa(inputText);
    outputDiv.textContent = base64Text;
  } catch (error) {
    outputDiv.textContent = "Error: Unable to encode the text.";
  }
  toggleCopyButton(); // refresh button state
}

// Convert Base64 to plain text
function convertFromBase64() {
  const inputBase64 = document.getElementById("inputBase64").value;
  if (!inputBase64) {
    outputDiv2.textContent = "Please enter Base64 text to decode.";
    toggleCopyButton2();
    return;
  }
  try {
    const plainText = atob(inputBase64);
    outputDiv2.textContent = plainText;
  } catch (error) {
    outputDiv2.textContent = "Error: Invalid Base64 input.";
  }
  toggleCopyButton2(); // refresh button state
}
