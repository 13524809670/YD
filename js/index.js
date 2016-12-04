$(function(){

	//产品简介css样式
	$('.pic_a li').eq(0).css('border','1px solid #f60');
	$('.pic_a li').eq(1).css('margin','0 20px');
	$('.pic_a li').eq(3).css('margin-left','20px');

	// 新闻详情 css样式
	$('.news li').eq(0).css('color','#111');


	// 轮播图

	// 公有变量
	var b = 0;
	// 定时器
	var timer

	// 底部按钮
	$('.banner_btn li').click(function(){
		$(this).addClass('cur').siblings('li').removeClass('cur');
		var a = $(this).index();
		$('.banner_img li').eq(a).fadeIn(2500).siblings('li').fadeOut(2500);
		b = a
	});

	// 右边按钮
	$('.next').click(function(){
		b++;
		if( b > 2){ b = 0};
		$('.banner_img li').eq(b).fadeIn(2500).siblings('li').fadeOut(2500);
		$('.banner_btn li').eq(b).addClass('cur').siblings('li').removeClass('cur')
	});

	// 左边按钮
	$('.prev').click(function(){
		b--;
		if(b < 0){b = 2};
		$('.banner_img li').eq(b).fadeIn(2500).siblings('li').fadeOut(2500);
		$('.banner_btn li').eq(b).addClass('cur').siblings('li').removeClass('cur');
	});

	
	// 使用定时器实现自动轮播【3】
	var time = function(){
		b++;
		if( b > 2){ b = 0};
		$('.banner_img li').eq(b).fadeIn(2500).siblings('li').fadeOut(2500);
		$('.banner_btn li').eq(b).addClass('cur').siblings('li').removeClass('cur')
	}

	timer=setInterval(time,2500)//调用time函数

	$('.banner').hover(function(){
		clearInterval(timer)
	},
	function(){
		timer=setInterval(time,2500)
	});
})