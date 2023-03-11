$(function(){
    $('section.categorias').click(function(){
        var listaMenu = $('section.categorias ul');

        if(listaMenu.is(':hidden') == true){
            var icone = $('.sanduiche').find('i');
            icone.removeClass('fa-bars');
            icone.addClass('fa-xmark');
            listaMenu.slideToggle();
        }
        else{
            var icone = $('.sanduiche').find('i');
            icone.removeClass('fa-xmark');
            icone.addClass('fa-bars');
            listaMenu.slideToggle();    
       }
    })
})
//<i class="fa-solid fa-xmark"></i>
//<i class="fa-solid fa-bars"></i>