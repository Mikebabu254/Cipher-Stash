// function convertToBinary() {
//     let number = document.getElementById("numberInput").value;
//     if(number === "") {
//         document.getElementById("result").innerText = "Please enter a value!";
//         return;
//     };
//     let binary = Number(number).toString(2); // convert to binary
//     document.getElementById("result").innerText = `Binary: ${binary}`;
// }

function convertToBinary() {
    let input = document.getElementById("inputValue").value;
    let result = "";

    if (input === "") {
      result = "Please enter a value!";
    } 
    // ✅ If input is a number
    else if (!isNaN(input)) {
        result = "Binary (Number): " + Number(input).toString(2);
    } 
    // ✅ If input is a string
    else {
        result = "Binary (String): " + Array.from(input)
        .map(c => c.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
    }
  document.getElementById("result").innerText = result;
}

function convertFromBinary() {
    let binaryInput = document.getElementById("binaryInput").value;
    let binaryValues = binaryInput.split(" ");
    let result = ""; 
    let isNumber = true;

    // Check if all binary values are valid
    for (let bin of binaryValues) {
        if (!/^[01]+$/.test(bin)) {
            document.getElementById("binaryResult").innerText = "Invalid binary input!";
            return;
        }
        if (bin.length > 8) {
            isNumber = false; // If any binary value is longer than 8 bits, treat as string
        }
    }

    if (binaryValues.length === 1 && isNumber) {
        // Convert single binary value to number
        result = "Number: " + parseInt(binaryValues[0], 2);
    } else {
        // Convert binary values to string
        result = "String: " + binaryValues
            .map(bin => String.fromCharCode(parseInt(bin, 2)))
            .join("");
    }
    document.getElementById("binaryResult").innerText = result;
}
