// Your code here
function saturdayFun(text="roller-skate"){
  return `This Saturday, I want to ${text}!`;
}

const mondayWork = function(text="go to the office") {
  return `This Monday, I will ${text}.`;
}

const wrapAdjective = function(){
  function(text="go to the office") {
    return `This Monday, I will ${text}.`;
  }
}