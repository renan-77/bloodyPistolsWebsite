function mobileMenu(){
$('.navTrigger').click(function () {
    $('.nav').css("background-color", "#16161696");
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
}