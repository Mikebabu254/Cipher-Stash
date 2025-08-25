function convertToHex() {
    let decimal = document.getElementById("decimalInput").value;
    if (decimal === "") return;

    let hex = Number(decimal).toString(16).toUpperCase(); // convert to hex
    document.getElementById("result").innerText = `Hexadecimal: ${hex}`;
}