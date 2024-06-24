$(document).ready(function() {

    var slider1 = $("#slider1");
    var slider2 = $("#slider2");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;
    
    slider1.owlCarousel({
        items: 2,
        margin: 10,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);
    
    slider2
        .on('initialized.owl.carousel', function() {
            slider2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
        items: 5,
        margin: 10,
            dots: true,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
    
    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;
    
        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
    
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
    
        //end block
    
        slider2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = slider2.find('.owl-item.active').length - 1;
        var start = slider2.find('.owl-item.active').first().index();
        var end = slider2.find('.owl-item.active').last().index();
    
        if (current > end) {
            slider2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            slider2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }
    
    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            slider1.data('owl.carousel').to(number, 100, true);
        }
    }
    
    slider2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        slider1.data('owl.carousel').to(number, 300, true);
    });
    });