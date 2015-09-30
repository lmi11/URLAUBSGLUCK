var count = 1;
var count2 = 1;
var count3 = 1;

$(document).ready(function() {
	// Заглушка для IE8 та нижче
	var IE='\v'=='v';
	if (IE) {
		$(".wrapper").hide();
		alert("Site doesn't support this version of Internet Explorer !!!");
		$("body").html('<div class="ie-not-support"><p><img src="img/ie.png" alt="ie-not-support"></p>Site doesn&rsquo;t support this version of Internet Explorer!</p><p>Upgrade here - <a href="http://windows.microsoft.com/ru-ru/internet-explorer/download-ie">http://windows.microsoft.com/internet-explorer/download-ie</a></p></div>');
	}
	// Слайдер#1
	$('#1block__info1').addClass('show-cell').removeClass('hide');

	$('#arrows__b1 .steps__blocks__right__arrow').on('click', function(){
		$('#1block__info' + count).addClass('hide').removeClass('show-cell');
		$('#1block__info' + ++count).addClass('show-cell').removeClass('hide');
		if(count == 4) { count = 1; $('#1block__info1').addClass('show-cell').removeClass('hide'); }
	});

	$('#arrows__b1 .steps__blocks__left__arrow').on('click', function(){
		$('#1block__info' + count).addClass('hide').removeClass('show-cell').removeClass('hide');
		$('#1block__info' + --count).addClass('show-cell').removeClass('hide');
		if(count == 0) { count = 3; $('#1block__info3').addClass('show-cell').removeClass('hide') }
	});
	// Слайдер#2
	$('#2block__info1').addClass('show-cell').removeClass('hide');

	$('#arrows__b2 .steps__blocks__right__arrow').on('click', function(){
		$('#2block__info' + count2).addClass('hide').removeClass('show-cell');
		$('#2block__info' + ++count2).addClass('show-cell').removeClass('hide');
		if(count2 == 4) { count2 = 1; $('#2block__info1').addClass('show-cell').removeClass('hide'); }
	});

	$('#arrows__b2 .steps__blocks__left__arrow').on('click', function(){
		$('#2block__info' + count2).addClass('hide').removeClass('show-cell').removeClass('hide');
		$('#2block__info' + --count2).addClass('show-cell').removeClass('hide');
		if(count2 == 0) { count2 = 3; $('#2block__info3').addClass('show-cell').removeClass('hide') }
	});
	// Слайдер#3
	$('#3block__info1').addClass('show-cell').removeClass('hide');

	$('#arrows__b3 .steps__blocks__right__arrow').on('click', function(){
		$('#3block__info' + count3).addClass('hide').removeClass('show-cell');
		$('#3block__info' + ++count3).addClass('show-cell').removeClass('hide');
		if(count3 == 4) { count3 = 1; $('#3block__info1').addClass('show-cell').removeClass('hide'); }
	});

	$('#arrows__b3 .steps__blocks__left__arrow').on('click', function(){
		$('#3block__info' + count3).addClass('hide').removeClass('show-cell').removeClass('hide');
		$('#3block__info' + --count3).addClass('show-cell').removeClass('hide');
		if(count3 == 0) { count3 = 3; $('#3block__info3').addClass('show-cell').removeClass('hide') }
	});
});