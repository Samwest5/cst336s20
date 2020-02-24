$("#convertLength").on("click", convertLength);
$("#convertWeight").on("click", convertWeight);
$("#convertTemperature").on("click", convertTemperature);

// found online thx
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function convert(from, to, value) {
  if (from == to) {
    return value;
  }
  if (from == "pounds") {
    return 2.2046 * value;
  }
  if (from == "kilograms") {
    return 0.454 * value;
  }
  if (from == "feet") {
    return .3 * value;
  }
  if (from == "meters") {
    return 3.28 * value;
  }
  if (from == "fahrenheit") {
    return (value - 32) * 5/9;
  }
  if (from == "celsius") {
    return value * 9/5 + 32;
  }
}

function isValidInput(value) {
  if (isNaN(value) || value == "") {
    return false;
  } 
  else {
    return true;
  }
}

function setResult(resultID, result) {
  $(`#${resultID}`).html(result);
}

function convertLength() {
  let value = $("#length").val();
  if (isValidInput(value)) {
    value = Number(value);
    let from = $("#lengthFrom option:selected").val();
    let to = $("lengthTo option:selected").val();
    let result = round(convert(from, to, value), 2);
    setResult("lengthResult", result);
  }
  else {
    setResult("lengthResult", "Invalid Number");
  }
}

function convertWeight() {
  let value = $("#weight").val();
  if (isValidInput(value)) {
    value = Number(value);
    let from = $("#weightFrom option:selected").val();
    let to = $("#weightTo option:selected").val();
    let result = round(convert(from, to, value), 2);
    setResult("weightResult", result);
  }
  else {
    setResult("Invalid Number");
  }
}

function convertTemperature() {
  let value = $("#temperature").val();
  if (isValidInput(value)) {
    value = Number(value);
    let from = $("#temperatureFrom option:selected").val();
    let to = $("#temperatureTo option:selected").val();
    let result = round(convert(from, to, value), 2);
    setResult("temperatureResult", result);
  }
  else {
    setResult("Invalid Number");
  }
}