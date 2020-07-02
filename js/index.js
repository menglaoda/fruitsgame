$(function(){
	//游戏启动中
	var progresstime = 0;
	var startgame = setInterval(function(){
		progresstime++;
		$(".percent").html(progresstime+"%");
		$(".loadding").css("width",progresstime+"%");
		if(progresstime==99){
			clearInterval(startgame);
		}
	},50);
	//图片加载完毕时，游戏启动成功
	var imgnum = $("img").length;			
	$('img').load(function(){
	    imgnum--;
	    console.log(imgnum)
	    if(imgnum==0){
	    	clearInterval(startgame);
	    	$(".percent").html("100%");
			$(".loadding").css("width","100%");
			setTimeout(function(){
				$(".start").hide();
				$(".choose").show();
			},100)
	    }
	})
})
