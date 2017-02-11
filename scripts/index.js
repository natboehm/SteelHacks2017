var timer;

onload = function startAnimation() {
    var frameHeight = 514;
    var frames = 8;
    var frame = 0;

    var div = document.getElementById("animation");
    timer = setInterval(function() {
        var frameOffset = (++frame % frames) * -frameHeight;
        div.style.backgroundPosition = "0px " + frameOffset + "px";
    }, 100); 
}

var currClickTime = 0;
var lastClickTime = 0;

function getClickTime() {
    lastClickTime = currClickTime;
    currClickTime = Date.now();
}

function happyDog() {
    document.getElementById("animation").style.backgroundImage="url(/SteelHacks2017/images/revised_series.png)";
}

num_clicks = 0;
function countClicks() {
    num_clicks++;
    getClickTime();
    ratio = ((currClickTime / lastClickTime) - 1) * 1000000000000;
    console.log(ratio);

    /* excited dog */
    if (ratio < 500) {
        if (document.getElementById("animation").style.backgroundImage!='url(/SteelHacks2017/images/revised_series.png') {
            happyDog();
        }
    } 
    /* neutral dog */
    else if (ratio >= 500 && ratio < 10000) {
        if (document.getElementById("animation").style.backgroundImage!='url(/SteelHacks2017/images/neutral_series.png)') {
            neutralDog();
        }
    } 
    /* sad dog */
    else if (ratio >= 10000 && ratio < 20000) {
        if (document.getElementById("animation").style.backgroundImage!='url(/SteelHacks2017/images/sad_series.png)') {
            sadDog();
        }
    } 
    /* ded dog */
    else if (ratio >= 20000 && ratio < Infinity) {
        if (document.getElementById("animation").style.backgroundImage!='url(SteelHacks2017/images/ded_series.png)') {
            dedDog();
        }
    }
}

function neutralDog() {
    document.getElementById("animation").style.backgroundImage="url(/SteelHacks2017/images/neutral_series.png)";
}

function sadDog() {
    document.getElementById("animation").style.backgroundImage="url(/SteelHacks2017/images/sad_series.png)";
}

function dedDog() {
    document.getElementById("animation").style.backgroundImage="url(/SteelHacks2017/images/ded_series.png)";
}

function myFunction() {
    var x = document.getElementById('logo');
    if (x.style.display === 'block') {
	    x.style.display = 'none';
	} else {
	    x.style.display = 'block';
	}
}
