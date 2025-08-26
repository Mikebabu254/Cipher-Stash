function convertToBinary() {
    let number = document.getElementById("numberInput").value;
    if(number === "") {
        document.getElementById("result").innerText = "Please enter a value!";
        return;
    };
    let binary = Number(number).toString(2); // convert to binary
    document.getElementById("result").innerText = `Binary: ${binary}`;
}