$(document).on('ready', function() {

  var isChecked= $('.check').is(':checked');

  if(isChecked){
    $('p').show();
  }else{
    $('p').hide();
  }

  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".center").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".variable").slick({
    dots: true,
    infinite: true,
    variableWidth: true
  });

   $('select').select2();


   $('.check').on('click',function(){
      isChecked= $(this).is(':checked');

      if (isChecked) {
          $('p').slideDown();
      } else {
          $('p').slideUp();
     }
   });

   $("input[type=radio]").on("change",function(){

    var sex=$("input[type=radio][name=sesso]:checked").val();

      if(sex==='uomo'){
        $('.iniet').text('Sono Uomo');
      }else {
        $('.iniet').text('Sono Donna');
      }
    });

});
