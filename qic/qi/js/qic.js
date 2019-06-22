(function () {
    $('.hd a').on('click', function () {
        $('.mark').css('display', 'block');
        $('.sm').css('display', 'block');
    })
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
    $('.chou').on('click', function () {
        $('.mark').css('display', 'none');
        $('.sm').css('display', 'none');
    })
})();
(function () {
    $('.tj').on('click', () => {
        var userv = $('.users').val();
        var telv = $('.tels').val();
        var phoneReg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/;
        var nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
        if (!nameReg.test(userv)) {
            alert('请输入正确中文名字')
        }
        if (!phoneReg.test(telv)) {
            alert('请输入正确手机号')
        }
        if (nameReg.test(userv)&&phoneReg.test(telv)) {
            $('.mark').css('display', 'block');
            $('.qxian').css('display', 'block');
        }
    })
})();