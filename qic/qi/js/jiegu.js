(function () {
    var didian = localStorage.getItem('didian');
    var yi = localStorage.getItem('yi');
    var ma = localStorage.getItem('ma');
    if (didian == 'fx') {
        if (yi == 'cc') {
            $('.sorry').css('display', 'block')
            $('.sorrys').css('display', 'none')
        }else{
            $('.sorry').css('display', 'none')
            $('.sorrys').css('display', 'bolck')
        }
    }
    else {
        $('.sorry').css('display', 'block')
        $('.sorrys').css('display', 'none')
    }
    if (ma == '5') {
        $('.sorrys').css('display', 'block')
        $('.sorry').css('display', 'none')
    }else{
        $('.sorrys').css('display', 'none')
        $('.sorry').css('display', 'bolck')
    }
})();