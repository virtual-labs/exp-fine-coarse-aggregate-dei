function gif21() {
    document.getElementById("twentysix").style.visibility = "hidden";
    document.getElementById("arrow1").style.visibility = "hidden";
    document.getElementById("gif23").style.visibility = "visible";
    document.getElementById("transbox18").style.visibility = "hidden";
    myTimeout = setTimeout(() => {  
        document.getElementById("transbox19").style.visibility = "visible";
        document.getElementById("arrow2").style.visibility = "visible";
        document.getElementById("gif23").style.visibility = "hidden";
        document.getElementById("twentysix").style.visibility = "visible";
    }, 9000);
}


function gif22() {
    document.getElementById("twentysix").style.visibility = "hidden";
    document.getElementById("gif24").style.visibility = "visible";
    document.getElementById("arrow2").style.visibility = "hidden";
    document.getElementById("transbox19").style.visibility = "hidden";
    myTimeout = setTimeout(() => {
        document.getElementById("transbox20").style.visibility = "visible";
        document.getElementById("arrow3").style.visibility = "visible";
        document.getElementById("gif24").style.visibility = "hidden";
        document.getElementById("twentysix").style.visibility = "visible";
    }, 9000);
}

function gif23() {
    document.getElementById("twentysix").style.visibility = "hidden";
    document.getElementById("gif25").style.visibility = "visible";
    document.getElementById("transbox20").style.visibility = "hidden";
    document.getElementById("arrow3").style.visibility = "hidden";
    myTimeout = setTimeout(() => {
        document.getElementById("transbox21").style.visibility = "visible";
        document.getElementById("arrow4").style.visibility = "visible";
        document.getElementById("gif25").style.visibility = "hidden";
        document.getElementById("twentysix").style.visibility = "visible";
    }, 9000);
}

function gif24() {
    document.getElementById("twentysix").style.visibility = "hidden";
    document.getElementById("arrow4").style.visibility = "hidden";
    document.getElementById("transbox21").style.visibility = "hidden";
    document.getElementById("gif26").style.visibility = "visible";
    myTimeout = setTimeout(() => {
        document.getElementById("next").style.visibility = "visible";
        document.getElementById("arrow").style.visibility = "visible";
    }, 10000);
}