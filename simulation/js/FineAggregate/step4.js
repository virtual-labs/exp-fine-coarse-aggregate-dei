function gif4a() {
    document.getElementById("transbox11").style.visibility = "hidden";
    document.getElementById("twelve").style.visibility = "hidden";
    document.getElementById("arrow1").style.visibility = "hidden"; 
    document.getElementById("gif11").style.visibility = "visible"; 
    myTimeout = setTimeout(() => {
      document.getElementById("arrow").style.visibility = "visible"; 
      document.getElementById("gif11").style.visibility = "hidden"; 
      document.getElementById("thirteen").style.visibility = "visible";
      document.getElementById("transbox11").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
    }, 32500);
  }
  