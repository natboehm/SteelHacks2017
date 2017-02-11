function startAnimation() {
    console.log("animation started");
    var frameHeight = 510;
    var frames = 8;
    var frame = 0;

    var div = document.getElementById("animation");
    setInterval(function() {
        var frameOffset = (++frame % frames) * -frameHeight;
        div.style.backgroundPosition = "0px " + frameOffset + "px";
        console.log("hello");
    }, 100);
    
}

function swap() {
    document.getElementById("animation").style.backgroundImage="url(/images/series_of_dogs.png)";
    startAnimation();
}

num_clicks = 0;
function countClicks() {
    num_clicks++;

    if (num_clicks > 10) {
        swap();
    }
}

/*
onclick = function tricks() {
	var imag = document.getElementById("image");
	img.src = "../images/me.gif";
	return false;
}*/ 
