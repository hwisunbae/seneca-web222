
   /*******************************************************************************
    *                     WEB222 – Assignment 2
    * I declare that this assignment is my own work in accordance with Seneca
    * Academic Policy.  No part of this assignment has been copied manually or
    * electronically from any other source (including web sites) or distributed to
    * other students.
    *
    * Name: __Hwisun, Bae____ Student ID: _128835170_ Date: _June 4, 2018___
    *
    ******************************************************************************/

/*****************************
* Step 1
*****************************/
var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
* Step 2
*****************************/
//a
function capFirstLetter (str){
  var updatedStr = str.toLowerCase();
  updatedStr = updatedStr.replace(updatedStr[0],updatedStr[0].toUpperCase());
  return updatedStr;
}
//b
e1 = prompt ( "Enter your first name " );
//c
e1 = capFirstLetter ( e1 );

/*****************************
* Step 3
*****************************/
//a
function getAge (num) { // 1993
  var currentYear = (new Date()).getFullYear(); //2018
  num = currentYear - num - 1;
  return  num;
}
//b
e2 = prompt ("Enter the year of your birth day");
e2 = getAge (Number(e2));

/*****************************
* Step 4
*****************************/
//a
e3 = prompt ("Enter the college name you are attending");
e3 = e3.split(' ');
for ( var i = 0 ; i < e3.length ; i ++){
  e3[i] = capFirstLetter(e3[i]);
}

/*****************************
* Step 5
*****************************/
e4 = prompt ("Enter 5 favorite sports");
e4 = e4.split(',');
for (var i = 0 ; i < e4.length; i ++){
  if (e4[i] == "football"){
    e4[i] = e4[i].replace("football", "soccer");
  }
}
e5 = prompt ( "Enter an extra favorite sports ");
e4.push(e5);

/*****************************
* Step 6
*****************************/
for ( var i = 0 ; i < e4.length ; i ++){
  e4[i] = e4[i].replace(e4[i], e4[i].toUpperCase());
}
e4.sort();

/*****************************
* Step 7
*****************************/
function getDateString (date){
  var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];

  var getDay = date.getDay();
  var getMonth = date.getMonth();
  var getYear = date.getFullYear();

  if (getDay < 10){
    getDay = "0" + getDay;
  }

  return getYear + "-" + months[getMonth] + "-" + getDay;
}

e6 = new Date();
e7 = getDateString( e6 );

/*****************************
* Step 8
*****************************/
var e3_ = '', e4_ = '';
for ( var i = 0 ; i < e3.length ; i ++ ){
    e3_ += e3[i] + " ";
}
for ( var i = 0 ; i < e4.length ; i ++ ){
    e4_ += "\n\t\t" + e4[i];
}

str = "User info:\n\n"
    + "name (e1): " + e1 + "\n"
    + "age (e2): " + e2 + "\n"
    + "school (e3): " + e3_ + "\n"
    + "favorite sports (e4): " + e4_ + "\n"
    + "current date (e7): " + e7;

console.log(str);
