function gif8a() {
    document.getElementById("seventeen").style.visibility = "hidden";
    document.getElementById("arrow1").style.visibility = "hidden";
    document.getElementById("gif13").style.visibility = "visible";
    document.getElementById("transbox13").style.visibility = "hidden";
    myTimeout = setTimeout(() => {
      document.getElementById("arrow").style.visibility = "visible";
      document.getElementById("next").style.visibility = "visible";
    }, 36000);
  }