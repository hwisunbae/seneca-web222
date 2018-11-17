
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

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = {
    name: "",
    dob: new Date(),
    sid: "",
    program: "",
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa;
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/

// task 1

console.log("*** Task 1 ***\n\n");
var lastCourse = courses.pop();
console.log("Course " + lastCourse.code + " was deleted from the array (courses)");

var secondCourses = [
  { code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'http://scs.senecac.on.ca/~ibc233/'},
  { code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'http://scs.senecac.on.ca/~oop244/'},
  { code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'http://scs.senecac.on.ca/~web222/'},
  { code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'http://scs.senecac.on.ca/~dbs201/'}
]

for ( var i = 0 ; i < secondCourses.length ; i ++){
  courses.push(secondCourses[i]);
}
console.log("Adding new course objects into the array (courses)\n\n");

console.log("Course objects in the array (courses):\n")
for ( var i = 0 ; i < courses.length; i ++ ){
  console.log("\"" + courses[i].code + ", " + courses[i].name + ", " + courses[i].hours + " hours/week, website: " + courses[i].url + "\"");
}

console.log("\n\n");


// task 2 DOB how to use dob with toLocaleDateString

console.log("*** Task 2 ***\n\n");
console.log("Student obejcts in the array (students):\n");

var JohnSmith = Object.create(student)
JohnSmith.name = "John Smith";
JohnSmith.dob = new Date(1999,8,10);
JohnSmith.sid = "010456101";
JohnSmith.program = "CPA";
JohnSmith.gpa = 4;

var JimCarrey = Object.create(student)
JimCarrey.name = "Jim Carrey";
JimCarrey.dob = new Date(1992,0,17);
JimCarrey.sid = "012345678";
JimCarrey.program = "CPD";
JimCarrey.gpa = 3.5;

var JustinBieber = Object.create(student)
JustinBieber.name = "Justin Bieber";
JustinBieber.dob = new Date(1994,2,1);
JustinBieber.sid = "0987654321";
JustinBieber.program = "CAN";
JustinBieber.gpa = 3;

var JustinTrudeau = Object.create(student)
JustinTrudeau.name = "Justin Trudeau";
JustinTrudeau.dob = new Date(1992,0,12);
JustinTrudeau.sid = "123456789";
JustinTrudeau.program = "CAN";
JustinTrudeau.gpa = 4;

var students =[JohnSmith, JimCarrey, JustinBieber, JustinTrudeau];

function myLoop (item, index) {
  console.log(index + ": " + item.toString())
}

students.forEach(myLoop);
