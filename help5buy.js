var movepic2=document.getElementsByClassName('movepic2')[0];
var noticedetail=document.getElementsByClassName('noticedetail')[0];
var notice = document.getElementsByClassName('notice')[0];
var opt = document.getElementsByTagName('option');
var span5=document.getElementsByClassName('span5')[0];
var add=document.getElementsByClassName('addmoney2')[0];
var pic=document.getElementsByClassName('secondbottom2picture');
var nowing=0;
var movepic1=document.getElementsByClassName('movepic1');
for(var d=0;d<movepic1.length;d++){
	var dot_m = document.createElement('div');
	dot_m.className='dot_m';
	dot_m.innerText = d+1;
	movepic2.appendChild(dot_m);
}
// 右侧悬浮窗
var mostright=document.getElementsByClassName('mostright')[0].children[0].children;
var move=document.getElementsByClassName('move')[0];
for(var i=0;i<mostright.length;i++){
	(function(i){
		mostright[i].onmouseover=function(){
			buffer(mostright[i],{right:-20});
			if(i==2){
				move.src = '任务所需小图/img/erwei.png';
			}
		}
		mostright[i].onmouseout=function(){
			buffer(mostright[i],{right:-95});
			if(i==2){
				move.src = '任务所需小图/img/serwei.png';
			}
		}
	}(i))
}
// 点击跳转
for(pc = 0;pc<pic.length;pc++){
	pic[pc].onclick = function (){
		location.href = 'detail.html';
	}
}
// 吸顶
var always=document.getElementsByClassName('always')[0];
var xiding=document.getElementsByClassName('xiding')[0];
window.onscroll=function(){
	if(window.scrollY>=100){
		xiding.style.position='fixed';
		xiding.style.width='100%';
		always.style.display='block';
	}
	else if(window.scrollY<100){
		xiding.style.position='relative';
		xiding.style.width='1180px';
		always.style.display='none';
	}
}

var sel = document.getElementsByTagName('select')[0];
add.onclick = function (){
	span5.innerText = '¥'+sel.value;
}


//复制公告栏
newli = noticedetail.cloneNode(true);
newli.style.top = '373px';
notice.appendChild(newli);
var newliUl = document.getElementsByClassName("noticedetail")[1];
//公告栏滚动
var timergg;
timergg  = setInterval(function (){
	noticedetail.style.top =parseInt(getCSS(noticedetail,'top'))-5+'px'; 
	newliUl.style.top = parseInt(getCSS(newliUl,'top'))-5+'px';
	if(parseInt(getCSS(noticedetail,'top'))<=-373){
		noticedetail.style.top = '373px';
	}
	if(parseInt(getCSS(newliUl,'top'))<=-373){
		newliUl.style.top = '373px';
	}
},200)
notice.onmouseover = function (){
	clearInterval(timergg);
}
notice.onmouseout = function (){
	timergg  = setInterval(function (){
	noticedetail.style.top =parseInt(getCSS(noticedetail,'top'))-5+'px'; 
	newliUl.style.top = parseInt(getCSS(newliUl,'top'))-5+'px';
	if(parseInt(getCSS(noticedetail,'top'))<=-373){
		noticedetail.style.top = '373px';
	}
	if(parseInt(getCSS(newliUl,'top'))<=-373){
		newliUl.style.top = '373px';
	}
},200)
}

var dot_m = document.getElementsByClassName('dot_m');
for(var j = 1;j<movepic1.length;j++){
	movepic1[j].style.left = '730px';
}
// 自动轮播
var timeAuto = setInterval(function (){
	buffer(movepic1[nowing],{"left":-730})
	nowing++;
	if(nowing>=movepic1.length){
		nowing=0;
	}
	movepic1[nowing].style.left = '730px';
	buffer(movepic1[nowing],{"left":0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[nowing].id = 'current';
},3000)

var movepic=document.getElementsByClassName('movepic')[0];
var movebutton=document.getElementsByClassName('movebutton')[0];
movepic.onmouseover=function (){
	clearInterval(timeAuto);
	movebutton.style.display = 'flex';
}
movepic.onmouseout=function (){
		movebutton.style.display = 'none';
		timeAuto = setInterval(function (){
		buffer(movepic1[nowing],{"left":-730})
		nowing++;
		if(nowing>=movepic1.length){
			nowing=0;
		}
		movepic1[nowing].style.left = '730px';
		buffer(movepic1[nowing],{"left":0});
		for(var t = 0;t<dot_m.length;t++){
			dot_m[t].id = '';
		}
		dot_m[nowing].id = 'current';
},3000)
}

clickDot()
function clickDot(){
	for(var i = 0;i<dot_m.length;i++){
	dot_m[nowing].id = 'current';
	(function (i){
		dot_m[i].onclick = function (){

			if(i>nowing){
				buffer(movepic1[nowing],{left:-730});
				nowing=i;
				if(nowing>=movepic1.length){
					nowing = 0;
				}
				movepic1[nowing].style.left='730px';
			}else if(i<nowing){
				buffer(movepic1[nowing],{left:730});
				nowing=i;
				if(nowing<0){
					nowing = movepic1.length-1;
				}
				movepic1[nowing].style.left='-730px';
			}
			buffer(movepic1[nowing],{left:0});
			for(var t = 0;t<dot_m.length;t++){
				dot_m[t].id = '';
			}
			dot_m[nowing].id = 'current';
		}

	}(i))
}
}
// 轮播图左右按钮
movebutton.children[0].onclick = function (){
	buffer(movepic1[nowing],{left:730});
	nowing--;
	if(nowing<0){
		nowing = movepic1.length-1;
	}
	movepic1[nowing].style.left='-730px';
	buffer(movepic1[nowing],{left:0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[nowing].id = 'current';
}
movebutton.children[1].onclick = function (){
	buffer(movepic1[nowing],{left:-730});
	nowing++;
	if(nowing>=movepic1.length){
		nowing= 0;
	}
	movepic1[nowing].style.left='730px';
	buffer(movepic1[nowing],{left:0});
	for(var t = 0;t<dot_m.length;t++){
		dot_m[t].id = '';
	}
	dot_m[nowing].id = 'current';
}

function buffer(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		var flag = true;
		for(var i in json){
			if(i === 'opacity'){
				var target = parseInt(parseFloat(json[i])*100);
				var loc = parseInt(parseFloat(getCSS(obj,i))*100)||100;
			}else if(i ==='scrollTop'){
				loc = Math.ceil(obj.scrollTop);
				target = parseInt(json[i]);

			}else{
				var target = json[i];
				var loc = parseInt(getCSS(obj,i))||0;
			}
			var speed = (target-loc)*0.2;
			speed = (target>=loc)?Math.ceil(speed):Math.floor(speed);

			if(i === 'opacity'){
				obj.style.opacity = (loc+speed)/100;
				obj.style.filter="alpha(opacity:"+(loc+speed)+")";
			}else{
				obj.style[i] =loc+speed+'px';
			}
			if(loc!==target){
				flag = false;
			}
		}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},20);
}

function getCSS(obj,attr){
	 if(obj.currentStyle){//IE 
		return obj.currentStyle[attr];
	}
	else{
		return window.getComputedStyle(obj,null)[attr];
	}
}