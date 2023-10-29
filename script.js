function addToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  function calculatePercentage() {
    var currentValue = parseFloat(document.getElementById('display').value);
    var result = currentValue / 100;
    document.getElementById('display').value = result;
}
  
  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }