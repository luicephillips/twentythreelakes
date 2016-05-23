// JavaScript Document
var $ = jQuery.noConflict();

jQuery(document).ready(function () {
    //$('input,textarea').placeholder();
    $('.enumenu_ul').responsiveMenu({
        'menuIcon_text': '',
        onMenuopen: function () {}
    });

    /* Equal Height Function */
    $('.middle-content-block').each(function () {
        var highestBox = 0;
        $('.column-6', this).each(function () {

            if ($(this).height() > highestBox)
                highestBox = $(this).height();
        });

        $('.column-6', this).height(highestBox);
    });

    /* Accordian js */
    //$("#top-accordian").accordion({ firstactive:false });
    $("#top-accordian .accordion-title").bind("click", function (event) {
        event.preventDefault();
        if (!$(this).next().is(':visible')) {
            $(this).closest("li").siblings().find(".accordion-title").removeClass("active");
            //$(this).closest("li").siblings().find(".accordion-content").slideUp();
            $(this).closest("li").siblings().find(".accordion-content").velocity("slideUp", {
                duration: 400
            });
            //$(this).next().slideDown();
            $(this).next().velocity("slideDown", {
                duration: 400
            });
            $(this).addClass('active');
        } else {
            //$(this).next().find(".accordion-title.active").next().slideUp();
            $(this).next().find(".accordion-title.active").next().velocity("slideUp", {
                duration: 400
            });
            $(this).next().find(".accordion-title.active").removeClass("active");
            //$(this).next().slideUp();
            $(this).next().velocity("slideUp", {
                duration: 400
            });
            $(this).removeClass('active');
        }
    });

    /* Validation js */
    $("#login-form").validate({
        onfocusout: false,
        onkeyup: false,
        ignore: [],
        rules: {
            fullname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
            message: {
                required: true,
            }
        },
        errorClass: 'error',
        validClass: 'valid',
        errorElement: 'span',
        errorContainer: "#messageBox1",
        errorLabelContainer: "#messageBox1 .errorlabel",
        highlight: function (element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
        },
        messages: {
            fullname: {
                required: "full name",
            },
            email: {
                required: "email",
                email: "a valid email address"
            },
            phone: {
                required: "phone",
            },
            message: {
                required: "message",
            }
        },
        errorPlacement: function (error, element) {
            //error.insertAfter(element);
        },
        invalidHandler: function (event, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                //$("#messageBox1").fadeIn();
                $("#messageBox1").velocity("fadeIn", {
                    duration: 400
                })
                setTimeout(function () {
                    var errorLen_ = $(".errorlabel > span").length;
                    if (errorLen_ > 1) {
                        var lastText_ = " <small>and </small>" + $(".errorlabel > span").eq(errorLen_ - 1).text() + ".";
                        $(".errorlabel > span").eq(errorLen_ - 1).html(lastText_);
                        $(".errorlabel > span").each(function (i) {
                            if ((errorLen_ - 1) != i && (errorLen_ - 2) != i) {
                                var commaSpan = $("<span>", {
                                    "class": "comma"
                                }).html(", ");
                                commaSpan.insertAfter($(this));
                            }
                        })
                    }else{
                        var lastText_ = $(".errorlabel > span").eq(errorLen_ - 1).text() + ".";
                        $(".errorlabel > span").eq(errorLen_ - 1).html(lastText_);
                    }
                }, 201);
            } else {
                $("#messageBox1").hide()
            }
        },
        submitHandler: function (form) {
            //$('#login-form .successmsg').fadeIn();
            $('#login-form .successmsg').velocity("fadeIn", {
                duration: 400
            });

            setTimeout(function () {
                //$('#login-form .successmsg').fadeOut();
                $('#login-form .successmsg').velocity("fadeOut", {
                    duration: 400
                });


                $('#login-form')[0].reset();
                $("#login-form .valid").removeClass("valid");

                var option = $(".selectbox1").find("option").eq(0);
                $(".selectbox1").selectbox("change", option.attr('value'), option.html());

            }, 3000)

            return false;
        }
    });

    $("#login-form input[type='submit']").click(function () {
        $("#messageBox1 .errorlabel").empty();
    })

    $(".back-top-btn > a").click(function (e) {
        e.preventDefault();
        /*var isChrome = window.navigator.userAgent.indexOf("WebKit") !== -1;
        var doc;
        if (isChrome) {
            doc = $('body');
        } else {
            doc = $('html');
        }
        doc.stop().animate({
            'scrollTop': 0
        }, 1000);*/
        $('html, body').velocity("scroll", {
            duration: 800,
        });
    })

    $(".footer-right-inner .footer-block h5").on("click", function () {
        if (window.innerWidth < 768) {
            //$(this).next().stop(true).slideToggle();
            if ($(this).next().is(":visible")) {
                $(this).next().velocity("slideUp", {
                    duration: 400
                });
            } else {
                $(this).next().velocity("slideDown", {
                    duration: 400
                });
            }
        }
    });
    
    $("header .get-load img, header .get-started-btn img").css({
        '-webkit-transition': 'transform 0.2s ease 0.6s',
        '-moz-transition': 'transform 0.2s ease 0.6s',
        '-ms-transition': 'transform 0.2s ease 0.6s',
        '-o-transition': 'transform 0.2s ease 0.6s',
        'transition': 'transform 0.2s ease 0.6s'
    }).addClass("transtion");
    
    if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
//        $("#bgvid").attr("controls",true);   
         $("body").addClass("ios-device");
    }

    $(".selectbox1").selectbox();
});

$(window).load(function () {
    stickyHeader();

    $("body").addClass("loaded");

    setTimeout(function () {
        $("header .get-load img, header .get-started-btn img").css({
            '-webkit-transition': '',
            '-moz-transition': '',
            '-ms-transition': '',
            '-o-transition': '',
            'transition': ''
        }).removeClass("transtion");
    }, 801);

});
$(window).resize(function () {
    stickyHeader();

    arrowAnimate();

    if (window.innerWidth >= 768) {
        $(".footer-right-inner .footer-block ul").removeAttr("style");
    }
});
$(window).scroll(function () {
    stickyHeader();

    arrowAnimate();
});

var flag = true;

function stickyHeader() {
    /*var windowScrollTop = $(window).scrollTop();
    if (windowScrollTop > ) {
        $("body").addClass("stickyHeader");
    } else {
        $("body").removeClass("stickyHeader");
    }*/

    var obj = $(".header-part");
    if ($(window).scrollTop() > $("header").height() && flag) {
        $("body").addClass("stickyHeader");

        obj.removeClass('slideUp').addClass('slideDown');
        setTimeout(function () {
            obj.removeClass("slideDown")
        }, 400)
        flag = false;

    } else if ($(window).scrollTop() <= $("header").height() && !flag) {
        $("body").removeClass("stickyHeader");

        /*obj.removeClass('slideDown').addClass("slideup")
        setTimeout(function () {
            obj.removeClass("slideup")
        }, 800)*/
        flag = true;
    }
}

function arrowAnimate() {
    var scroll = $(window).scrollTop();
    var objOffset = $(".get-started-btn").offset().top;
    if (scroll < objOffset) {
        var scalVal = 1 - scroll / objOffset;
        /*$(".get-started-btn  img").css({
            '-webkit-transform': 'scale(' + scalVal + ')',
            '-moz-transform': 'scale(' + scalVal + ')',
            '-ms-transform': 'scale(' + scalVal + ')',
            '-o-transform': 'scale(' + scalVal + ')',
            'transform': 'scale(' + scalVal + ')'
        });*/
        $(".get-started-btn  img").velocity({
            scale: scalVal
        },0);
    }

    var obj2Offset = $(".get-load").offset().top;
    if (scroll < obj2Offset) {
        var scalVal = 1 - scroll / obj2Offset;
        /*$(".get-load  img").css({
            '-webkit-transform': 'scale(' + scalVal + ')',
            '-moz-transform': 'scale(' + scalVal + ')',
            '-ms-transform': 'scale(' + scalVal + ')',
            '-o-transform': 'scale(' + scalVal + ')',
            'transform': 'scale(' + scalVal + ')'
        });*/
        $(".get-load  img").velocity({
            scale: scalVal
        },0);
    }
}





;
(function ($) {
    $.fn.parallaxx = function (options) {
        var obj = this;
        var destroy_;
        var defaults = {
            onParallaxBind: function () {},
            onParallaxDestroy: function () {},
            speed: 5
        }
        var settings = $.extend(true, {}, defaults, options);
        var p = [];

        /*======= Get all baground position of all parallax div  and set into multidimantional arraty ====*/
        var parallax = function () {
            obj.each(function () {
                var $this = $(this);
                var windowHeight = $(window).height();
                var objOffset = $this.offset().top;
                var objHeight = $this.height();
                var scroll = $(window).scrollTop();
                var result = (scroll - objOffset) / 2;
                if (scroll < objOffset) {
                    if ($this.hasClass("left")) {
                        $this.css({
                            "background-position": result + "px 0"
                        });
                        /*$this.velocity({
                            backgroundPosition: result + "px 0"
                        }, 0);*/
                    } else if ($this.hasClass("right")) {
                        $this.css({
                            "background-position": -(result + 500) + "px 0"
                        });
                        /*$this.velocity({
                            backgroundPosition: result + "px 0"
                        }, 0);*/
                    } else if ($this.hasClass("up")) {
                        $this.css({
                            "background-position": "0 " + result + "px"
                        });
                        /*$this.velocity({
                            backgroundPosition: "0 " + result + "px"
                        }, 0);*/
                    }
                    //var gray = Math.abs(result/2);

                    //var gray_ = (((scroll - (objOffset + objHeight))/(objOffset + objHeight)) * 0.7)+0.7;
                    if (scroll > (objOffset - (windowHeight / 3))) {
                        //$this.css({"filter":"grayscale("+(100 - gray)+"%)","-webkit-filter":"grayscale("+(100 - gray)+"%)"})
                        
                        //var gray_ = (((scroll - (objOffset)) / (objOffset)) * 0.7) + 0.7;
                        var gray_ = (((scroll - (objOffset + windowHeight)) / (objOffset + windowHeight)) * 0.7) + 0.7;
                        $this.find(".overlay-bg").css('background-color', 'rgba(0,0,0,' + gray_ + ')');
                        
                        /*$this.find(".overlay-bg").velocity({
                            backgroundColor: 'rgba(0,0,0,' + gray_ + ')'
                        }, 0)*/
                    } else {
                        $this.find(".overlay-bg").css('background-color', 'rgba(0,0,0,0)');
                    }
                } else {
                    result = 0;
                    if ($this.hasClass("left")) {
                        $this.css({
                            "background-position": result + "px 0"
                        });
                    } else if ($this.hasClass("right")) {
                        $this.css({
                            "background-position": -(result + 500) + "px 0"
                        });
                    } else if ($this.hasClass("up")) {
                        $this.css({
                            "background-position": "0 " + result + "px"
                        });
                    }
                    $this.find(".overlay-bg").css('background-color', 'rgba(0,0,0,0.7)');
                    //$this.css({"filter":"grayscale(100%)","-webkit-filter":"grayscale(100%)"})
                }
            })
        }
        var init = function () {
            parallax()
            $(window).bind("scroll", parallax)
            var image = "parallax bind successfuly"
            settings.onParallaxBind(image);
        }
        obj.destroy = function () {
            $(window).unbind("scroll", parallax)
            obj.removeAttr("style")
            settings.onParallaxDestroy(obj);
        }
        init()
        return this
    }

    $(".parallax").parallaxx()
    
    
    
    
})(jQuery);
