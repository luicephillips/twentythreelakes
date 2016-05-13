// JavaScript Document
var $ = jQuery.noConflict();

jQuery(document).ready(function() {
    //$('input,textarea').placeholder();
    $('.enumenu_ul').responsiveMenu({
        'menuIcon_text': '',
        onMenuopen: function() {}
    });

});



// JavaScript Document
    var $ = jQuery.noConflict();
    var obj;
    var offSET;
    var sticky_clone;

    $(document).ready(function () {
        obj = $("#sticky");
        sticky_clone = $("<div>", {
            "class": "sticky-clone"
        })
        console.log(sticky_clone);
        $(sticky_clone).insertBefore(obj);
        offSET = $('.sticky-clone').offset().top + $(obj).height()
        stickyFix();
    });
    $(window).scroll(function () {
        stickyFix();
    });

    $(window).load(function () {
        stickyFix()
    });

    $(window).resize(function () {
        offSET = $('.sticky-clone').offset().top + $(obj).height()
        stickyFix();
    });


var flag=true;
    function stickyFix() {
        
        if ($(window).scrollTop() > offSET && flag) {
            sticky_clone.innerHeight(obj.outerHeight());
            obj.addClass('fixed slideDown');
            flag= false
        } else if($(window).scrollTop() <= offSET && !flag) {
            obj.removeClass('slideDown').addClass("slideUp");
            setTimeout(function(){
                obj.removeClass('fixed slideUp');
                sticky_clone.innerHeight(0);
            },400)
            flag=true;
        }
    }

