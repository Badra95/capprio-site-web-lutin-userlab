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

$('.number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
