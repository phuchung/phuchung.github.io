$(document).ready(function(){
	$(".menu-toggle").on('click', function() {
	  $(this).toggleClass("on");
	  $('.menu-section').toggleClass("on");
	  $("nav ul").toggleClass('hidden');
	});


	$(".main-menu a").on('click', function() {
		$('.menu-toggle').toggleClass("on");
	    $('.menu-section').toggleClass("on");
	    $("nav ul").toggleClass('hidden');
	});

	$('#fullpage').click(function(){
		if($('.menu-toggle').hasClass('on')){
			$('.menu-toggle').toggleClass("on");
	    	$('.menu-section').toggleClass("on");
	    	$("nav ul").toggleClass('hidden');
		}
	});

	// window.jQuery = window.$ = require('jquery');
	// window.$.velocity = require('http://julian.com/research/velocity/build/jquery.velocity.min.js')

	$('.small, .small-shadow').velocity({
	  rotateZ: [0, -360]
	}, {
	  loop: true,
	  duration: 2000
	});
	$('.medium, .medium-shadow').velocity({
	  rotateZ: -240
	}, {
	  loop: true,
	  duration: 2000
	});
	$('.large, .large-shadow').velocity({
	  rotateZ: 180
	}, {
	  loop: true,
	  duration:1000
	});



});

// wireframe
