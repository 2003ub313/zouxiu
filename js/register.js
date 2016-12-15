
require.config({
	"paths":{
		"zepto":"../lib/zepto.min"
	}
});
require(["zepto"],function ($) {
	checkMes();
	var sureId = false,
			surePswd = false,
			the_pswd = false;
	var the_error = $('.errors').find('span');

	function checkMes () {			
		$('.the-form').find('input').focus(function() {
			$(this).css('border-bottom', '1px solid red').siblings().css('border-bottom', '1px solid #E3E3E3');
		});

		$('.userId').blur(function() {

			if($('.userId').val()===''){
				the_error.text('用户名不能为空');
			}else{
				sureId = true;
			}
		});

		$('.the_pswd').blur(function() {
			if($('.the_pswd').val()===''){
				the_error.text('密码不能为空');
			}
			else{
				the_pswd = true;
			}
		});

		$('.sure-pswd').blur(function() {
			var password = $('.the_pswd').val(),
				repeat_pswd = $('.sure-pswd').val();
			if (password === repeat_pswd) {
				surePswd = true;
			}else{
				the_error.text('您两次输入的密码不同,请重新输入');
			}
		});
		
	};

	$('.register-btn').bind('touchstart',function () {	

		if (surePswd&&the_pswd&&sureId) {
			var userID = $('.userId').val();
			var password = $('.the_pswd').val();
			$.ajax({
				url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
				dataType: 'json',
				data: {status:'register',userID: userID,password:password},
			})
			.done(function(data) {
				if (data===0) {
					the_error.text('此用户名已经注册，请换一个新的用户名');
				}else if (data===1) {
					the_error.text('注册成功');
					setTimeout(toIndex,2000);
				}else if (data === 2) {
					the_error.text('服务器出现故障,请稍后重试');
				}
			});			
		}else if ($('.userId').val() === '') {
			the_error.text('请输入正确的用户名');
		}else if ($('.the_pswd').val() === '') {
			the_error.text('请输入正确的密码');
		}
	});
	function toIndex () {
		window.location.href='../index.html';
	}
});