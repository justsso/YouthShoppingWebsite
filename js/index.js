window.onload = function(){
	
	var oUl = document.getElementById("text_list");
	
	var oLi = oUl.getElementsByTagName('li');
	var oBanner = document.getElementById("banner");
	var oAs = oBanner.getElementsByClassName('btns')[0].getElementsByTagName('a');
	
	var now = 0;
	var time = null;
	clearInterval(time);
	oUl.style.width=1140*oLi.length+'px';	
	for( var i=0;i<oAs.length;i++){
		oAs[i].rrr = i;
		oAs[i].onclick=function(){
				now=this.rrr;
				teb();
		}		
	}
	function teb(){

			for (var i = 0; i < oAs.length; i++) {
				oAs[i].className='';
			}
			oAs[now].className='aa';
			oUl.style.left=-1140*now+'px';
	}
	
	function nex(){
		now++;
		if (now==oLi.length) {
				now=0;
		}
		teb();
		}
	
	time = setInterval(nex, 3000);

	oBanner.onmouseover=function(){
		clearInterval(time);
	}
	oBanner.onmouseout=function(){
		time = setInterval(nex, 3000);
	}
}
