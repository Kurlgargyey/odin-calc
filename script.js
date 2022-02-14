const compute = function(){
  if (OPERATION){
    switch(OPERATION) {
      case '+':
        DISPLAY.textContent = add(PREVIOUS,DISPLAY.textContent);
        break;
      case '-':
        DISPLAY.textContent = subtract(PREVIOUS,DISPLAY.textContent);
        break;
      case '*':
        DISPLAY.textContent = multiply(PREVIOUS,DISPLAY.textContent);
        break;
      case '/':
        DISPLAY.textContent = divide(PREVIOUS,DISPLAY.textContent);
        break;
    }
    PREVIOUS = DISPLAY.textContent;
    CLEARNEXT = true;
  }else {
    PREVIOUS = DISPLAY.textContent;
    clear();
    DISPLAY.textContent = '0';
    CLEARNEXT = true;
  }
}

const round = function(num) {
  return Math.round(num*10000)/10000
}

const add = function(a, b) {
	return round(+a + +b);
};

const subtract = function(a, b) {
	return round(+a - +b);
};

const multiply = function(a,b){
  return round(+a * +b);
};

const divide = function(a, b){
  if(b==0){
    return "You can't do that.";
  }
  return round(+a / +b);
};

const power = function(a, b) {
	return round(a ** b);
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
  DISPLAY.textContent = '';
}

const addDigit = function(digit){
  if(CLEARNEXT){
    clear();
    CLEARNEXT = false;
  }
  DISPLAY.textContent += digit
}

const addDecimals = function(){
  if(!DISPLAY.textContent.includes('.')){
    DISPLAY.textContent += '.';
    CLEARNEXT = false;
  }
}

const removeLastDigit = function(){
  DISPLAY.textContent = DISPLAY.textContent.slice(0,DISPLAY.textContent.length-1);
  if(!DISPLAY.textContent){
    DISPLAY.textContent = '0';
    CLEARNEXT = true;
  }
}

const addOperator = function(operator){
  compute();
  OPERATION = `${operator}`;
}

const main = function(){
  
  const digits = document.querySelectorAll('div.digits div button.digit');
  const operators = document.querySelectorAll('button.op');
  const calculate = document.querySelector('button#operate');
  const clearbtn = document.querySelector('#clear');
  const decimalbtn = document.querySelector('button#decimal');
  const backspacebtn = document.querySelector('button#backspace');

  digits.forEach(button => {
    button.addEventListener('click',()=>{
      addDigit(button.textContent);
    })
   });

  decimalbtn.addEventListener('click',()=>{
    addDecimals();
    });

  backspacebtn.addEventListener('click',()=>{
    removeLastDigit();
  });

  operators.forEach(button => {
    button.addEventListener('click',() => {
      addOperator(button.textContent);
    })
  });

  calculate.addEventListener('click',() => {
    compute();
    OPERATION = '';
  });

  clearbtn.addEventListener('click',()=>{
    clear()
    PREVIOUS = 0;
    OPERATION = '';
    CLEARNEXT = true;
    DISPLAY.textContent = '0';
  });

  window.addEventListener('keydown',(e)=>{
    switch(e.key){
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        addDigit(e.key);
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        addOperator(e.key);
        break;
      case 'Enter':
        compute();
        OPERATION = '';
        break;
      case 'Backspace':
        removeLastDigit();
        break;
      case ',':
      case '.':
        addDecimals();
        break;
      case 'Delete':
        clear()
        PREVIOUS = 0;
        OPERATION = '';
        CLEARNEXT = true;
        DISPLAY.textContent = '0';
        break;
    }
  });
}

const DISPLAY = document.querySelector('.display');

let PREVIOUS = 0;
let OPERATION = '';
let CLEARNEXT = true;

main();