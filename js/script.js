$(document).ready(function() {

var $carousel = $('#myCarousel');
$carousel.carousel();




$carousel.bind('slide.bs.carousel', function (e) {
    var broj = $(".item:last-child").text();
    broj = broj.replace(/\s/g, '');

    if(broj > 1000){
      broj = broj.substring(0,2);
    }else{
      broj = broj[0];
    }

    $( ".nestotamo" ).text(broj);
});

var broj = 1;



$('.pff.left').click(function() {
  $('#myCarousel').carousel('prev');

  var no = $(".nestotamo").text();

  if(broj == 1){
    broj = no;
  }else{
    broj--;
  }


  if( 1 == broj){
      $(".para").css("display", "none");
      $(".para1").fadeIn();
      
  }
  if( 2 == broj){
      $(".para").css("display", "none");
      $(".para2").fadeIn();
  }
  if( 3 == broj){
      $(".para").css("display", "none");
      $(".para3").fadeIn();
  }
  if( 4 == broj){
      $(".para").css("display", "none");
      $(".para4").fadeIn();
  }
  if( 5 == broj){
      $(".para").css("display", "none");
      $(".para5").fadeIn();
  }
  if( 6 == broj){
      $(".para").css("display", "none");
      $(".para6").fadeIn();
  }
  if( 7 == broj){
      $(".para").css("display", "none");
      $(".para7").fadeIn();
  }
  if( 8 == broj){
      $(".para").css("display", "none");
      $(".para8").fadeIn();
  }
  if( 9 == broj){
      $(".para").css("display", "none");
      $(".para9").fadeIn();
  }
  if( 10 == broj){
      $(".para").css("display", "none");
      $(".para10").fadeIn();
  }
  if( 11 == broj){
      $(".para").css("display", "none");
      $(".para11").fadeIn();
  }
  if( 12 == broj){
      $(".para").css("display", "none");
      $(".para12").fadeIn();
  }
  if( 13 == broj){
      $(".para").css("display", "none");
      $(".para13").fadeIn();
  }
  if( 14 == broj){
      $(".para").css("display", "none");
      $(".para14").fadeIn();
  }
  if( 15 == broj){
      $(".para").css("display", "none");
      $(".para15").fadeIn();
  }
  if( 16 == broj){
      $(".para").css("display", "none");
      $(".para16").fadeIn();
  }
  if( 17 == broj){
      $(".para").css("display", "none");
      $(".para17").fadeIn();
  }
  if( 18 == broj){
      $(".para").css("display", "none");
      $(".para18").fadeIn();
  }
  if( 19 == broj){
      $(".para").css("display", "none");
      $(".para19").fadeIn();
  }
  if( 20 == broj){
      $(".para").css("display", "none");
      $(".para20").fadeIn();
  }
  if( 21 == broj){
      $(".para").css("display", "none");
      $(".para21").fadeIn();
  }
});



$('.pff.right').click(function() {
    $('#myCarousel').carousel('next');

    var no = $(".nestotamo").text();

    if(broj == no){
      broj = 1;
    }else{
      broj++;
    }

    if( 1 == broj){
        $(".para").css("display", "none");
        $(".para1").fadeIn();
        
    }
    if( 2 == broj){
        $(".para").css("display", "none");
        $(".para2").fadeIn();
    }
    if( 3 == broj){
        $(".para").css("display", "none");
        $(".para3").fadeIn();
    }
    if( 4 == broj){
        $(".para").css("display", "none");
        $(".para4").fadeIn();
    }
    if( 5 == broj){
        $(".para").css("display", "none");
        $(".para5").fadeIn();
    }
    if( 6 == broj){
        $(".para").css("display", "none");
        $(".para6").fadeIn();
    }
    if( 7 == broj){
        $(".para").css("display", "none");
        $(".para7").fadeIn();
    }
    if( 8 == broj){
        $(".para").css("display", "none");
        $(".para8").fadeIn();
    }
    if( 9 == broj){
        $(".para").css("display", "none");
        $(".para9").fadeIn();
    }
    if( 10 == broj){
        $(".para").css("display", "none");
        $(".para10").fadeIn();
    }
    if( 11 == broj){
        $(".para").css("display", "none");
        $(".para11").fadeIn();
    }
    if( 12 == broj){
        $(".para").css("display", "none");
        $(".para12").fadeIn();
    }
    if( 13 == broj){
        $(".para").css("display", "none");
        $(".para13").fadeIn();
    }
    if( 14 == broj){
        $(".para").css("display", "none");
        $(".para14").fadeIn();
    }
    if( 15 == broj){
        $(".para").css("display", "none");
        $(".para15").fadeIn();
    }
    if( 16 == broj){
        $(".para").css("display", "none");
        $(".para16").fadeIn();
    }
    if( 17 == broj){
        $(".para").css("display", "none");
        $(".para17").fadeIn();
    }
    if( 18 == broj){
        $(".para").css("display", "none");
        $(".para18").fadeIn();
    }
    if( 19 == broj){
        $(".para").css("display", "none");
        $(".para19").fadeIn();
    }
    if( 20 == broj){
        $(".para").css("display", "none");
        $(".para20").fadeIn();
    }
    if( 21 == broj){
        $(".para").css("display", "none");
        $(".para21").fadeIn();
    }
});



});