let calcKeyboard = document.querySelectorAll('.key');
let calcKeyboardParents = document.querySelectorAll('.keys');
let display = document.querySelector('.inp-display');
let displayVal;
let keyVal;



calcKeyboard.forEach((key, i) => {
  key.parentElement.onclick = () => {
    keyVal = key.value;
    if (keyVal == "AC"){
      display.value = "0";
    } else if (keyVal == "C"){
       if (display.value.length > 1){
         display.value = display.value.slice(0, -1);
       } else {
         display.value = "0";
       }
    } else if (keyVal == "%") {
      display.value = eval(display.value) / 100;
    } else if (keyVal == "="){
      if (eval(display.value) == "Infinity" || display.value == "0/0"){
        alert("На нуль ділити не можна!");
      } else {
          try {
            display.value = eval(display.value);
          } catch (e) {
            alert(e);
          }
        }
    } else {
      if (display.value == "0" && keyVal != "." && keyVal != "+" && keyVal != "-" && keyVal != "*" && keyVal != "/"){
        display.value = "";
      }
      display.value += key.value;
    }
    };

});
