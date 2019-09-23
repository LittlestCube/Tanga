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
        $("body")[0].classList.add("mobile");
        $("body")[0].classList.remove("desk");

        $("#mainInstruct")[0].classList.add("grid1");
        $("#mainInstruct")[0].classList.remove("grid3");

        $(".downarrows").removeClass("hide");
        $(".arrows").addClass("hide");

        //header
        $("#rightLinks")[0].classList.add("hide");

    } else {
        $("body")[0].classList.remove("mobile");
        $("body")[0].classList.add("desk");

        $("#mainInstruct")[0].classList.remove("grid1");
        $("#mainInstruct")[0].classList.add("grid3");

        $(".downarrows").addClass("hide");
        $(".arrows").removeClass("hide");

        //header
        $("#rightLinks")[0].classList.remove("hide");
    }
};

$(window).resize(responsive);
$(document).ready(initResponsive);