window.onload = function() {
	//products 四颜色
	var colorArr = ['orange', 'green', '#45bbaf', '#e53935'];
	var oTable = document.getElementsByTagName('table');
	for(var i = 0; i < oTable.length; i++) {
		var oTd = oTable[i].getElementsByTagName('td');
		for(var j = 0; j < oTd.length; j++) {
			oTd[j].style.borderTopColor = colorArr[j];
		}
	}
	
	//showProduct  返回顶部
	var oBack = document.getElementById("back");
	var obtn = document.getElementById('btn');
	var clientHeight = document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;
	window.onscroll = function() {
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(osTop >= clientHeight) {
			oBack.style.display = 'block';
		} else {
			oBack.style.display = 'none';
		}
		if(!isTop) {
			clearInterval(timer);
		}
		isTop = false;
	}
	obtn.onclick = function() {
		timer = setInterval(function() {
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.ceil(osTop / 5);
			document.documentElement.scrollTop = document.body.scrollTop =
				osTop - ispeed;
			isTop = true;
			console.log(osTop - ispeed);
			if(osTop == 0)
				clearInterval(timer);
		}, 30);
	}

	
		
}