const compute = function(){
  if (OPERATION){
    switch(OPERATION) {
      case 'add':
        display.textContent = add(PREVIOUS,display.textContent);
        break;
      case 'subtract':
        display.textContent = subtract(PREVIOUS,display.textContent);
        break;
      case 'multiply':
        display.textContent = multiply(PREVIOUS,display.textContent);
        break;
      case 'divide':
        display.textContent = divide(PREVIOUS,display.textContent);
        break;
    }
    PREVIOUS = display.textContent;
    RESULT = true;
  }else {
    PREVIOUS = display.textContent;
    clear();
    display.textContent = '0';
    RESULT = true;
  }
}


const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return +a - +b;
};

const multiply = function(a,b){
  return +a * +b;
};

const divide = function(a, b){
  if(b===0){
    return NaN;
  }
  return +a / +b;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	start = 1;
  total = 1;
  while (start <= num) {
    total *= start;
    start ++;
  }
  return total;
};

const clear = function(){
  display.textContent = '';
}

const main = function(){
  
  const digits = document.querySelectorAll('div.digits div button.digit');
  const operators = document.querySelectorAll('button.op');
  const result = document.querySelector('button#operate');
  const clearbtn = document.querySelector('#clear');

  digits.forEach(button => {
    button.addEventListener('click',()=>{
      if(RESULT){
        clear();
        RESULT = false;
      }
      display.textContent += button.textContent}
      );
   });

  operators.forEach(button => {
    button.addEventListener('click',() => {
          compute();
          OPERATION = `${button.id}`;
    })
  });

  result.addEventListener('click',() => {
    compute();
    OPERATION = '';
  });

  clearbtn.addEventListener('click',()=>{
    clear()
    PREVIOUS = 0;
    OPERATION = '';
    RESULT = true;
    display.textContent = '0';
  });
}

const display = document.querySelector('.display');

let PREVIOUS = 0;
let OPERATION = '';
let RESULT = true;

main();