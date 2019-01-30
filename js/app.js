let number;
let operator;
let equal;

$(".numbers").click(function(){
  number = parseInt($(this).val());
  console.log("button " + number + " was clicked");
  $(".inputBox").text(number);
});

$(".operators").click(function(){
  operator = ($(this).val());
  console.log("operator " + operator + " was clicked");
  $(".inputBox").text(operator);
});

$("#equal").click(function(){
  equal = ($(this).val());
  console.log("clicked equal " + equal);
  $(".inputBox").text(equal);
});

$(".clearAll").click(function(){
  console.log("clicked AC");
});
