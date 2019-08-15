var listBackground = ["bitmap", "slide2", "slide3"];
var curentSlide = 0;

function changeByArrow(action, reset) {
  if (action == "next") {
    if (curentSlide == listBackground.length - 1) {
      curentSlide = 0;
    } else {
      curentSlide++;
    }
  } else {
    if (curentSlide == 0) {
      curentSlide = listBackground.length - 1;
    } else {
      curentSlide--;
    }
  }
  changeBg(curentSlide);
}

function changeBg(number) {
  var bullets = document.getElementsByClassName("bullet");
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].classList.remove("active");
  }
  bullets[number].className += " active";
  var elem = document.getElementById("slider");
  elem.style.backgroundImage =
    "url('../img/" + listBackground[number] + ".jpg')";
}
