async function sha256FromText(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function sha256FromBuffer(arrayBuffer) {
  const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function generateHash() {
  const text = document.getElementById("inputText").value;
  if (!text) {
    document.getElementById("hashResult").innerText = "Please enter some text.";
    return;
  }
  const hash = await sha256FromText(text);
  document.getElementById("hashResult").innerText = hash;
}

async function generateFileHash() {
  const fileInput = document.getElementById("inputFile");
  if (fileInput.files.length === 0) {
    document.getElementById("hashResult").innerText = "Please select a file.";
    return;
  }

  const file = fileInput.files[0];
  const arrayBuffer = await file.arrayBuffer();
  const hash = await sha256FromBuffer(arrayBuffer);
  document.getElementById("hashResult").innerText = hash;
}

function copyHash() {
  const hash = document.getElementById("hashResult").innerText;
  if (!hash || hash.startsWith("Please")) {
    alert("No hash to copy!");
    return;
  }
  navigator.clipboard.writeText(hash).then(() => {
    alert("Hash copied to clipboard!");
  });
}