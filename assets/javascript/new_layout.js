

$("#info-1").hide();
// $("#info-1").show();
$("#info-2").hide();
$("#info-3").hide();

// $("#summary-1").hide();





$(".project-container").hover(function() {
    console.log($(this).attr("data-summary"));
    console.log($(this).attr("data-info"));
    var summary = $(this).attr("data-summary");
    var info = $(this).attr("data-info");
    $("#"+summary).toggle();
    $("#"+info).toggle();

})
