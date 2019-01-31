let number;
let operator;
let equal;
let resultValue;
let i = 0;
let expression = {
  nums:""
};

$(".numbers").click(function(){
  if(i == 1){
    clearExpr();
    number = parseInt($(this).val());
    $(".inputBox").text(number);
    expression.nums += number;
    $(".currentExpr").text(expression.nums);
  } else {
    number = parseInt($(this).val());
    $(".inputBox").text(number);
    expression.nums += number;
    $(".currentExpr").text(expression.nums);
  };
});

$(".operators").click(function(){
  operator = ($(this).val());
  specialOper();
  expression.nums += operator;
  $(".currentExpr").text(expression.nums);
  i = 0;
});

$("#equal").click(function(){
  equal = ($(this).val());
  $(".inputBox").text(equal);
  result();
  i = 1;
});

$(".clearAll").click(function(){
  clearExpr();
});

function specialOper(){
  if(operator == "*"){
    $(".inputBox").text("x")
  } else if (operator == "/"){
    $(".inputBox").text("÷")
  } else if (operator == "%") {
    $(".inputBox").text("% x");
    operator = "*0.01*"
  } else if (operator == "(") {
    operator = "*("
  } else {
    $(".inputBox").text(operator);
  };
};

function result(){
  resultValue = eval(expression.nums);
  $(".inputBox").text(resultValue);
  $(".currentExpr").text(expression.nums);
  //same as storing in ANS:
  expression = {
    nums: resultValue
  };
};

function clearExpr(){
  number = "";
  operator = "";
  expression = {
    nums:""
  };
  $(".inputBox").text("0");
  $(".currentExpr").text("0");
  i = 0;
};
