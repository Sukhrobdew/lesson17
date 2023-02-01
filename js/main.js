

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
        navbar.classList.remove("navbar-shrink");
    }
}



//   hamburger 

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



// slides---------


document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type: "loop",
    perPage:2,
    arrows:true,
    pagination:true,
    autoplay:true,
    
  } );
  splide.mount();
} );



// back to top---------

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}


// dark light 

function myFunction() {
var element = document.body;
element.classList.toggle("dark-mode");
}




$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
	loop: true,
  autoplay:true,
	margin: 10,
	nav: true, 
	dots: true,
	items: 1,
	responsive: {
		800: {
			items:2
		},
		1250: {
			items:3
		},
	},
  });
});

	