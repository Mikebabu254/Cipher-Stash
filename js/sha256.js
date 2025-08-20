async function sha256(message) {
      const msgBuffer = new TextEncoder().encode(message);
      const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    }

    async function generateHash() {
      const text = document.getElementById("inputText").value;
      if (!text) {
        document.getElementById("hashResult").innerText = "Please enter some text.";
        return;
      }
      const hash = await sha256(text);
      document.getElementById("hashResult").innerText = hash;
    }