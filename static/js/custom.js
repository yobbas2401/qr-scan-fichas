(function(e){"use strict";function t(e,t){if(i[e])t&&t();else{i[e]=!0;var a=document.getElementsByTagName("body")[0],o=document.createElement("script");o.type="text/javascript",o.src=e,o.onload=t,a.appendChild(o)}}var a={},o="static/plugin/";e.fn.exists=function(){return this.length>0},a.PreLoad=function(){document.getElementById("loading").style.display="none"},a.HeaderSticky=function(){e(".navbar-toggler").on("click",function(t){t.preventDefault(),e("header").addClass("fixed-header")})},a.MenuClose=function(){e(".navbar-nav .nav-link").on("click",function(){var t=e(".navbar-toggler").is(":visible");t&&e(".navbar-collapse").collapse("hide")})},a.HeaderHeight=function(){var t=e(".header-height .fixed-header-bar").height();e("header").height(t)},a.HeaderFixd=function(){var t=e(window).scrollTop();t>=100?e("header").addClass("fixed-header"):e("header").removeClass("fixed-header")},a.OnePage=function(){e('header a[href*="#"]:not([href="#"]), .got-to a[href*="#"]:not([href="#"])').on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var t=e(this.hash);if(t=t.length?t:e("[name="+this.hash.slice(1)+"]"),t.length)return e("html,body").animate({scrollTop:t.offset().top-70},1e3),!1}})},a.SearchBox=function(){var t=e(".search_click");t.on("click",function(){e(".search-box").toggleClass("searh-form-open")})},a.MegaMenu=function(){var t=e(".m-dropdown-toggle");t.on("click",function(){e(this).parent().toggleClass("open-menu-parent"),e(this).next("ul").toggleClass("open-menu"),e(this).toggleClass("open")})},a.ProgressBar=function(){e(".progress .progress-bar").each(function(){var t=e(this).offset().top+e(this).outerHeight(),a=e(window).scrollTop()+e(window).height(),o=e(this).attr("aria-valuenow")+"%";a>t&&e(this).css({width:o})})},a.Accordion=function(){e(".accordion").each(function(t,a){var o=e(this),i=o.find(".acco-group > .acco-des"),n=o.find(".acco-group > .acco-heading");i.hide().first().slideDown("easeOutExpo"),n.first().parent().addClass("acco-active"),n.on("click",function(){if(e(this).parent().hasClass("acco-active"))e(this).parent().removeClass("acco-active"),e(this).next().slideUp("easeInExpo");else{var t=e(this).next(".acco-des");n.parent().removeClass("acco-active"),e(this).parent().addClass("acco-active"),i.not(t).slideUp("easeInExpo"),e(this).next().slideDown("easeOutExpo")}return!1})})},a.Counter=function(){var a=jQuery(".counter"),i=e(".counter");a.length>0&&t(o+"counter/jquery.countTo.js",function(){i.each(function(){var t=e(this);t.appear(function(){t.find(".count").countTo({speed:2e3,refreshInterval:10})})})})},a.Owl=function(){var a=jQuery("div.owl-carousel");a.length>0&&t(o+"owl-carousel/js/owl.carousel.min.js",function(){a.each(function(){var t=e(this),a=t.data("items")?t.data("items"):1,o=!t.attr("data-loop")||t.data("loop"),i=!!t.data("nav-dots")&&t.data("nav-dots"),n=!!t.data("nav-arrow")&&t.data("nav-arrow"),s=!t.attr("data-autoplay")||t.data("autoplay"),r=t.attr("data-autospeed")?t.data("autospeed"):5e3,c=t.attr("data-smartspeed")?t.data("smartspeed"):1e3,l=!!t.data("autoheight")&&t.data("autoheight"),d=!!t.data("center")&&t.data("center"),u=t.attr("data-space")?t.data("space"):30;e(this).owlCarousel({loop:o,items:a,responsive:{0:{items:t.data("xx-items")?t.data("xx-items"):1},480:{items:t.data("xs-items")?t.data("xs-items"):1},768:{items:t.data("sm-items")?t.data("sm-items"):2},980:{items:t.data("md-items")?t.data("md-items"):3},1200:{items:a}},dots:i,autoplayTimeout:r,smartSpeed:c,autoHeight:l,margin:u,center:d,nav:n,navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],autoplay:s,autoplayHoverPause:!0})})})},a.Gallery=function(){(e(".lightbox-gallery").exists()||e(".popup-youtube, .popup-vimeo, .popup-gmaps").exists())&&t(o+"magnific/jquery.magnific-popup.min.js",function(){e(".lightbox-gallery").exists()&&e(".lightbox-gallery").magnificPopup({delegate:".gallery-link",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-fade",fixedContentPos:!0,closeBtnInside:!1,gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]}}),e(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()&&e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})})},a.masonry=function(){var a=e(".portfolio-content");e(".portfolio-content").exists()&&t(o+"isotope/isotope.pkgd.min.js",function(){if(e(".portfolio-content").exists()){e(a).isotope({resizable:!1,itemSelector:".portfolio-item",layoutMode:"masonry",filter:"*"});var t=e(".filter li");e(t).on("click",function(){var t=e(this).attr("data-filter");a.isotope({filter:t})}),e(t).on("click",function(){e(this).addClass("active").siblings().removeClass("active")})}})},a.mTypeIt=function(){e(".type_it").exists()&&t(o+"typeit-master/typeit.min.js",function(){e(".type_it").exists()&&new TypeIt(".type_it",{speed:200,loop:!0,strings:["Designer","Developer"],breakLines:!1})})},a.ContactForm=function(){e(".contactform").on("submit",function(){e(".output_message").text("Loading...");var t=e(this);return e.ajax({url:t.attr("action"),method:t.attr("method"),data:t.serialize(),success:function(t){"success"==t?(e(".contactform").find(".output_message").addClass("success"),e(".output_message").text("Message Sent!")):(e(".contactform").find(".output_message").addClass("error"),e(".output_message").text("Error Sending!"))}}),!1})};var i={};e(window).on("load",function(){a.PreLoad()}),e(document).on("ready",function(){a.mTypeIt(),a.HeaderFixd(),a.masonry(),a.OnePage(),a.Counter(),a.HeaderHeight(),a.HeaderSticky(),a.MenuClose(),a.Gallery(),a.Accordion(),a.ProgressBar(),a.MegaMenu(),a.Owl(),a.ContactForm(),a.SearchBox()}),e(window).on("scroll",function(){a.ProgressBar(),a.HeaderFixd()}),e(window).on("resize",function(){a.HeaderHeight()})})(jQuery);