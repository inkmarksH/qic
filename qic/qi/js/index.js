(function() {
    $('.hd a').on('click',function(){
        $('.mark').css('display','block');
        $('.sm').css('display','block');
    })
    $('.mark').on('click',function(){
        $('.mark').css('display','none');
        $('.sm').css('display','none');
    })
    $('.chou').on('click',function(){
        $('.mark').css('display','none');
        $('.sm').css('display','none');
    })
})();
(function() {
    $('.xc a').on('click',function(){
        $('.mark').css('display','block');
        $('.qxian').css('display','block');
    })
    $('.mark').on('click',function(){
        $('.mark').css('display','none');
        $('.qxian').css('display','none');
    })
    $('.chong').on('click',function(){
        $('.mark').css('display','none');
        $('.qxian').css('display','none');
    })
    $('.right').on('click',function(){
        var didian = localStorage.getItem('didian');
        var yi = localStorage.getItem('yi');
        console.log(didian,yi);
        
        if(yi==null){
            localStorage.setItem('didian','xc');
            window.location.href='./xLottery.html' 
        }else if(didian!=null&&yi!=null){
            window.location.href='./jieg.html' 
        } else{
            window.location.href='./jieg.html' 
        }    
    })
    $('.fx').on('click',function(){
        var didian = localStorage.getItem('didian');
        var yi = localStorage.getItem('yi');
        console.log(didian,yi);

        if(yi==null){
            localStorage.setItem('didian','fx');
            window.location.href='./xLottery.html' 
        }else if(didian!=null&&yi!=null){
            window.location.href='./jieg.html' 
        }else{
            window.location.href='./jieg.html' 
        }    
    })
})()