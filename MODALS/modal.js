$(document).ready(() =>{
	$('.open').click(() =>{
	$('.content').show(500);
	$('.open').hide();
	});

	$('.btn').click(() =>{
	$('.content').hide(500);
	$('.open').show();
	});

});
