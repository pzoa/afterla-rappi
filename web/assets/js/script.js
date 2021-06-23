window.addEventListener('load', () => {

    setTimeout(carga, 2000); 

    function carga() {
        document.getElementById('preloader').className = 'hide';
        document.getElementById('rp__content').className = 'rp__content';
    }
    

});