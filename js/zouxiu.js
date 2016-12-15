//点击切换菜单栏样式
$(function() {
	$('.top>li').on('touchstart',function() {
		$(this).addClass('one').siblings().removeClass('one');
	});
	//切换页面
	$('.product').on('touchstart',function() {
		$('.section_body').show();
		$('.section_body1').hide();
	});
	$('.xiangqing').on('touchstart',function() {
		$('.section_body1').show();
		$('.section_body').hide();
	});
	//跳转页面
//	$('.dian_mean').on('touchstart',function() {
//		window.location = "";
//	})
//	$(".cart").on('touchstart',function() {
//			window.location = "";
//		})
		//选择颜色和样式
	var colorNum = null;
	$('.color').find('.color_bar').on('touchstart',function() {
		$(this).parent().find(".color_bar").css({
			"border":"1px solid #ccc",
			"color":"#000",
		});
		$(this).css({
			"border":"1px solid #f24254",
			"color":"#f24254"
		})
		colorNum = $(this).html();
	});
	

	//选择大小
	var sizeNum = null;
	$('.size').find('.size_bar').on('touchstart',function() {
		$(this).parent().find(".size_bar").css({
			"border":"1px solid #ccc",
			"color":"#000",
		});
		$(this).css({
			"border":"1px solid #f24254",
			"color":"#f24254"
		})
		sizeNum = $(this).html();
		
	});
		
	//返回顶部
	$('.back_top').hover(function() {
		$('.back_top').animate({
			bottom: "5"
		});
	}, function() {
		$('.back_top').animate({
			right: "5"
		});
	}).on('touchstart',function() {
		$('html,body').animate({
			scrollTop: 0
		});
	});
	
	
	//存储数据
	$('.cart_btn').on('touchstart',function(){
				// console.log($('#datail_sell_price').html().split('￥')[1])
			var product = window.localStorage;
			
		var a = {pinpai: $('.good_brand').html(),
			title: $('.good_name').html(),
			price: $('.price').html().split('￥')[1],
			size: sizeNum,
			color: colorNum}
		a=JSON.stringify(a);
			if(colorNum === null){
			alert('请选择颜色');
		}else if(sizeNum === null){
			alert('请选择尺寸');
		}
		product['a'] = a;	
});

});