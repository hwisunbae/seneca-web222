// Data for the "HTML Video" Page

var video = {
    controls: true,
    width: 320,
    height: 240,
    source: [
        { src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4" },
        { src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg" },
        { src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm" }
    ]
};

function Video(frame, obj) {
    var output = "", inner = "";
    for (var i = 0; i < obj.source.length; i++) {
        if (obj.controls)
            inner += "<source src = '" + obj.source[i].src + "' type = '" + obj.source[i].type + "'>   Your browser does not support the video tag / type";
    } 
    output = "<video width = '" + obj.width + "' height = '" + obj.height +
    "' controls>" + inner + " </video>" ;
    frame.innerHTML += "<figure> " +  output + "</figure>";
}

window.onload = function (){
    var video_ = document.getElementById("video");
    Video (video_, video);
}
