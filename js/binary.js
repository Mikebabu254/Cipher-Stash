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