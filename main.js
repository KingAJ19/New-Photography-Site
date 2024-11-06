(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Drawings page
	
	$(".drawings").on('click', function () {
		$("body").addClass("drawings-on");
	});
	$(".drawings-close").on('click', function () {
		$("body").removeClass("drawings-on");
	});

	
	//Kitty page
	
	$(".kitty").on('click', function () {
		$("body").addClass("kitty-on");
	});
	$(".kitty-close").on('click', function () {
		$("body").removeClass("kitty-on");
	});

	
	//Junior page
	
	$(".junior").on('click', function () {
		$("body").addClass("junior-on");
	});
	$(".junior-close").on('click', function () {
		$("body").removeClass("junior-on");
	});

	//Grey Kitty page
	
	$(".grey").on('click', function () {
		$("body").addClass("grey-on");
	});
	$(".grey-close").on('click', function () {
		$("body").removeClass("grey-on");
	});

	//Blackie page
	
	$(".blackie").on('click', function () {
		$("body").addClass("blackie-on");
	});
	$(".blackie-close").on('click', function () {
		$("body").removeClass("blackie-on");
	});

	//Anele page
	
	$(".me").on('click', function () {
		$("body").addClass("me-on");
	});
	$(".me-close").on('click', function () {
		$("body").removeClass("me-on");
	});

	//LMK FC page
	
	$(".lmk").on('click', function () {
		$("body").addClass("lmk-on");
	});
	$(".lmk-close").on('click', function () {
		$("body").removeClass("lmk-on");
	});

	
})(jQuery); 