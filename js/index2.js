let val;
let flag = 0;
function init() {
    sendBarrage();
    keyDown();
    clickInput();
}
init();

function clickInput () {
    $('.input').on('click', function() {
        $(this).val('');
    })
}

function keyDown() {
    $(document).on('keydown', function(e) {
        if(e.keyCode == 13){
            $('.btn').trigger('click')
        }
    })
}

function sendBarrage() {
    $('.btn').on('click', function() {
        if($('.input').val().trim() == ''){
            alert('输入内容不能为空')
            return;
        }
        flag++;
        val = $('.input').val();
        var $val = $('<span class="b' + flag + '">' + val + '</span>');
        var fontSize = Math.random() * 16 + 16;
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var left = '1000px';
        var top = Math.random() * ($('.content').height() - 50) + 'px';
        $val.css({
            fontSize : fontSize,
            color : color,
            top : top,
            left : left
        })
        $('.content').append($val);
        var barrageWidth =  $('.content .b' + flag).width()
        $('.content .b' + flag).animate({
            left : -barrageWidth
        }, 10000, 'linear', function() {
           $(this).remove()
        })
    })
}
