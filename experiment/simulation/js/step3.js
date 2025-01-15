function gif7() {
    document.getElementById("eight").style.visibility = "hidden";
    document.getElementById("transbox7").style.visibility = "hidden";
    document.getElementById("gif7").style.visibility = "visible"; 
    myTimeout = setTimeout(() => {
      document.getElementById("gif7").style.visibility = "hidden"; 
      document.getElementById("nine").style.visibility = "visible";
      document.getElementById("transbox7").style.visibility = "hidden";
      document.getElementById("transbox8").style.visibility = "visible";
    document.getElementById("insA").textContent = "Measure 215 grams of sodium sulphate.";
    }, 5000);
  }

  function gif8() {
    document.getElementById("nine").style.visibility = "hidden";
    document.getElementById("transbox8").style.visibility = "hidden";
    document.getElementById("gif8").style.visibility = "visible"; 
    myTimeout = setTimeout(() => {
      document.getElementById("gif8").style.visibility = "hidden"; 
      document.getElementById("ten").style.visibility = "visible";
      document.getElementById("transbox8").style.visibility = "hidden";
      document.getElementById("transbox9").style.visibility = "visible";
      document.getElementById("insA").textContent = "Prepare sodium sulphate solution, 215 grams per litre";
    }, 5500);
  }

  function gif9() {
    document.getElementById("ten").style.visibility = "hidden";
    document.getElementById("transbox9").style.visibility = "hidden";
    document.getElementById("gif9").style.visibility = "visible"; 
    myTimeout = setTimeout(() => {
      document.getElementById("gif9").style.visibility = "hidden"; 
      document.getElementById("eleven").style.visibility = "visible";
      document.getElementById("transbox9").style.visibility = "hidden";
      document.getElementById("transbox10").style.visibility = "visible";
    }, 19000);
  }
  
  function gif10() {
    document.getElementById("transbox10").style.visibility = "hidden";
    document.getElementById("eleven").style.visibility = "hidden";
    document.getElementById("gif10").style.visibility = "visible"; 
    myTimeout = setTimeout(() => {
      document.getElementById("transbox10").style.visibility = "hidden";
      document.getElementById("next").style.visibility = "visible";
    }, 25000);
  }