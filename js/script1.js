//$('#header').before("<h1>prima di header</h1>");
//$('.prime-day').appendTo('.hero');

$('.prime-day').addClass('border-red');

//$('.hero a').attr('href','https://www.google.it').attr('target','_blanck');

$('.logo').on('click',function(){
    $(this).addClass('border-red');
});

$('.prime-day').on('click',function(){
    $(this).removeClass('border-red');
});

$('.logo').on('click',function(){
    function complete(){
        $('.prime-day').fadeOut(1000).fadeIn(1000);
    }
    $(this).fadeOut(1000,"linear").fadeIn(1000,"linear",complete);
});


  $('a').click(function(event){
    event.preventDefault();

    $('#text').append('<div class="fix"><button id="button-close">X</button><img src="img/scarpefix.jpg"/></div>');

    $('button').on('click',function(){
        $('.fix').fadeOut("slow", function() { $('.fix').remove(); });
      });
    });
