// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

function Audio (frame, obj){
    var output = "";
    for ( var i = 0 ; i < obj.source.length ; i ++){
        if (obj.controls)
        output += "<audio controls> <source src ='" + obj.source[i].src 
        + "' type = '" + obj.source[i].type + "'> Your browser does not support the audio tag used. </audio> <br> <br>";
    }
    frame.innerHTML += "<figure>" + output + "</figure>";
}

window.onload = function () {
    var audio_ = document.getElementById("audio");
    Audio(audio_, audio);
}