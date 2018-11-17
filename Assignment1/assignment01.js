/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: _Hwisun, Bae_ Student ID: __128835170___ Date: __May 21, 2018__
*
********************************************************************************/

/*****************************
* Task 1
*****************************/
//a
var name = "Hwisun Bae", program = "CPA", numberOfcourses = "WEB222SBB";
var have_partTimeJob = false;
var T_N ;
//b
console.log ("My name is "+ name +" and I'm in "+ program + " program. I'm taking "+ numberOfcourses+" course in this semester.");
//c
if (have_partTimeJob){
  T_N = "have";
} else {
  T_N = "don't have";
}
//d
console.log ("My name is "+name+" and I'm in "+program+ " program. I'm taking "+ numberOfcourses+" course in this semester. and I "+ T_N + " a part-time job now.");


/*****************************
* Task 2
*****************************/
var current_date = new Date();
var current_year = current_date.getFullYear();
var age = prompt ("Please enter your age");
var birth_year = current_year - age - 1;
console.log("You were born in the year of " + birth_year + ". ");
var study_year = prompt("Enter the number of years you expect to study in the college: ");
var when_to_graduate = parseInt(study_year) + current_year;
console.log("You will graduate from Seneca college in the year of " + when_to_graduate + "." );

/*****************************
* Task 3
*****************************/
var Celsius = 20, Fahrenheit = 20;
var convertedF = Celsius * 1.8 + 32;
var convertedC = (Fahrenheit - 32) * 0.5556;
console.log(Celsius + "°C is " + convertedF + "°F");
console.log(Fahrenheit + "°F is "  + convertedC + "°C");

/*****************************
* Task 4
*****************************/
for (var num = 0 ;num <= 10; num++) {
  if ( num % 2 === 0) {
    console.log (num + " is even");
  } else {
    console.log (num + " is odd");
  }
}

/*****************************
* Task 5
*****************************/
//a
function largerNum (num1, num2) {
  if (num1 >= num2)
      return num1;
    else {
      return num2;
    }
} // Function declaration : starts with "function "

//b
var greaterNum = function (num1, num2) {
  if (num1 >= num2)
      return num1;
    else
      return num2;
};
// Function expression : starts with "var "

//c
a = 3;
b = 6;
console.log ("The larger number of "+ a + " and " + b+ " is " +largerNum (a, b) + ". ");
x = 2;
y = 3;
console.log ("The larger number of "+ x + " and " + y+ " is " +greaterNum (x, y) + ". ");

/*****************************
* Task 6
*****************************/
//a
function Evaluator () {
  var sum = 0, avg = 0;
  for (var i = 0 ; i < arguments.length ; i ++){
    sum += arguments[i];
  }
  var avg = sum / arguments.length;
  if (avg >= 50) {
    return true;
  } else {
    return false;
  }
}

//b
function T_F(value) {
  if (value){
    console.log("Average greater than or equal to 50: " + true);
  } else {
    console.log("Average greater than or equal to 50: " + false);
  }
}

T_F(Evaluator(20,30,40));
T_F(Evaluator(60,70,80));
T_F(Evaluator(20,50,90));

/*****************************
* Task 7
*****************************/
//a
var grade = function Grader (score){
  if (0.8 <= score && score <= 1) {
    return "A";
  } else if (0.7 <= score && score < 0.8){
    return "B";
  } else if (0.6 <= score && score < .7){
    return "C";
  } else if (0.5<= score && score < .6){
    return "D";
  } else if (0 <= score && score < .5){
    return "F";
  }
};

//b
for(var i = 0 ; i < 3 ; i++){
  var temp = prompt ("What is your score?");
  console.log("The grade given for " + temp + "% is " + grade (temp/100));
}

/*****************************
* Task 8
*****************************/
//a
function showMultiples (num, numMultiples){
  for(var i = 1; i <= numMultiples ; i++){
    console.log(num + " * " + i +" = " + num*i);
  }
}
//b
for (var i = 0 ; i < 3 ; i ++){
  var tempNum = prompt("Put a number :");
  var tempMultiples = prompt("How many times of multiples do you want to calculate? ");
  showMultiples (tempNum, tempMultiples);
}
