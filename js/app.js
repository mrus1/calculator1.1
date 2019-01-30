let number;
let operator;
let equal;
let expression = {
  nums:""
};

$(".numbers").click(function(){
  number = parseInt($(this).val());
  console.log("button " + number + " was clicked");
  $(".inputBox").text(number);
  expression.nums += number;
});

$(".operators").click(function(){
  operator = ($(this).val());
  console.log("operator " + operator + " was clicked");
  $(".inputBox").text(operator);
  expression.nums += operator;
});

$("#equal").click(function(){
  equal = ($(this).val());
  console.log("clicked equal " + equal);
  $(".inputBox").text(equal);
  console.log(expression);
  result();
});

$(".clearAll").click(function(){
  console.log("clicked AC");
});

function result(){
  let resultValue = eval(expression.nums);
  $(".inputBox").text(resultValue);
};
