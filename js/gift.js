$("#outer").on("swipe",function(){
	$("#inner").show();
	$(this).animate({
		translateX:'5.5rem',
	},1000,function(){
		$(this).hide();
	});
	setTimeout(function(){
		$("#inner").animate({
			scale:1.46,
		},800)
	},400);
})