
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
});

window.onload = function () { 
    hideTopBtn() 
    hideNavName()
};

window.onscroll = function () { 
    showTopButton() 
    scrollNavName()
};


function hideTopBtn() {
    document.getElementById("myBtn").style.display = "none";
}

function hideNavName() {
    document.getElementById("navbarName").style.display = "none";
}

function showTopButton() {
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
