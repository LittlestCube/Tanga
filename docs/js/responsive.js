var isMobile = false;

var initResponsive = function() {
  if (platform.os.family == "Android" || platform.os.family == "iOS") {
    isMobile = true;
  }
  responsive();
};

var responsive = function() {
  var width = window.innerWidth;

  console.log("resize");

  if (width < 800 || isMobile) {
    $("#mainInstruct")[0].classList.add("grid1");
    $("#mainInstruct")[0].classList.remove("grid3");

    $(".downarrows").removeClass("hide");
    $(".arrows").addClass("hide");
  } else {
    $("#mainInstruct")[0].classList.remove("grid1");
    $("#mainInstruct")[0].classList.add("grid3");

    $(".downarrows").addClass("hide");
    $(".arrows").removeClass("hide");
  }
};

$(window).resize(responsive);
$(document).ready(initResponsive);
