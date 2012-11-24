$(function  () {
	var navigationBar = $('div.tab div.tab-inner ul li'),
		rail 		  = $('div.tab div.tab-inner p.s1'),
		rail2		  = $('div.tab div.tab-inner p.s2');

	navigationBar.click(function(){

		var index= $(this).index();
		rail.animate({
			left : index*215
		});
		

	});
})