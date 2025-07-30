function calculate() {
  // Get the values from the input fields on the page and convert them to numbers; 3 number boxes
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var num3 = Number(document.getElementById("num3").value);  
  
  var operator1 = document.getElementById("operator1").value;
  var operator2 = document.getElementById("operator2").value;
  
  var result;

  // Perform calculation based on the selected operator1; calculation between num1 and num2
  if (operator1 === "+") {
    result = num1 + num2; // Addition
  } else if (operator1 === "-") {
    result = num1 - num2; // Subtraction
  } else if (operator1 === "*") {
    result = num1 * num2; // Multiplication
  } else if (operator1 === "/") {
    result = num1 / num2; // Division
  } else if (operator1 === "%") {
    result = num1 % num2; // Modulus (remainder)
  } else {
    result = "Invalid operator1"; // Handle unexpected operator input
  }


  // Perform calculation based on the selected operator2; calculation between num2 and num2
  if (operator2 === "+") {
    result = num2 + num3; // Addition
  } else if (operator2 === "-") {
    result = num2 - num3; // Subtraction
  } else if (operator2 === "*") {
    result = num2 * num3; // Multiplication
  } else if (operator2 === "/") {
    result = num2 / num3; // Division
  } else if (operator2 === "%") {
    result = num2 % num3; // Modulus (remainder)
  } else {
    result = "Invalid operator2"; // Handle unexpected operator input
  }  

  // Display the result on the page inside the element with id "result"
  document.getElementById("result").innerText = "Result: " + result;
}
