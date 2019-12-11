$(function () {
    $(document).ready(function () {
        $('.visual-wrap').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });

        $('.card-news').slick({
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive :true,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        arrows: false,
                        dots:true
                        
                        
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        
                        dots:true
                    }
                },
                {
                    breakpoint: 560,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        
                        dots:true
                    }
                }
           
            ]
        });

        $('.family-wrap').slick({
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive :true,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        arrows: false,
                        dots:true
                        
                        
                    }
                },
                {
                    breakpoint: 720,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: false,
                        
                        dots:true
                    }
                }
           
            ]
        });

    });

    (function($){
        $(window).on("load",function(){
            $(".q-menu-wrap").mCustomScrollbar({
                axis:"x",
                theme:"dark"
            });
        });
    })(jQuery);

    /* lnb */
    (function ($) {
            var lnbUI = {
                click: function (target, speed) {
                    var _self = this,
                        $target = $(target);
                    _self.speed = speed || 300;
                    $target.each(function () {
                        if (findChildren($(this))) {
                            return;
                        }
                        $(this).addClass('noDepth');
                    });

                    function findChildren(obj) {
                        return obj.find('> ul').length > 0;
                    }
                    $target.on('click', 'a', function (e) {
                        e.stopPropagation();
                        var $this = $(this),
                            $depthTarget = $this.next(),
                            $siblings = $this.parent().siblings();
                        $this.parent('li').find('ul li').removeClass('on');
                        $siblings.removeClass('on');
                        $siblings.find('ul').slideUp(250);
                        if ($depthTarget.css('display') == 'none') {
                            _self.activeOn($this);
                            $depthTarget.slideDown(_self.speed);
                        } else {
                            $depthTarget.slideUp(_self.speed);
                            _self.activeOff($this);
                        }
                    })
                },
                activeOff: function ($target) {
                    $target.parent().removeClass('on');
                },
                activeOn: function ($target) {
                    $target.parent().addClass('on');
                }
            }; // Call lnbUI

             $(function(){ lnbUI.click('#lnb li', 300) }); }(jQuery));


$(".sidemenu-close").click(function () {
    $(".sidemenu-mobile").css("display","none");
    $(".overlay").css("display","none");
});

$(".sidemenu-toggle").click(function () {
    $(".sidemenu-mobile").css("display","block");
    $(".overlay").css("display","block");
});

$(".overlay").click(function () {
    $(".overlay").css("display","none");
    $(".sidemenu-mobile").css("display","none");
});


$(".q-menu").niceScroll({
    cursorcolor:"#dddddd",
    cursorwidth:"10px"
}); 


});
