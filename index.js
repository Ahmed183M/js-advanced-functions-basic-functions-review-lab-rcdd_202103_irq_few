// Your code here
function saturdayFun(text="roller-skate"){
  return `This Saturday, I want to ${text}!`;
}

const mondayWork = function(text="go to the office") {
  return `This Monday, I will ${text}.`;
}

const wrapAdjective = function(visual="*"){
  return function(text="special") {
    return "You are "+visual+text+visual+"!";
  }
}

const Calculator = {
  add(num1, num2){
    return num1+num2;
  },
  
  subtract(num1, num2){
    return num1-num2;
  },
  
  multiply(num1, num2){
    return num1*num2;
  },
  
  divide(num1, num2){
    return num1/num2;
  },
}