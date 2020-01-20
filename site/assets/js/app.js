'use strict';

$(function() {
    var $window = $(window);
    var $body = $('body');
    var $off_canvas = $('#off-canvas');
    var $site_wrapper = $('#site-wrapper');

    var viewport_width = $window.innerWidth();
    var viewport_height = $window.innerHeight();

    var initialize_off_canvas_menu = function() {
        var top_header_left = $('#top-header-left').html();
        var top_header_right = $('#top-header-right').html();
        var main_menu = $('#main-menu-container > div:first-child').html();

        var off_canvas_menu_content = '<div class="off-canvas-section">' + top_header_left + '</div>' +
                                    '<div class="off-canvas-section">' + top_header_right + '</div>' +
                                    '<div class="off-canvas-section">' + main_menu + '</div>';

        $off_canvas.html(off_canvas_menu_content);
    }

    var calculate_post_video_height = function(el) {
        var post_video_parent_w = $(el).parent('.post-video').width();

        var iframe_h = 9/16 * post_video_parent_w;

        $(el).height(iframe_h);
    }

    initialize_off_canvas_menu();

    $('#top-header .search-toggle').on('click', function(e) {
        e.preventDefault();
        if($(e.target).hasClass('search-toggle')) {
            $(this).next('.header-search-container').toggle('slow');
        }

    });

    $('#main-menu-container ul.menu > li').on('mouseenter', function(e) {
        var submenu = $(this).find('> ul.sub');

        if($(submenu).length > 0) {
            if($(submenu).hasClass('normal')) {
                $(submenu).show();
            } else if($(submenu.hasClass('mega'))) {
                var $main_menu_container = $('#main-menu-container')
                var mega_width = $main_menu_container.width() - 30;
                var menu_container_offset = $main_menu_container.offset();

                var parent_offset = $(this).offset();
                var left_translation = menu_container_offset.left - parent_offset.left + 15;

                $(submenu).css({'left':left_translation, 'width':mega_width});
                $(submenu).show();
            }
        }
    });

    $('#main-menu-container ul.menu > li').on('mouseleave', function(e) {
        $(this).find('> ul.sub').hide();
    });

    $('#main-menu-toggle').on('click', function(e) {
        e.preventDefault();

        $site_wrapper.addClass('show-nav');
        $body.addClass('off-canvas-open');
        $off_canvas.height(viewport_height);
    });

    $('#off-canvas-overlay').on('click', function(e) {
        $site_wrapper.removeClass('show-nav');
        $body.removeClass('off-canvas-open');
    });

    $(document).on('click', '#off-canvas .menu-toggle', function(e) {
        e.preventDefault();

        $(this).siblings('ul.sub').toggle();
    })

    $('.main-slider .flexslider').flexslider({
        controlNav: false
    });

    $('.main-slider .category-slider').slick({
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.main-slider .post-slider').slick({
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 639,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var $masonry_post = $('.masonry-posts').masonry({
        itemSelector: '.post-list-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
        gutter: '.masonry-gutter-sizer'
    });

    $masonry_post.imagesLoaded().progress( function() {
        $masonry_post.masonry('layout');
    });

    $('.flexslider.post-gallery').flexslider({
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>'
    });

    if($('.post-video iframe').length > 0) {
        $('.post-video iframe').each(function(idx, el) {
            calculate_post_video_height(el);
        });
    }

    $('.portfolio-filters a').on('click', function(e) {
        e.preventDefault();

        $('.portfolio-filters a').removeClass('active');
        $(this).addClass('active');

        var data_filter = $(this).data('filter');
        $('.portfolio-list .post-list-item').each(function(idx, el) {
            if($(el).data('category') === data_filter || data_filter === 'all') {
                $(el).show('slow');
            } else {
                $(el).hide('slow');
            }
        });
    });



    var $masonry_gallery = $('.gallery-list').masonry({
        itemSelector: '.gallery-masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
        gutter: '.masonry-gutter-sizer',
        // transitionDuration: 0,
        // stagger: 0
    });

    $masonry_gallery.imagesLoaded().progress( function() {
        $masonry_gallery.masonry('layout');
    });

    $('.gallery-filters a').on('click', function(e) {
        e.preventDefault();

        $('.gallery-filters a').removeClass('active');
        $(this).addClass('active');

        var data_filter = $(this).data('filter');
        var max_el = $('.gallery-list .gallery-list-item').length;
        var elem_count = 0;
        $('.gallery-list .gallery-list-item').each(function(idx, el) {
            if($(el).data('category') === data_filter || data_filter === 'all') {
                $(el).css({'display':'inline-block', 'visibility':'visible'});
                $(el).addClass('gallery-masonry-item');
            } else {
                $(el).css({'display':'none', 'visibility':'hidden'});
                $(el).removeClass('gallery-masonry-item');
            }

            elem_count++;
            if(elem_count >= max_el) {
                $masonry_gallery.masonry('layout');
            }

        });

    });

    $('.gallery-list').magnificPopup({
        delegate: '.gallery-masonry-item .gallery-caption a',
        type: 'image',
        gallery: {
            enabled: true
        },
        verticalFit: true,
        image: {
            titleSrc: 'title'
        }
    });





    $('#btn-to-top').on('click', function(e) {
        e.preventDefault();

        $('body,html').animate({
                scrollTop: 0 ,
            },
            1000
        );
    });

    $window.on('resize', function(e) {
        var old_viewport_width = viewport_width;

        viewport_width = $window.innerWidth();
        viewport_height = $window.innerHeight();

        if(old_viewport_width != viewport_width) {
            if($('#off-canvas-overlay').is(':visible')) {
                $('#off-canvas-overlay').trigger('click');
            }
        }

        if($('.post-video iframe').length > 0) {
            $('.post-video iframe').each(function(idx, el) {
                calculate_post_video_height(el);
            });
        }
    });
});


/***************************************************
EASING
***************************************************/
/*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*
* Uses the built in easing capabilities added In jQuery 1.1
* to offer multiple easing options
*
* TERMS OF USE - jQuery Easing
*
* Open source under the BSD License.
*
* Copyright Â¨Â© 2008 George McGinley Smith
* All rights reserved.
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
def: 'easeOutQuad',
swing: function (x, t, b, c, d) {
//alert(jQuery.easing.default);
return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
},
easeInQuad: function (x, t, b, c, d) {
return c*(t/=d)*t + b;
},
easeOutQuad: function (x, t, b, c, d) {
return -c *(t/=d)*(t-2) + b;
},
easeInOutQuad: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return c/2*t*t + b;
return -c/2 * ((--t)*(t-2) - 1) + b;
},
easeInCubic: function (x, t, b, c, d) {
return c*(t/=d)*t*t + b;
},
easeOutCubic: function (x, t, b, c, d) {
return c*((t=t/d-1)*t*t + 1) + b;
},
easeInOutCubic: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return c/2*t*t*t + b;
return c/2*((t-=2)*t*t + 2) + b;
},
easeInQuart: function (x, t, b, c, d) {
return c*(t/=d)*t*t*t + b;
},
easeOutQuart: function (x, t, b, c, d) {
return -c * ((t=t/d-1)*t*t*t - 1) + b;
},
easeInOutQuart: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
return -c/2 * ((t-=2)*t*t*t - 2) + b;
},
easeInQuint: function (x, t, b, c, d) {
return c*(t/=d)*t*t*t*t + b;
},
easeOutQuint: function (x, t, b, c, d) {
return c*((t=t/d-1)*t*t*t*t + 1) + b;
},
easeInOutQuint: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
return c/2*((t-=2)*t*t*t*t + 2) + b;
},
easeInSine: function (x, t, b, c, d) {
return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
},
easeOutSine: function (x, t, b, c, d) {
return c * Math.sin(t/d * (Math.PI/2)) + b;
},
easeInOutSine: function (x, t, b, c, d) {
return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
},
easeInExpo: function (x, t, b, c, d) {
return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
},
easeOutExpo: function (x, t, b, c, d) {
return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
},
easeInOutExpo: function (x, t, b, c, d) {
if (t==0) return b;
if (t==d) return b+c;
if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
},
easeInCirc: function (x, t, b, c, d) {
return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
},
easeOutCirc: function (x, t, b, c, d) {
return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
},
easeInOutCirc: function (x, t, b, c, d) {
if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
},
easeInElastic: function (x, t, b, c, d) {
var s=1.70158;var p=0;var a=c;
if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
if (a < Math.abs(c)) { a=c; var s=p/4; }
else var s = p/(2*Math.PI) * Math.asin (c/a);
return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
},
easeOutElastic: function (x, t, b, c, d) {
var s=1.70158;var p=0;var a=c;
if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
if (a < Math.abs(c)) { a=c; var s=p/4; }
else var s = p/(2*Math.PI) * Math.asin (c/a);
return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
},
easeInOutElastic: function (x, t, b, c, d) {
var s=1.70158;var p=0;var a=c;
if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
if (a < Math.abs(c)) { a=c; var s=p/4; }
else var s = p/(2*Math.PI) * Math.asin (c/a);
if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
},
easeInBack: function (x, t, b, c, d, s) {
if (s == undefined) s = 1.70158;
return c*(t/=d)*t*((s+1)*t - s) + b;
},
easeOutBack: function (x, t, b, c, d, s) {
if (s == undefined) s = 1.70158;
return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
},
easeInOutBack: function (x, t, b, c, d, s) {
if (s == undefined) s = 1.70158;
if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
},
easeInBounce: function (x, t, b, c, d) {
return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
},
easeOutBounce: function (x, t, b, c, d) {
if ((t/=d) < (1/2.75)) {
  return c*(7.5625*t*t) + b;
} else if (t < (2/2.75)) {
  return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
} else if (t < (2.5/2.75)) {
  return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
} else {
  return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
}
},
easeInOutBounce: function (x, t, b, c, d) {
if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
}
});

function inWords (num) {
    var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
    var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

    if ((num = num.toString()).length > 9) return 'overflow';
    let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' ' : '';
    return str;
}