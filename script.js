
//play sound with keyboard event
addEventListener("keydown", function(event){
    var audioKey = document.querySelector(`audio[data-key="${event.key}"]`);
    audioKey.currentTime = 0; //rewind sound from start
    audioKey.play();
    var audioButton = document.querySelector(`#audio-${event.key}`);
    audioButton.style.background = "#8B5CF6";
    audioButton.style.transform = "scale(1.3)"
    audioButton.style.transition = "all 0.1s";
})

addEventListener("keyup", function(event){
    var audioKey = document.querySelector(`audio[data-key="${event.key}"]`);
    var audioButton = document.querySelector(`#audio-${event.key}`);
    audioButton.style.background = "#6EE7B7";
    audioButton.style.transform = "scale(1)"
})


