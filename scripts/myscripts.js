$(function(){
	
	var lists       = $('section.container div.hollinks ol.lists > a'),
		flechs		= $('section.container div.hollinks ol.lists > div'),
		flchLength  = flechs.length;
		listsLength = lists.length;

	lists.mouseover(function(){
		var that  = this;
		var index = $(this).index();

		if(index==6) {
			flechs.eq(0).animate({
				rotate : "-180deg"
			},250);
			flechs.eq(1).animate({
				rotate : "75deg"
			},250);

		}
		if(index==7) {
			flechs.eq(0).animate({
				rotate : "40deg"
			},250);
			flechs.eq(1).animate({
				rotate : "-180deg"
			},250);
			
		}
		if(index==8) {
			flechs.eq(1).animate({
				rotate : "-10deg"
			},250);
			flechs.eq(2).animate({
				rotate : "-180deg"
			},250);
			
		}
		if(index==9) {
			flechs.eq(2).animate({
				rotate : "-10deg"
			},250);
			flechs.eq(3).animate({
				rotate : "-190deg"
			},250);
			
		}
		if(index==10) {
			flechs.eq(3).animate({
				rotate : "30deg"
			},250);
			flechs.eq(4).animate({
				rotate : "-180deg"
			},250);
			
		}
		if(index==11) {
			flechs.eq(4).animate({
				rotate : "20deg"
			},250);
			flechs.eq(5).animate({
				rotate : "-170deg"
			},250);
			
		}
		if(index==12) {
			flechs.eq(5).animate({
				rotate : "-30deg"
			},250);
			
		}
	});

	lists.mouseout(function(){
		for(i=0;i<6;i++){
			flechs.eq(i).animate({

				rotate : '0deg' 
			})
		};
	});
});