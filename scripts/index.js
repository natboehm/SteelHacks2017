onload = function startAnimation() {
    var frameHeight = 510;
    var frames = 8;
    var frame = 0;

    var div = document.getElementById("animation");
    setInterval(function() {
        var frameOffset = (++frame % frames) * -frameHeight;
        div.style.backgroundPosition = "0px " + frameOffset + "px";
    }, 100);
    
}
/*
onclick = function tricks() {
	var imag = document.getElementById("image");
	img.src = "../images/me.gif";
	return false;
}*/ 
