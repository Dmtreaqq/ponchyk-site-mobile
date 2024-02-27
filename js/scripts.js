$(document).ready(function () {
    /* scroll */

    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
        return false;
    });

    /* timer */

    function update() {
        var Now = new Date(),
            Finish = new Date();
        Finish.setHours(23);
        Finish.setMinutes(59);
        Finish.setSeconds(59);
        if (
            Now.getHours() === 23 &&
            Now.getMinutes() === 59 &&
            Now.getSeconds === 59
        ) {
            Finish.setDate(Finish.getDate() + 1);
        }
        var sec = Math.floor((Finish.getTime() - Now.getTime()) / 1000);
        var hrs = Math.floor(sec / 3600);
        sec -= hrs * 3600;
        var min = Math.floor(sec / 60);
        sec -= min * 60;
        $(".timer .hours").html(pad(hrs));
        $(".timer .minutes").html(pad(min));
        $(".timer .seconds").html(pad(sec));
        setTimeout(update, 200);
    }
    function pad(s) {
        s = ("00" + s).substr(-2);
        return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
    }
    update();

    /* sliders */
    var swiper = new Swiper(".swiper", {
        pagination: {
            el: ".swiper-pagination",
            clickable: "true",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        lazyLoading: true,
    });
});


let lastScrollTop = 0;
document.addEventListener("scroll", function (e) {
    const st = window.scrollY;
    if (st > 2000) {
        if (st < lastScrollTop) {
            document.querySelector(".bottom-block").classList.remove("active");
        } else {
            document.querySelector(".bottom-block").classList.add("active");
        }
        lastScrollTop = st;
    }
});