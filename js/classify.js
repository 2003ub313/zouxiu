require.config({
	'paths':{
		"zepto":"../lib/zepto.min"
	}
});
require(['zepto'],function () {
	
	$.ajax({
			url: 'http://datainfo.duapp.com/shopdata/getclass.php',
			dataType: 'json',
			success:function (data) {
				var list = '';
				for (var i = 0; i < data.length; i++) {
					list += `<li><a href='#'>${data[i].className}</a></li>`;									
				}
				$('.the-list').append(list);				
			}
		});
});