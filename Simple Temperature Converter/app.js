// Temperature conversion functions
function convertTemperature(temp, unit) {
  let celsius, fahrenheit, kelvin, rankine;

  if (unit === "F") {
    celsius = (temp - 32) * 5 / 9;
  } else if (unit === "K") {
    celsius = temp - 273.15;
  } else if (unit === "R") {
    celsius = (temp - 491.67) * 5 / 9;
  } else {
    celsius = temp;
  }

  fahrenheit = (celsius * 9 / 5) + 32;
  kelvin = celsius + 273.15;
  rankine = (celsius + 273.15) * 9 / 5;

  return { celsius, fahrenheit, kelvin, rankine };
}

// Validate input temperature
function validateInput(temp) {
  // Ensure temperature is a valid number, not empty, and within a reasonable range
  if (isNaN(temp) || temp === '') {
    return false;
  }
  // Optional: Limit the range of temperatures
  if (temp < -273.15 || temp > 10000) { // Example range: absolute zero to extreme high
    return false;
  }
  return true;
}

// Handle the convert button click
document.getElementById('convertBtn').addEventListener('click', function () {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const unit = document.getElementById('unitSelector').value;

  // Validate the input
  if (!validateInput(temp)) {
    alert("Please enter a valid temperature within the acceptable range.");
    return;
  }


  // Show loading indicator
  document.getElementById('loading').classList.add('show');

  // Simulate a short delay (for demonstration)
  setTimeout(function () {
    const { celsius, fahrenheit, kelvin, rankine } = convertTemperature(temp, unit);

    // Display the results
    document.getElementById('celsiusResult').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheitResult').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvinResult').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
    document.getElementById('rankineResult').textContent = `Rankine: ${rankine.toFixed(2)} °R`;

    // Hide loading indicator
    document.getElementById('loading').classList.remove('show');
  }, 1000); // Simulating loading delay (1 second)
});

// Disable the convert button until input is valid
const tempInput = document.getElementById('tempInput');
const convertBtn = document.getElementById('convertBtn');

tempInput.addEventListener('input', function () {
  convertBtn.disabled = !validateInput(tempInput.value);
});
