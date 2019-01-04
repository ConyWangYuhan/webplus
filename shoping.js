var bgleft1=document.getElementsByClassName('bgleft1')[0];
var bgmove=document.getElementsByClassName('bgmove')[0];
var b1=document.getElementsByClassName('b1')[0];
var b1img=document.getElementsByClassName('b1img');
var b2= document.getElementsByClassName('b2')[0];
var a1=document.getElementsByClassName('a1')[0];
var input=document.getElementsByClassName('ip')[0];
var a2=document.getElementsByClassName('a2')[0];
var which=document.getElementsByClassName('which')[0];
var one=document.getElementsByClassName('one')[0];
var two=document.getElementsByClassName('two')[0];
var bt2=document.getElementsByClassName('bt2')[0];
var jump1=document.getElementsByClassName('jump')[0];
var jump2=document.getElementsByClassName('jump')[0];
var jumped=document.getElementsByClassName('jumped')[0];
var goonshopping=document.getElementsByClassName('goonshopping')[0];
var checkout=document.getElementsByClassName('checkout')[0];
var gogout=document.getElementsByClassName('gogout')[0]
var bigImg=document.getElementsByClassName('xbig')[0];
var index = 0;
b1img[index].parentNode.style.border = '2px solid #FFA500';
bgleft1.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
bgleft1.style.backgroundSize = 'contain';
bgleft1.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
bgleft1.style.backgroundSize = 'contain';

for(var i = 0;i<b1img.length;i++){
	(function (i){
		b1img[i].onmouseover = function (){
			b1img[index].parentNode.style.border = 'none';
			index = i;
			b1img[index].parentNode.style.border = '2px solid #FFA500';
			bgleft1.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
			bgleft1.style.backgroundSize = 'contain';
		}
	}(i))
}
b1.onclick = function (){
	b1img[index].parentNode.style.border = 'none';
	index--;
	if(index<0){
		index=1;
	}
	b1img[index].parentNode.style.border = '2px solid #FFA500';
	bgleft1.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
	bgleft1.style.backgroundSize = 'contain';
}
b2.onclick = function (){
	b1img[index].parentNode.style.border = 'none';
	index++;
	if(index>1){
		index=0;
	}
	b1img[index].parentNode.style.border = '2px solid #FFA500';
	bgleft1.style.background = 'url("任务所需小图/img/pp'+index+'.jpeg")no-repeat';
	bgleft1.style.backgroundSize = 'contain';
}

bgleft1.onmouseover = function (){
	bgmove.style.display = 'inline-block';
	bigImg.style.display = 'block';
	bigImg.children[0].src='任务所需小图/img/pp'+index+'.jpeg';
	bgleft1.onmousemove = function (e){
		var e = e||window.event;
		moveLeft = e.clientX - bgmove.offsetWidth*0.5 -bgleft1.offsetParent.offsetLeft-bgmove.offsetParent.offsetLeft;
		moveTop = e.clientY - bgmove.offsetHeight*0.5 - bgleft1.offsetParent.offsetTop-bgmove.offsetParent.offsetTop;
		if(moveLeft<0){
			moveLeft = 0;
		}else if(moveLeft>=bgleft1.offsetWidth-bgmove.offsetWidth){
			moveLeft=bgleft1.offsetWidth-bgmove.offsetWidth;
		}
		if(moveTop<0){
			moveTop = 0;
		}else if(moveTop>=bgleft1.offsetHeight-bgmove.offsetHeight){
			moveTop=bgleft1.offsetHeight-bgmove.offsetHeight;
		}
		bgmove.style.left = moveLeft+'px';
		bgmove.style.top = moveTop+'px';

		bigImg.children[0].style.left = -moveLeft/(bgleft1.offsetWidth/bigImg.children[0].offsetWidth)+bgmove.offsetWidth*1.5+'px';
		bigImg.children[0].style.top = -moveTop/(bgleft1.offsetHeight/bigImg.children[0].offsetHeight)+bgmove.offsetWidth*1.5+'px';
	}
	
}
bgleft1.onmouseout = function (){
	bgmove.style.display = 'none';
	bigImg.style.display = 'none';
}
a1.onmouseover = function (){
	if(parseInt(input.value)==1){
		a1.style.cursor = 'not-allowed';
	}else{
		a1.style.cursor = 'pointer';
	}
}
a2.onmouseover = function (){
	if(parseInt(input.value)==5){
		a2.style.cursor = 'not-allowed';
	}else{
		a2.style.cursor = 'pointer';
	}
}
// 商品数目增减部分
a2.onclick = function (){
	if(input.value<5){
		input.value=parseInt(input.value)+1;
	}else{
		a2.style.cursor = 'not-allowed';
	}
	
}
a1.onclick = function (){
	if(input.value>1){
		input.value=parseInt(input.value)-1;
	}else{
		a1.style.cursor = 'not-allowed';
	}
}
// 显示选中的型号
which.innerText = '"'+one.innerText+'"';
one.onclick = function (){
	which.innerText = '"'+one.innerText+'"';
	one.style.background="url('任务所需小图/img/duigou.png')no-repeat";
	one.style.backgroundPosition="57px 17px";
	one.style.border='1px solid #FF1493';
	two.style.background="none";
	two.style.border = 'none';
}
two.onclick = function (){
	which.innerText = '"'+two.innerText+'"';
	two.style.background="url('任务所需小图/img/duigou.png')no-repeat";
	two.style.backgroundPosition="57px 17px";
	one.style.background="none";
	two.style.border='1px solid #FF1493';
	one.style.border = 'none';
}
// 购物车
bt2.onclick = function (){
	jump2.style.display = 'block';
	jumped.style.display='block'; 
}

goonshopping.onclick = function (){
	jump1.style.display = 'none';
	jumped.style.display='none';

}
checkout.onclick = function (){
	jump1.style.display = 'none';
	jumped.style.display='none';
}
gogout.onclick = function (){
	jump1.style.display = 'none';
	jumped.style.display='none';
}