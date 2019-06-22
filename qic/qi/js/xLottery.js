(function () {
    $('.list li').on('click.a', function () {
        var yi = localStorage.getItem('yi');
        if (yi == null) {
            this.style.transition = '2s';
            this.style.transform = 'rotateY(720deg)';
            var didian = localStorage.getItem('didian');
            if (didian == 'xc') {
                var s='';
                s=fn(5);
                localStorage.setItem('mas', s);
                setTimeout(() => {
                    window.location.href = './xchou.html'
                    localStorage.setItem('yi', 'cc');
                }, 2000);
            } else {
                var s = '';
                s=fns();
                switch (s) {
                    case '10':
                            localStorage.setItem('ma', '10');
                        break;
                    case '20':
                            localStorage.setItem('ma', '20');
                        break;
                    case '30':
                            localStorage.setItem('ma', '30');
                        break;
                    default:
                            localStorage.setItem('ma', '5');
                        break;
                }
                setTimeout(() => {
                    window.location.href = './wchou.html'
                    localStorage.setItem('yi', 'cc');

                }, 2000);
            }
            $('.list li').off('click.a')
        } else {
            window.location.href = './jieg.html'
        }
    })

    function fn(n) {
        var s=''
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        for(var i=0; i<n; i++){
            s += str[getRandom(0, str.length - 1)];
        }
        return s;
    }

    function fns() {
        var arr = ['10', '20', '30']
        s = arr[getRandom(0, arr.length - 1)];
        return s;
    }
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
})()