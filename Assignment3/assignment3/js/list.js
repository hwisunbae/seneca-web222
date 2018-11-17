// Data for the "HTML Lists" Page

var fruits = ["Apples", "Oranges", "Pears", "Grapes", "Pineapples", "Mangos"];

var directory = [
    { type: "file", name: "file1.txt" },
    { type: "file", name: "file2.txt" },
    { type: "directory", name: "HTML Files", files: [{ type: "file", name: "file1.html" }, { type: "file", name: "file2.html" }] },
    { type: "file", name: "file3.txt" },
    { type: "directory", name: "JavaScript Files", files: [{ type: "file", name: "file1.js" }, { type: "file", name: "file2.js" }, { type: "file", name: "file3.js" }] }
];

function ol(frame, obj) {
    var output = "";
    for (var i = 0; i < obj.length; i++) {
        output += "<li>" + obj[i] + "</li>";
    }
    frame.innerHTML += "<ol>" + output + "</ol>";
}


function ul(frame, obj) {
    var output = "", innerOutput = "";

    for (var i = 0; i < obj.length; i++) {
        output += "<li>" + obj[i].name + "</li>";
        if (obj[i].type == "directory") {
            innerOutput = "";
            for (var j = 0; j < obj[i].files.length; j++) {
                innerOutput += "<li> " + obj[i].files[j].name + "</li>";
            } output += "<ul>" + innerOutput + "</ul>";
        }

    }
    frame.innerHTML += "<ul>" + output + "</ul>";
}

window.onload = function () {
    var orderList = document.getElementById("order");
    var unorderList = document.getElementById("unorder");
    ol(orderList, fruits);
    ul(unorderList, directory);
}