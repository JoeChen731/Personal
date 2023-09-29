function checkDate() {
  "use strict";

  var dateV = true;
  var vday = document.getElementById("day").value;
  console.log("Chen, Joe");
  console.log("vday is " + vday);
  var d = new Date();
  console.log("opering system date is " + d);

  var dd = d.getDate();
  var mm = d.getMonth() + 1;
  var yyyy = d.getFullYear();
  console.log("check Joe ");

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  var td = "" + yyyy + "-" + mm + "-" + dd;

  console.log("USER ENTER -->" + vday + "<--");
  console.log("OPERING SYSTEM date is Now " + td);

  if (td >= vday) {
    document.getElementById("fb").innerHTML = "";
    document.getElementById("day").style.border = null;
    document.getElementById("fb").style = null;
    dateV = true;
  } else {
    dateV = false;
  }

  console.log("At the return -->" + dateV + "<--");
  alert("Time to go home");
  return dateV;
}

function validateName() {
  "use strict";
  var itOk = true;
  if (document.getElementById("visitor").value == "") {
    document.getElementById("visitor").style.borderColor = "red";
    document.getElementById("visitor").style.color = "red";
    document.getElementById("visitor").style.backgroundColor = "yellow";
    itOk = false;
  } else {
    document.getElementById("visitor").style = null;
    document.getElementById("visitor").style.borderColor = "pink";
    itOk = true;
  } // end of if statement

  var dateisOk = checkDate();
  console.log("Value in validateName dateisOk is -->" + dateisOk);

  console.log("In ValidateName() function");
  console.log("Value of variable itOK is -->" + itOk);

  return dateisOk && itOk;
}
