$(window).on("scroll", function() {
    if($(window).scrollTop() > 35) {
        $(".scroll").addClass("active");
        $(".smot").addClass("dis");
    } else {
       $(".scroll").removeClass("active");
       $(".smot").removeClass("dis");
    }
});

// Cuando se desliza el scroll hasta el final de la página
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $(".end-scroll").addClass("endscroll");
    }
    else {
        $(".end-scroll").removeClass("endscroll");
    }
});

function Tap() {
    document.querySelectorAll('.disable').forEach((result) => {result.classList.toggle('scroll-disable');})

    document.querySelectorAll('.on').forEach((result) => {result.classList.toggle('window-on');})

    document.querySelectorAll('.header-tap').forEach((result) => {result.classList.toggle('header-window');})

    document.querySelectorAll('.woop').forEach((result) => {result.classList.toggle('menu-woop');})
}

