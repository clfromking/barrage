var content = document.getElementsByClassName('content')[0];
var input = document.getElementsByClassName('input')[0];
var btn = document.getElementsByClassName('btn')[0];

function init() {
    sendBarrage();
    clickInput();
    clickKey();
}
init();

function clickInput() {
    input.onclick = function () {
        input.value = '';
    }
}

function clickKey() {
    document.onkeydown = function(evt) {
        var event = evt || window.event;
        if(event.keyCode == 13){
            var e = document.createEvent('UIEvents'); //创建事件对象，代替鼠标点击
            e.initEvent('click', true, true); //初始化事件对象，要带上事件类型
            btn.dispatchEvent(e); //触发事件 什么元素会触发此事件
        }
    }
}

function sendBarrage() {
    btn.onclick = function () {
        if(input.value.trim() == ''){
            alert('弹幕内容不能为空');
            return;
        }
        var span = document.createElement('span');
        span.innerText = input.value;
        var fontSize = parseInt((Math.random() * 16) + 16);
        var top = Math.random() * content.offsetHeight - fontSize;
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var left = 1000;

        span.style.color = color;
        span.style.fontSize = fontSize + 'px';
        span.style.marginTop = top + 'px';
        
        var timer = setInterval(function() {
            span.style.marginLeft = left + 'px';
            content.appendChild(span)
            if(left > -span.offsetWidth) {
                left -= 10;
                span.style.marginLeft = left + 'px';
            }else{
                clearInterval(timer);
                span.parentNode.removeChild(span);
            }
        }, 100)
    }
}

