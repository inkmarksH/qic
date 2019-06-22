(function () {
    var s =localStorage.getItem('mas')
    $('.maz').html(s);
    $('.kai').on('click',()=>window.location.href='./qic.html')
})();