document.getElementById("check-btn").addEventListener("click", () => {
  const input = document.getElementById("user-input").value;
  const resultsDiv = document.getElementById("results-div");
  
  if (!input) {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validatePhoneNumber(input);
  const result = document.createElement("p");
  result.classList.add(isValid ? "valid" : "invalid");
  result.textContent = `${isValid ? "Valid" : "Invalid"} US number: ${input}`;
  resultsDiv.appendChild(result);
});

document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("results-div").innerHTML = "";
});

function validatePhoneNumber(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  return regex.test(str);
}
