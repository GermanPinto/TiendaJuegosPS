$(function() {

    //desplazamiento hacia otra sección, en este caso hacia el nav
    $("#idIrArriba").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function() {
                window.location.hash = hash;
            });
        }
    });

    //globo popover en imágenes
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    //globo tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('#tipoJuegos p').on('dblclick', function() {
        $(this).css({
            "color": "#41ead4"
        });
    });

    //forma 1
    /* $('.desaparecer').click(function() {
         $('#seccion-grilla img').toggle();
     });*/

    //forma 2
    $('.desaparecer').click(function() {
        // alert("aparece/desaparece");
        $('.miToggle').toggle();
    });

    //$('#miElemnto').click(cuando yo haga clik al elemento con el id #mielemento, que se ejecute lo de acá adentro);
    //$('#miElemnto').click(function(){ejecutame todo lo que está entre estas llaves});
    /* $('#miElemntoBtn').click(function(){
        $('.misElementos').toggle();//el toggle va a ser una combinación de hide con show 
     });*/

})