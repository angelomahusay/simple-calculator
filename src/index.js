function appendToDisplay(value) {
  document.getElementById('result').value += value;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = eval(result);
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function toggleSign() {
  let result = document.getElementById('result').value;
  if (result) {
    document.getElementById('result').value = eval(result) * -1;
  }
}

function percent() {
  let result = document.getElementById('result').value;
  if (result) {
    document.getElementById('result').value = eval(result) / 100;
  }
}
