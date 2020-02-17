window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};
pargn=function(){
	a=document.getElementsByTagName('iframe')
	a[0].src="home.html"
	a[0].style="position:absolute;top:1%;height:100%;width:100%"
}
stdlgin = function(){
var lea=document.createElement("iframe")
var divide=document.getElementById("polly")
divide.appendChild(lea)
pargn()
}

eptal=function(){
	document.location.href="https://eportal.futminna.edu.ng/accept/"
}

ereslt=function(){
	document.location.href="https://e-results.futminna.edu.ng"
}
pargnI=function(){
	a=document.getElementsByTagName('iframe')
	a[0].src="http://mail.futminna.edu.ng/"
	a[0].style="position:absolute;top:1%;height:100%;width:100%"
}
millogin = function(){
	var lea=document.createElement("iframe")
	var divide=document.getElementById("dolly")
	divide.appendChild(lea)
	pargnI()
}
	pargnII=function(){
	a=document.getElementsByTagName('iframe')
	a[0].src="https://www.futminna.edu.ng/images/ACADEMIC_CALENDAR_FOR_2018__2019_SESSION_AMENDED.pdf"
	a[0].style="position:absolute;top:1%;height:100%;width:100%"
}
calndar = function(){
	var lea=document.createElement("iframe")
	var divide=document.getElementById("molly")
	divide.appendChild(lea)
	pargnII()
}
admssions=function(d){
	var lea=document.createElement("iframe")
	var divide=document.getElementById("solly")
	divide.appendChild(lea)
	pargnIII(d)
}
pargnIII=function(b){
	a=document.getElementsByTagName('iframe')
	a[0].src=b
	a[0].style="position:absolute;top:1%;height:100%;width:100%"
}
loc=0

function auto() {
pic=["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpeg","pic6.jpeg","pic7.jpeg"]
document.all.picture.src=pic[loc]
loc=loc+1
if (loc==pic.length) {loc=0}
setTimeout("auto()",2000)
}

