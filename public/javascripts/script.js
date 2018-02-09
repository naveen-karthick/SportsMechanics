window.onload = function() {
    xmlrequest('GET',"/videos",null,updatevideos);
}


function xmlrequest(type, url, content, callback) {
    // define the type of request either get,put,delete or post
    var request = new window.XMLHttpRequest({ mozSystem: true });
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            if (callback != undefined) {
                callback(request.responseText);
            }
        }
    };
     request.open(type,url, true);
    request.send(content);
}

function updatevideos(response) {
    console.log(response);
}

var video = document.getElementById("video-main");
video.addEventListener("timeupdate", updateProgress, false);

//Play and pause function
function togglePlayPause() {
    var playpause = document.getElementById("playpause");
    var controls = document.getElementById("video-controls");

    if (video.paused || video.ended) {
       playpause.title = "pause";
       playpause.classList.remove("fa-play");
       playpause.classList.add("fa-pause");
       controls.classList.add('visibility-hidden');
       video.play();
    }
    else {
       playpause.title = "play";
        playpause.classList.remove("fa-pause");
       playpause.classList.add("fa-play");
       video.pause();
    }
 }

 //Set volume for the volume button
function setVolume() {
    var volume = document.getElementById("volume");
    video.volume = volume.value;
 }

//Progress bar function
 function updateProgress() {
    var progress = document.getElementById("progress");
    var value = 0;
    if (video.currentTime > 0) {
       value = Math.floor((100 / video.duration) * video.currentTime);
    }
    progress.style.width = value + "%";
 }

//Control buttons
 $(document).ready(function() {
    $(".video-container").mouseover(function() {
       $("#video-controls").show();
    }); 
    $('.video-container').mouseout(function () {
        $('#video-controls').hide();      
  });
});
