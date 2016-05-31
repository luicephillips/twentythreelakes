// JavaScript Document
var $ = jQuery.noConflict();

//	$("#date").datepicker({
//		numberOfMonths:1,
//		dateFormat:"dd/mm/yy"
//	});
//	
//	$("#date").on("blur", function(e) {$(this).datepicker("hide"); });
//	
//	$('#date').on("change",function(){
//		$("#login-form").validate().element(this);
//	})
jQuery(document).ready(function () {
    //$('input,textarea').placeholder();
    $('.enumenu_ul').responsiveMenu({
        'menuIcon_text': '',
        onMenuopen: function () {}
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
                required: "a valid email address",
                email: "a valid email address"
            },
            phone: {
                required: "your phone",
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
                $(".note").velocity("fadeOut", {
                    duration: 400
                })
                setTimeout(function () {
                    var errorLen_ = $(".errorlabel > span").length;
                    if (errorLen_ > 1) {
                        var lastText_ = " <abbr>and </abbr>" + $(".errorlabel > span").eq(errorLen_ - 1).text() + ".";
                        $(".errorlabel > span").eq(errorLen_ - 1).html(lastText_);
                        $(".errorlabel > span").each(function (i) {
                            if ((errorLen_ - 1) != i && (errorLen_ - 2) != i) {
                                var commaSpan = $("<span>", {
                                    "class": "comma"
                                }).html(", ");
                                commaSpan.insertAfter($(this));
                            }
                        })
                    } else {
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
            $(".note").velocity("fadeIn", {
                duration: 400
            })
            setTimeout(function () {
                //$('#login-form .successmsg').fadeOut();
                $('#login-form .successmsg').velocity("fadeOut", {
                    duration: 400
                });


                $('#login-form')[0].reset();
                $("#login-form .valid").removeClass("valid");

                var option = $(".selectbox1").find("option").eq(0);
                $(".selectbox1").selectbox("change", option.attr('value'), option.html());

                var option = $(".selectbox2").find("option").eq(0);
                $(".selectbox2").selectbox("change", option.attr('value'), option.html());

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
                $(this).closest(".column-3").siblings().find(".footer-block ul").velocity("slideUp", {
                    duration: 400
                });
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

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        //        $("#bgvid").attr("controls",true);   
        $("body").addClass("ios-device");
    }

    $(".selectbox1").selectbox();
    $(".selectbox2").selectbox();

    $(".select-lng > a").on("click", function (e) {
        e.preventDefault();
        if ($(this).parent().hasClass("open")) {
            $(this).parent().removeClass("open");
            $(this).next("ul").velocity("slideUp", {
                duration: 400
            });
        } else {
            $(this).parent().addClass("open");
            $(this).next("ul").velocity("slideDown", {
                duration: 400
            });
        }
    });

    $(".select-lng ul li a").on("click", function (e) {
        e.preventDefault();
        $(".select-lng").removeClass("open")
        $(this).closest("ul").removeClass("open").velocity("slideUp", {
            duration: 400
        });
    });

    $("body").on("click touchstart", function (e) {
        var container = $(".select-lng");
        if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass("open")) {
            container.removeClass("open");
            container.find("ul").velocity("slideUp", {
                duration: 400
            });
        }
    });
    // paragraph word after other
    //    var $el = $(".banner-text-last p:first"), text = $.trim($el.text()),
    //        words = text.split(" "), html = "";
    //
    //    for (var i = 0; i < words.length; i++) {
    //        html += "<span>" + words[i] + ((i+1) === words.length ? "" : " ") + "</span>";
    //    };
    //    $el.html(html).children().hide().each(function(i){
    //      $(this).delay(i*200).fadeIn(700);
    //    });
    //    $el.find("span").promise().done(function(){
    //        $el.text(function(i, text){
    //           return $.trim(text);
    //        });
    //    });
    var p = $(".banner-text-last p span.fade-text").hide();

    function oneParagraph(i) {
        if (p.length <= i)
            return;
        var cur = p.eq(i),
            words = cur.text().split(/\s/),
            span = $("<span>"),
            before = document.createTextNode("");
        cur.empty().show().append(before, span);
        (function oneWord(j) {
            if (j < words.length) {
                span.hide().text(words[j]).fadeIn(400, function () {
                    span.empty();
                    before.data += words[j] + " ";
                    oneWord(j + 1);
                });
            } else {
                span.remove();
                before.data = words.join(" ");
                setTimeout(function () {
                    oneParagraph(i + 1);
                }, 500);
            }
        })(0);
    };
    setTimeout(function () {
            oneParagraph(0);
        }, 5000)
        // end of word animation
});

$(window).load(function () {
    stickyHeader();

    //equalHeight()
    equalHeight();

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


    //equalHeight()
    equalHeight();
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
    if ($(".get-started-btn").length) {
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
            }, 0);
        }
    }


    if ($(".get-load").length) {
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
            }, 0);
        }
    }
}

function equalHeight() {
    $('.middle-content-block').each(function () {
        var highestBox = 0;
        $('.column-6', this).each(function () {
            $(this).css("height", "");
            if ($(this).height() > highestBox)
                highestBox = $(this).height();
        });
        $('.column-6', this).height(highestBox);
    });
}




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
            obj.each(function (i) {
                var $this = $(this);
                var windowHeight = $(window).height();
                var objOffset = $this.offset().top;
                var objHeight = $this.height();
                var scroll = $(window).scrollTop();
                var result = (scroll - objOffset) / 5;
                if ($this.hasClass("left")) {
                    $this.css({"background-position": (result - 500) + "px 0"});
                } else if ($this.hasClass("right")) {
                    $this.css({"background-position": -(result + 350) + "px 0"});
                } else if ($this.hasClass("up")) {
                    $this.css({"background-position": p[i][0]+"% " + result + "px"});
                }
                if (scroll > (objOffset - (windowHeight / 2))) {
                    var gray_ = (((scroll - (objOffset + windowHeight)) / (objOffset + windowHeight)) * 0.7) + 0.7;
                    $this.find(".overlay-bg").css('background-color', 'rgba(79,80,84,' + gray_ + ')');
                } else {
                    $this.find(".overlay-bg").css('background-color', 'rgba(0,0,0,0)');
                }
            })
        }
        var getypos = function (){
            obj.removeAttr("style")
            p = [],
            obj.each(function(i) {
                p.push($(this).css("background-position"));
                console.log($(this) ,$(this).css("background-position"))
            })
            for (var i = 0; i < p.length; i++) {
                p[i] = p[i].split(" ")
            }
            for (var i = 0; i < p.length; i++) {
                for (var j = 0; j < p[i].length; j++) {
                    p[i][j] = parseFloat(p[i][j].replace(/px/g,""))
                }
            }
            console.log(p)
        }
        var init = function () {
            getypos();
            parallax();
            $(window).bind("resize", getypos)
            $(window).bind("scroll", parallax)
            var image = "parallax bind successfuly"
            settings.onParallaxBind(image);
        }
        obj.destroy = function () {
            $(window).unbind("resize", getypos)
            $(window).unbind("scroll", parallax)
            obj.removeAttr("style")
            settings.onParallaxDestroy(obj);
        }
        init()
        return this
    }

    $(".parallax").parallaxx()




})(jQuery);