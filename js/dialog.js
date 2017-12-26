function showMsg(obj){
    this.obj = obj;
    this.btn = document.getElementById("btn");
    this.btns = document.getElementsByTagName("button");
    this.wrap = document.querySelectorAll(".wrap")[0];
    this.Alert();
}
showMsg.prototype = {
    constructor:showMsg,
    Alert:function(){
        var that=this;
        this.btn.onclick=function(){
            that.btn.style.display="none";
            var str = '';
            str += `<div id="log">
                    <h1>${that.obj.title}</h1>
                    <p>${that.obj.content}</p>
                    <h2><button id="btn1">${that.obj.buttons[0]}</button><button id="btn2">${that.obj.buttons[1]}</button></h2>
            </div>`;
            that.wrap.style.display="block";
            that.wrap.innerHTML = str;
            that.btns1 = document.getElementById("btn1");
            that.btns2 = document.getElementById("btn2");
            that.log = document.getElementById("log")
            that.btns1.onclick=function(){
                that.wrap.removeChild(that.log);
                that.wrap.style.display="none";
                that.btn.style.display="block";
            }
            that.btns2.onclick=function(){
                that.wrap.removeChild(that.log);
                that.wrap.style.display="none";
                that.btn.style.display="block";
            }
        }
    }
}
new showMsg({
    title:"Session",
    content:"How  are you",
    buttons:["fine","close"],
    successCallback:function(){}, // 点击确认按钮的回调函数
    cancelCallback:function(){} // 点击取消按钮的回调函数
})