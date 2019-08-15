var menuActive = false;

function toggleMenu() {
  var navigation = document.getElementById("navlist");
  if (!menuActive) {
    navigation.style.display = "block";
    menuActive = true;
  } else {
    navigation.style.display = "none";
    menuActive = false;
  }
}
