function gif9a() {
    document.getElementById("fourteen").style.visibility = "hidden";
    document.getElementById("arrow1").style.visibility = "hidden";
    document.getElementById("gif12").style.visibility = "visible";
    document.getElementById("transbox12").style.visibility = "hidden";
    myTimeout = setTimeout(() => {
      document.getElementById("arrow").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 10000);
  }