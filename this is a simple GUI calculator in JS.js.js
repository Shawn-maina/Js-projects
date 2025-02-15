const calculator = document.createElement("div");
calculator.style.width = "250px";
calculator.style.margin = "50px auto";
calculator.style.padding = "20px";
calculator.style.border = "2px solid black";
calculator.style.borderRadius = "10px";
calculator.style.textAlign = "center";
calculator.style.backgroundColor = "#f4f4f4";

const display = document.createElement("input");
display.type = "text";
display.style.width = "90%";
display.style.height = "40px";
display.style.marginBottom = "10px";
display.style.fontSize = "20px";
display.style.textAlign = "right";
display.readOnly = true;
calculator.appendChild(display);

const buttonsContainer = document.createElement("div");
calculator.appendChild(buttonsContainer);

const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
];

buttons.forEach(text => {
    const button = document.createElement("button");
    button.textContent = text;
    button.style.width = "22%";
    button.style.height = "50px";
    button.style.margin = "5px";
    button.style.fontSize = "18px";
    button.style.cursor = "pointer";
    
    button.addEventListener("click", () => handleButtonClick(text));
    buttonsContainer.appendChild(button);
});

document.body.appendChild(calculator);

function handleButtonClick(value) {
    if (value === "C") {
        display.value = "";
    } else if (value === "=") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    } else {
        display.value += value;
    }
}
