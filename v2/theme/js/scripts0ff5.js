/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
if ($(window).scrollTop() > 34) {
    $(".navbar").addClass("sticky-nav");
} else {
    $(".navbar").removeClass("sticky-nav");
}

$(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 34) {
        $(".navbar").addClass("sticky-nav");
    } else {
        $(".navbar").removeClass("sticky-nav");
    }
});

$('.navbar-toggler').click(function() {
    const $icons = $(this).find('i');
    const $visibleIcon = $icons.filter(':visible');
    const $hiddenIcon = $icons.not($visibleIcon);

    $visibleIcon.css('opacity', 0);
    $hiddenIcon.css('opacity', 1);

    setTimeout(() => {
        $visibleIcon.addClass('d-none').css('opacity', '');
        $hiddenIcon.removeClass('d-none');
    }, 100);
});

$(".testimonials__slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    padding: 10,
});

$(".writers__slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    padding: 10,
});

// Select 2
$('.select2').select2();

// Datepicker
$(".datetime").datetimepicker({
    format: 'Y-m-d H:i',
    minDate: 0,
    minTime: 0,
    onChangeDateTime: function(dateTxt) {
        var today = new Date().getTime();
        var selected = new Date(dateTxt).getTime();

        if (selected > today) {
            this.setOptions({
                minTime: false
            });
        } else {
            this.setOptions({
                minTime: 0
            });
        }
    }
});