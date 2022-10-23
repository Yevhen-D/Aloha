$(document).ready(function() {
    $('.header__menu').click(function(event) {
        $('.header__menu,.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});