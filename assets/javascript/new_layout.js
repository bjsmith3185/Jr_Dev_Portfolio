

$("#info-1").hide();
// $("#info-1").show();
$("#info-2").hide();
$("#info-3").hide();



$(".project-container").hover(function () {
    console.log($(this).attr("data-summary"));
    console.log($(this).attr("data-info"));
    var summary = $(this).attr("data-summary");
    var info = $(this).attr("data-info");
    $("#" + summary).toggle();
    $("#" + info).toggle();

})


//-------------------------------------------------

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
});

window.onload = function () { 
    hideTopBtn() 
    hideNavName()
};

window.onscroll = function () { 
    scrollTopButton() 
    scrollNavName()
};


function hideTopBtn() {
    document.getElementById("myBtn").style.display = "none";
}

function hideNavName() {
    document.getElementById("navbarName").style.display = "none";
}

function scrollTopButton() {
    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function scrollNavName() {
    if (document.body.scrollTop > 610 || document.documentElement.scrollTop > 610) {
        document.getElementById("navbarName").style.display = "block";
        document.getElementById("navbarLinks").style.display = "none";
    } else {
        document.getElementById("navbarName").style.display = "none";
        document.getElementById("navbarLinks").style.display = "block";
    }
}

//------------------------------------










