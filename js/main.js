//广告Logo
	$(".close").tap(function(){
		$("#app-logo")[0].style.display="none";
	});
		
$.ajax({
	url:"../data/data.json",
	success:function(data){
		let html="";
		data.forEach(function(element,index){
			html+=`
					<li>
						<a href="javascript:void(0)">
							<img src="${element}"/>
						</a>
					</li>
				`
		})
		$("#commodity").find("ul").html(html);
	}
});
$("#top").tap(function(){
	$(window).scrollTop("0px");
});
$("#login").tap(function(){
	location.href="../html/login.html";
})
