$(document).ready(function () {
  var questionCount = 1;
  var animOk = 0;
  // var element = $("div.number")
  // var numero = element.text();

  // function numberAnimation(){
  // 	element.prop('contador',0).animate({
  // 		contador: numero
  // 	}, {
  // 		duration: 1000,
  // 		easing: 'swing',
  // 		step: function (now) {
  // 			// Verificar si es decimal o no
  // 			var numText = (numero % 1 !== 0 ? now.toFixed(1) : Math.round(now));
  // 			element.text(numText);
  // 		}
  // 	});
  // }

  // numberAnimation();

  // $('.number').each(function () {
  //     $(this).prop('Counter',0).animate({
  //         Counter: $(this).text()
  //     }, {
  //         duration: 4000,
  //         easing: 'swing',
  //         step: function (now) {
  //             $(this).text(Math.ceil(now));
  //         }
  //     });
  // });
  $('#touch').click(function(){
    $('.quest' + questionCount).addClass('d-none');
    $('.rep' + questionCount).addClass('d-none');
    questionCount++;
    if(questionCount > 8)
      questionCount = 1;
    $('.quest' + questionCount).removeClass('d-none');
    $('.rep' + questionCount).removeClass('d-none');
  });

function numberAnimat(classe, num, secondes){
  var i = 0;
  setInterval(function(){
    $('.' + classe).html(i);
    i++;
    if(i>=num){
      $('.' + classe).html(num);
    }
  },secondes);
}

function startAnim() {
  for(i = 1; i <= 6; i++) {
    $('.num' + i).html('0');
  }
}

  $(window).scroll(function() {
    if(animOk == 0)
    {
      var posScroll = $(window).scrollTop();
      var compteur = $(".num1").offset();
      if(posScroll > compteur.top - 455)
      {
        startAnim();

        numberAnimat("num1", 941, 5);
        numberAnimat("num2", 120, 30);
        numberAnimat("num3", 1, 30);
        numberAnimat("num4", 6, 600);
        numberAnimat("num5", 3, 1200);
        numberAnimat("num6", 3, 1200);
        animOk = 1;
      }
    }
  });

//   setInterval(function(){
//   i = 0;
//   $('.num2').html(i);
//   i++;
//   if(i>=120){
//   $('.num2').html('120');
//   }
//   },40);
//
//   setInterval(function(){
//   i = 0;
//   $('.num3').html(i);
//   i++;
//   if(i>=1){
//   $('.num3').html('1');
//   }
//   },40);
//
//   setInterval(function(){
//     i = 0;
//     $('.num4').html(i);
//     i++;
//     if(i>=6){
//      $('.num4').html('6');
//     }
//   },100);
//
//   setInterval(function(){
//   var i = 0;
//   $('.num5').html(i);
//   i++;
//   if(i>=3){
//   $('.num5').html('3');
//   }
//   },100);
//
//   setInterval(function(){
//   var i = 0;
//   $('.num6').html(i);
//   i++;
//   if(i>=3){
//   $('.num6').html('3');
//   }
//   },100);
});
