require.config({
	"paths":{
		"zepto":"../lib/zepto.min"
	}
});
require(["zepto"],function ($) {
	// 设置两个开关，用于判定用户名和密码ok
	var userId = false,
		password = false;

	// 获取焦点时，错误信息提示消失
	var the_error = $('.the-error').children();
	$('.the-form').find('input').focus(function() {
		the_error.text('');
	});

	// 失去焦点时，判断有无内容
	$('.userId').blur(function() {
		if($(this).val()===''){
			hintMes('请输入用户名');
		}
	});

	$('.password').blur(function() {
		if ($(this).val()==='') {
			hintMes('请输入密码');
		}
	});

	// 点击登录时，向服务器传入参数
	$('.login-btn').on('touchstart', function() {
		
			if ($('.password').val() !== '') {
				password = true;
			}

			if($('.userId').val() !== ''){
				userId = true;
			}
			console.log(password,userId)
		if (password&&userId) {
			
			var userName = $('.userId').val(),
				the_pswd = $('.password').val();
			$.ajax({
				url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
				data: {status: 'login',userID:userName,password:the_pswd},
				success:function (data) {
					console.log(typeof data);
					if (data === '2') {
						hintMes('用户名与密码不符');
					}else if (data === '0') {
						hintMes('用户名不存在');
					}else {
						hintMes('登陆成功，正在跳转');
						setTimeout(isSuccess,1000);
					}
				}
			});
			
			

		}else{
			hintMes('请填写正确的用户名和密码');
		}
	});


	// 错误信息函数
	function hintMes (mes) {
		the_error.text(mes).css({
			fontSize: '14px',
			color: 'red'
		});
	}
	function isSuccess () {
		window.location.href = '../index.html';
	}
});