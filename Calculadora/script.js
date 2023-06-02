function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function deleteCharacter() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  function appendCharacter(character) {
    document.getElementById("result").value += character;
  }
  
  function calculateResult() {
    var result = document.getElementById("result").value;
    var calculatedResult = eval(result);
    document.getElementById("result").value = calculatedResult;
  }
  
  function calculateSquareRoot() {
    var result = document.getElementById("result").value;
    var calculatedResult = Math.sqrt(parseFloat(result));
    document.getElementById("result").value = calculatedResult;
  }
  
  function calculatePower() {
    var result = document.getElementById("result").value;
    var parts = result.split('^');
    var base = parseFloat(parts[0]);
    var exponent = parseFloat(parts[1]);
    var calculatedResult = Math.pow(base, exponent);
    document.getElementById("result").value = calculatedResult;
  }
  