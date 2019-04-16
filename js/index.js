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
    document.onkeydown = function(e) {
        var event = evt || window.event;
        if(e.keyCode == 13){
            sendBarrage();
        }
    }
}

function sendBarrage() {
    btn.onclick = function () {
        if(input.value.trim() == ''){
            alert('弹幕内容不能为空');
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
            if(left > -span.offsetWidth) {
                left -= 10;
                span.style.marginLeft = left + 'px';
            }else{
                clearInterval(timer);
                span.parentNode.removeChild(span);
            }
        }, 100)
        content.appendChild(span)
    }
}

