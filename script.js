// Function to append numbers/operators to the display
function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Function to delete the last character from the display
function deleteChar() {
  let currentValue = document.getElementById("display").value;
  document.getElementById("display").value = currentValue.slice(0, -1);
}

// Function to evaluate the result
function calculate() {
  let currentValue = document.getElementById("display").value;
  try {
    // Use eval to evaluate the string as an expression
    let result = eval(currentValue);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
