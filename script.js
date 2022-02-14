const compute = function(){
  if (OPERATION){
    switch(OPERATION) {
      case 'add':
        DISPLAY.textContent = add(PREVIOUS,DISPLAY.textContent);
        break;
      case 'subtract':
        DISPLAY.textContent = subtract(PREVIOUS,DISPLAY.textContent);
        break;
      case 'multiply':
        DISPLAY.textContent = multiply(PREVIOUS,DISPLAY.textContent);
        break;
      case 'divide':
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
  if(b===0){
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

const main = function(){
  
  const digits = document.querySelectorAll('div.digits div button.digit');
  const operators = document.querySelectorAll('button.op');
  const calculate = document.querySelector('button#operate');
  const clearbtn = document.querySelector('#clear');
  const decimalbtn = document.querySelector('button#decimal');
  const backspacebtn = document.querySelector('button#backspace');

  digits.forEach(button => {
    button.addEventListener('click',()=>{
      if(CLEARNEXT){
        clear();
        CLEARNEXT = false;
      }
      DISPLAY.textContent += button.textContent}
      );
   });

  decimalbtn.addEventListener('click',()=>{
    if(!DISPLAY.textContent.includes('.')){
    DISPLAY.textContent += decimalbtn.textContent
    CLEARNEXT = false;
    }
  });

  backspacebtn.addEventListener('click',()=>{
    DISPLAY.textContent = DISPLAY.textContent.slice(0,DISPLAY.textContent.length-1);
    if(!DISPLAY.textContent){
      DISPLAY.textContent = '0';
    }
  });

  operators.forEach(button => {
    button.addEventListener('click',() => {
      compute();
      OPERATION = `${button.id}`;
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
}

const DISPLAY = document.querySelector('.display');

let PREVIOUS = 0;
let OPERATION = '';
let CLEARNEXT = true;

main();