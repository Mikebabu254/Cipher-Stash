const copyButton = document.getElementById("copy");


copyButton.addEventListener("click", () => {
  const outputDiv = document.getElementById("outputBase64");
  const textToCopy = outputDiv.textContent;
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert(textToCopy + " Copied to clipboard!");
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
  const outputDiv = document.getElementById("outputBase64");
  if (!inputText) {
    outputDiv.textContent = "Please enter some text to encode.";
    return;
  }
  try {
    const base64Text = btoa(inputText);
    outputDiv.textContent = base64Text;
  } catch (error) {
    outputDiv.textContent = "Error: Unable to encode the text.";
  }
}
// Convert Base64 to plain text
function convertFromBase64() {
  const inputBase64 = document.getElementById("inputBase64").value;
  const outputDiv = document.getElementById("outputText");
  if (!inputBase64) {
    outputDiv.textContent = "Please enter Base64 text to decode.";
    return;
  }
  try {
    const plainText = atob(inputBase64);
    outputDiv.textContent = plainText;
  } catch (error) {
    outputDiv.textContent = "Error: Invalid Base64 input.";
  }
}

