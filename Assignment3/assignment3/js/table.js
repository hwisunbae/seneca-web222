// Data for the "HTML Tables" Page

var users = [
    { first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com" },
    { first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com" },
    { first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com" },
    { first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com" },
    { first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com" }
];


function user (frame, users) {
    var output ="", innerOutput = "";
    for (key in users) {
        var output = "<tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Email</th></tr>";
        innerOutput += ("<tr>" + "<td>" + users[key].first_name + "</td>"
            + "<td>" + users[key].last_name + "</td>"
            + "<td>" + users[key].age + "</td>"
            + "<td>" + "<a href='mailto:" + users[key].email + "'>" + users[key].email + "</a>" + "</td>") + "</tr>";
    }
    output += innerOutput ;
    frame.innerHTML += "<table border=1>" + output + "</table>";
}

window.onload = function () {
    var user_ = document.getElementById("userTable");
    user (user_, users);
}