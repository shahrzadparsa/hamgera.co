
$(function(){
	
	var slides = $('div.contain-slider > div.slider > div.train > section'),
		nav = $('div.contain-slider > div.slider > ul.nav-slider > li'),
		n = 0, // count of slides
		currentSlide = -1,
		zIndex = 1; 

	resetIndex = function(elm,eq){
		elm.each(function(){
			$(this).css('z-index',zIndex);
		}).eq(eq).css('z-index',(zIndex+1));
	}
	
	autoSlide = function(n){
		if(n==currentSlide) return;
		n = (n<0) ? (nav.length-1) : n;  //if(n<0) n=nav.length-1;
		n = (n>nav.length-1) ? 0 : n; //if(n>nav.length-1) n=0;
		go2nav(n+1,currentnext,nextli,true);
		go2nav(n-1,currentback,preli,false);
		left = (n>currentSlide) ? 980 : -980;
		resetIndex(slides,currentSlide);
		slides.eq(n).css({
			'z-index':(zIndex+2),
			'left':left
		}).animate({
			'left':0
		},700,'cubic-bezier(.49, .06, 0, 1)');
		currentSlide = n;
	};

	nav.click(function(){
		autoSlide($(this).index());
		//go2nav($(this).index()+1);
	});

	$('div.contain-slider > div.next').click(nextSlide = function(){
		autoSlide(currentSlide+1);
		//go2nav(currentnext+1);
	}
	);

	$('div.contain-slider > div.pre').click(function(){
		autoSlide(currentSlide-1);
		//go2nav(currentnext-1);
	});

	var intervalName = false;
	(startAutoPlay = function(){
		if(intervalName) return;
		intervalName = setInterval(nextSlide,3000);
	})();

	stopAutoPlay = function(){
		clearInterval(intervalName);
		intervalName = false;
	}

	$('div.contain-slider').mouseover(stopAutoPlay);
	$('div.contain-slider').mouseout(startAutoPlay);

	/////////////////////////////////////////////////////////////////

	///next nav

	$('div.contain-slider > div.next').mouseover(function(){

		$('div.contain-slider > div.next div.contain-next-nav').css({
			'background-position':'0 -85px'
		});

		$(this).animate({
			'width':'151px'
		},200,'cubic-bezier(.14, .63, .26, 1)');
	}).mouseout(function(){

		$('div.contain-slider > div.next div.contain-next-nav').css({
			'background-position':'0 0'
		});

		$(this).animate({
			'width':'41px'
		});
	},200,'cubic-bezier(0, .87, 0, 1)');



	$('div.contain-slider > div.pre').mouseover(function(){
		
		$('div.contain-slider > div.pre div.contain-pre-nav').css({
			'background-position':'right -255px'
		});

		$(this).animate({
			'width':'151px'
		},200,'cubic-bezier(0, .87, 0, 1)');
	}).mouseout(function(){

		$('div.contain-slider > div.pre div.contain-pre-nav').css({
			'background-position':'right -170px'
		});

		$(this).animate({
			'width':'41px'
		});
	},200,'cubic-bezier(0, .87, 0, 1)');

var x,currentNav,arrow;
var currentnext = 0;//currentSlide+1;
var currentback = 0;//currentSlide-1;
var nextli = $('ul.nav-next > li');
var preli = $('ul.nav-pre > li');
var mode=true;

	go2nav = function(x,currentNav,arrow,mode){ //like: go2nav(n+1,currentnext,nextli);
		// alert('x:'+x+'  currentNav:'+currentNav);
		if(x==currentNav) return;
		x = (x<0) ? (arrow.length-1) : x;  //if(n<0) n=nav.length-1;
		x = (x>arrow.length-1) ? 0 : x; //if(n>nav.length-1) n=0;
		//left = (x>currentnext) ? 110 : -110;

		resetIndex(arrow,currentNav);

		arrow.eq(currentNav).animate({
			'left':'-110px'//-left
		},700,'cubic-bezier(.99, .06, 0, 1)');

		arrow.eq(x).css({
			'z-index':(zIndex+2),
			'left':'110px'//left
		}).animate({
			'left':0
		},700,'cubic-bezier(.96, .55, 0, 1)');
		currentNav = x;

		// alert('x:'+x);
		if(mode) currentnext = currentNav;
		else if(!mode) currentback = currentNav;
		//alert('x:'+x+'  currentNav:'+currentNav+' mode:'+mode);
	}


	// $('ul.nav-next > li > a')
	// $('div.container > div.next').click(function(){
	// 	autoSlide(currentSlide+1);
		// go2nav(currentnext+1);
	// });
	
});
