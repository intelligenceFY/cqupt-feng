document.querySelector("body").insertAdjacentHTML("afterBegin","<div></div>");

var obj = document.querySelector("div");
var xhr = new XMLHttpRequest();
//定义文本样式
obj.style.cssText = "font-size:20px;margin-top:50px; font-family:STHeiti;"
//连接服务器
xhr.open("GET","http://rap.taobao.org/mockjsdata/22995/AjaxTask",true);

xhr.onload = function(){
// var data = JSON.parse(this.responseText);
var output = " ";
output += `
   <div class="people">
   <img src="http://www.jf258.com/uploads/2014-08-25/131300266.jpg" style="float:left;">
   <div class="word"  style="float:left;margin-left:80px;">
	   <P>姓名：张三</p>
	   <P>学号：2016211000</p>
	   <P>学校：cqupt</p>
	   <P>课程：</p>
	   <li>C语言</li>
	   <li>C++</li>
	   <li>JAVA</li>
   </diV>
   </diV>
          `;
obj.innerHTML = output;
}
xhr.send();