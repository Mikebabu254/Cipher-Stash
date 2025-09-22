const copyButton = document.getElementById("copy");
const outputDiv = document.getElementById("outputBase64");

// Toggle button state depending on output content
function toggleCopyButton() {
  if (outputDiv.textContent.trim() === "") {
    copyButton.disabled = true;
    copyButton.style.opacity = "0.5";
    copyButton.style.cursor = "not-allowed";
  } else {
    copyButton.disabled = false;
    copyButton.style.opacity = "1";
    copyButton.style.cursor = "pointer";
  }
}

// Initial state check
toggleCopyButton();

// Copy to clipboard event
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
  const outputDivText = document.getElementById("outputText");
  if (!inputBase64) {
    outputDivText.textContent = "Please enter Base64 text to decode.";
    return;
  }
  try {
    const plainText = atob(inputBase64);
    outputDivText.textContent = plainText;
  } catch (error) {
    outputDivText.textContent = "Error: Invalid Base64 input.";
  }
}
