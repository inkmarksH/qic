(function () {
    var ma = localStorage.getItem('ma');
    if(ma!='5'){
        $('.yuan').html(ma);
    }
    console.log(ma);
    
    switch (ma) {
        case '10':
            $('.jp').css('display', 'block')
            break;
        case '20':
            $('.jp1').css('display', 'block')
            break;
        case '30':
            $('.jp11').css('display', 'block')
            break;
        default:
                window.location.href = './jieg.html'
            break;
    }
})();
(function () {
    $('.tj').on('click', () => {
        var telv = $('.tels').val();
        var phoneReg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/;
        if (!phoneReg.test(telv)) {
            alert('请输入正确手机号')
        }else{
            $('.mark').css('display', 'block');
            $('.qxian').css('display', 'block');
        }
    })
})();
(function () {
    $('.mark').on('click', function () {
        $('.mark').css('display', 'none');
        $('.sm').css('display', 'none');
        $('.qxian').css('display', 'none');
        $('.users').val('');
        $('.tels').val('');
    })
    $('.tjs').on('click', function () {
        $('.mark').css('display', 'none');
        $('.sm').css('display', 'none');
        $('.qxian').css('display', 'none');
        $('.users').val('');
        $('.tels').val('');
        window.location.href='./index.html'
    })
})();