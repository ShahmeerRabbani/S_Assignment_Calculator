function displayValue(userVal) {
    var input = document.getElementById('input')
    input.value += userVal;
    console.log('connected')
}

function Clear() {
    var input = document.getElementById('input')
    input.value = '';
  }
  
  function Backspace() {
  var input = document.getElementById('input')
  input.value = input.value.slice(0, -1);
}

function displayResult() {
    var input = document.getElementById('input')

    try {
        var result = eval(input.value);
        input.value = result;
      } catch {
        input.value = "Error";
      }
    
}