$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $('.nav__list').toggleClass('active');
    $('.reserve__button').toggleClass('hidden');
    $('.openbtn span').toggleClass('active');
});