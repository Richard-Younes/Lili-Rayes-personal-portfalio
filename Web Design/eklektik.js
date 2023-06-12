let phone = document.querySelector('.phone-img');
let vid1 = document.querySelector('.video1');
let isVideoPlaying = false;

phone.addEventListener('click', () => {
	if (isVideoPlaying) {
		vid1.pause();
		isVideoPlaying = false;
	} else {
		vid1.play();
		isVideoPlaying = true;
	}
});

vid1.addEventListener('play', () => {
	isVideoPlaying = true;
});

vid1.addEventListener('pause', () => {
	isVideoPlaying = false;
});
