;(function () {
    /*var showButton = function () {
        if ($(window).scrollTop() > 500) {
            document.getElementById("button-up").style.display = "block";
        }
        else {
            if ($(window).scrollTop() < 500) {
                document.getElementById("button-up").style.display = "none";
            }
        }
    };*/
    $(document).ready(function () {
        /*showButton();*/
        $(".slider-range").each(function () {
            var slider = $(this);
            slider.slider();
            /*slider.on("slide", function (slideEvt) {
             slider.closest('.slider-block').find('[data-input-value]').val(slideEvt.value);
             });
             setTimeout(function () {
             slider.closest('.slider-block').find('[data-input-value]').val(slider.data('slider').value[0]);
             }, 500);*/
        });

        $(".footer-column__title").click(function () {
            var el = $(this);
            if (el.hasClass("active")) {
                el.siblings(".footer-column__info").slideUp(400);
                el.removeClass("active");
            }
            else{
                el.siblings(".footer-column__info").slideDown(400);
                el.addClass("active");
            }
        });

        $(".page-content__sidebar-item__title").click(function () {
            var el = $(this);
            if (el.hasClass("active")) {
                el.siblings(".page-content__sidebar-item__content").slideUp(400);
                el.removeClass("active");
            }
            else{
                el.siblings(".page-content__sidebar-item__content").slideDown(400);
                el.addClass("active");
            }
        });


        if ($("select, input:radio").length > 0) {
            $("select, input:radio").styler();
        }

        /* $(".b-products-item").click(function () {
         $(this).find("#prod-item-link").trigger("click");
         });*/

        $("[data-grid-type]").click(function () {
            var el = $(this);
            if (el.data('grid-type') == "listing") {
                $("[data-grid-type-container]").find(".products-item-wrapper").addClass("list");
            }
            else
            {
                $("[data-grid-type-container]").find(".products-item-wrapper").removeClass("list");
            }
        });


    });

    $(function () {
        $('a.js-scrollScreen[href*="#"]:not([href="#"])').click(function () {
            if ($(this).hasClass('sliding-panel-link')) {
                $('body').removeClass('ovh');
                $('.sliding-panel').removeClass('active');
                $('.site-wrapper-content').removeClass('active');
                $(".site-wrapper").css("width", "auto");
                $(".site-wrapper").toggleClass("ovh");

            }
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
})();

