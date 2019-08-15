var mounthly = false;

function switchPrice() {
  var elem = document.getElementById("trigger");
  var monthlyElm = document.getElementById("monthly");
  var yearlyElm = document.getElementById("yearly");
  if (!mounthly) {
    elem.className += " monthly";
    mounthly = true;
    monthlyElm.className += " active";
    yearlyElm.classList.remove("active");
  } else {
    elem.classList.remove("monthly");
    mounthly = false;
    yearlyElm.className += " active";
    monthlyElm.classList.remove("active");
  }
}
