/*function revealSpecs() {
    var list = document.getElementById("specs");
    if (list.style.display == "none"){
        list.style.display = "block";
    }
  
}
*/
function revealSpecs(id) {
  var e = document.getElementById(id);
  if (e.style.display == 'none' || e.style.display==''){
    e.style.display = 'block';
  }
}

//toggle play pause audio
function togglePlay() {
    var myAudio = document.getElementById("myAudio");
    return myAudio.paused ? myAudio.play() : myAudio.pause();
};

function toggle(e) {
    let txt = e.innerText;
    e.innerText = txt == 'unmute' ? 'pause' : 'unmute';
  }