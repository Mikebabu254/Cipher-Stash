// function convertToHex() {
//     let decimal = document.getElementById("decimalInput").value;
//     if (decimal === "") return;

//     let hex = Number(decimal).toString(16).toUpperCase(); // convert to hex
//     document.getElementById("result").innerText = `Hexadecimal: ${hex}`;
// }

function convertToHex() {
    let input = document.getElementById("decimalInput").value.trim();
    let result = "";

    if (input === "") {
      result = "Please enter a value!";
    } 
        // ✅ If input is a number
        else if (!isNaN(input)) {
        result = "Hexadecimal (Number): " + Number(input).toString(16).toUpperCase();
    } 
    // ✅ If input is a string
    else {
        result = "Hexadecimal (String): " + Array.from(input)
        .map(c => c.charCodeAt(0).toString(16).padStart(2, "0"))
        .join(" ");
    }
  document.getElementById("result").innerText = result;
}