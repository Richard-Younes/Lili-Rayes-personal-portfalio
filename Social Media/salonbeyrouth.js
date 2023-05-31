const instaStory = document.querySelector('.insta-story-img');
let isDown = false;
let startX;
let scrollLeft;

instaStory.addEventListener('mousedown', event => {
	isDown = true;
	instaStory.classList.add('active');
	startX = event.pageX - instaStory.offsetLeft;
	scrollLeft = instaStory.scrollLeft;
});

instaStory.addEventListener('mouseleave', () => {
	isDown = false;
	instaStory.classList.remove('active');
});
instaStory.addEventListener('mouseup', () => {
	isDown = false;
	instaStory.classList.remove('active');
});

instaStory.addEventListener('mousemove', event => {
	if (!isDown) return;
	event.preventDefault();
	const x = event.pageX - instaStory.offsetLeft;
	const walk = x - startX; // increase the number to increase the speed
	instaStory.scrollLeft = scrollLeft - walk;
});

// This partis for the insta post
const instaPost = document.querySelector('.insta-post');

instaPost.addEventListener('mousedown', event => {
	isDown = true;
	instaPost.classList.add('active');
	startX = event.pageX - instaPost.offsetLeft;
	scrollLeft = instaPost.scrollLeft;
});

instaPost.addEventListener('mouseleave', () => {
	isDown = false;
	instaPost.classList.remove('active');
});
instaPost.addEventListener('mouseup', () => {
	isDown = false;
	instaPost.classList.remove('active');
});

instaPost.addEventListener('mousemove', event => {
	if (!isDown) return;
	event.preventDefault();
	const x = event.pageX - instaPost.offsetLeft;
	const walk = x - startX; // increase the number to increase the speed
	instaPost.scrollLeft = scrollLeft - walk;
});

// The next part is for the facebook post part

const fbPost = document.querySelector('.facebook-post');

fbPost.addEventListener('mousedown', event => {
	isDown = true;
	fbPost.classList.add('active');
	startX = event.pageX - fbPost.offsetLeft;
	scrollLeft = fbPost.scrollLeft;
});

fbPost.addEventListener('mouseleave', () => {
	isDown = false;
	fbPost.classList.remove('active');
});
fbPost.addEventListener('mouseup', () => {
	isDown = false;
	fbPost.classList.remove('active');
});

fbPost.addEventListener('mousemove', event => {
	if (!isDown) return;
	event.preventDefault();
	const x = event.pageX - fbPost.offsetLeft;
	const walk = x - startX; // increase the number to increase the speed
	fbPost.scrollLeft = scrollLeft - walk;
});

// This part is for the animation of the right side navbar
const dots = document.querySelector('.dots1');
const links = document.querySelector('.links');

let isHidden = false;

dots.addEventListener('click', function () {
	dots.classList.toggle('rotate');
	if (isHidden) {
		links.classList.remove('hide');
		isHidden = false;
	} else {
		links.classList.add('hide');
		isHidden = true;
	}
});
// This is for the first swiper

let monthlyImg1 = document.querySelector('.mob-monthly-img1');
let monthlyImg2 = document.querySelector('.mob-monthly-img2');
let dot1 = document.querySelector('.swip-dot1');
let dot2 = document.querySelector('.swip-dot2');

monthlyImg1.addEventListener('click', function () {
	monthlyImg2.classList.toggle('show');
	if (monthlyImg2.classList.contains('show')) {
		dot1.style.backgroundColor = '#db0047';
		dot2.style.backgroundColor = '#f28531';
	} else {
		dot1.style.backgroundColor = '#f28531';
		dot2.style.backgroundColor = '#db0047';
	}
});

monthlyImg2.addEventListener('click', function () {
	monthlyImg2.classList.toggle('show');
	if (monthlyImg2.classList.contains('show')) {
		dot1.style.backgroundColor = '#db0047';
		dot2.style.backgroundColor = '#f28531';
	} else {
		dot1.style.backgroundColor = '#f28531';
		dot2.style.backgroundColor = '#db0047';
	}
});

// The first swipe animation is done using the code above

let img3 = document.querySelector('.mob-monthly-img3');
let img4 = document.querySelector('.mob-monthly-img4');
let img5 = document.querySelector('.mob-monthly-img5');
let img6 = document.querySelector('.mob-monthly-img6');
let img7 = document.querySelector('.mob-monthly-img7');
let img8 = document.querySelector('.mob-monthly-img8');
let img9 = document.querySelector('.mob-monthly-img9');
let img10 = document.querySelector('.mob-monthly-img10');

let dot3 = document.querySelector('.swip-dot3');
let dot4 = document.querySelector('.swip-dot4');
let dot5 = document.querySelector('.swip-dot5');
let dot6 = document.querySelector('.swip-dot6');
let dot7 = document.querySelector('.swip-dot7');
let dot8 = document.querySelector('.swip-dot8');
let dot9 = document.querySelector('.swip-dot9');
let dot10 = document.querySelector('.swip-dot10');

let mobInstaStory = document.querySelector('.mob-insta-div');

mobInstaStory.addEventListener('click', function () {
	if (img3.classList.contains('show')) {
		img3.classList.remove('show');
		img4.classList.add('show');
		dot3.style.backgroundColor = '#db0047';
		dot4.style.backgroundColor = '#f28531';
		img3.style.zIndex = '-1';
	} else if (img4.classList.contains('show')) {
		img4.classList.remove('show');
		img5.classList.add('show');
		dot4.style.backgroundColor = '#db0047';
		dot5.style.backgroundColor = '#f28531';

		img4.style.left = '-70%';
		img4.style.zIndex = '-1';
		img5.style.left = '-130%';
		img6.style.left = '-190%';
		img7.style.left = '-250%';
	} else if (img5.classList.contains('show')) {
		img5.classList.remove('show');
		img6.classList.add('show');
		dot5.style.backgroundColor = '#db0047';
		dot6.style.backgroundColor = '#f28531';

		img5.style.left = '-140%';
		img5.style.zIndex = '1';
		img6.style.left = '-200%';
		img7.style.left = '-260%';
		img8.style.left = '-310%';
	} else if (img6.classList.contains('show')) {
		img6.classList.remove('show');
		img7.classList.add('show');
		dot6.style.backgroundColor = '#db0047';
		dot7.style.backgroundColor = '#f28531';

		img6.style.left = '-210%';
		img6.style.zIndex = '1';
		img7.style.left = '-270%';
		img8.style.left = '-330%';
		img9.style.left = '-380%';
	} else if (img7.classList.contains('show')) {
		img7.classList.remove('show');
		img8.classList.add('show');
		dot7.style.backgroundColor = '#db0047';
		dot8.style.backgroundColor = '#f28531';

		img7.style.left = '-280%';
		img7.style.zIndex = '1';
		img8.style.left = '-340%';
		img9.style.left = '-400%';
		img10.style.left = '-460%';
	} else if (img8.classList.contains('show')) {
		img8.classList.remove('show');
		img9.classList.add('show');
		dot8.style.backgroundColor = '#db0047';
		dot9.style.backgroundColor = '#f28531';

		img8.style.zIndex = '1';
	} else if (img9.classList.contains('show')) {
		img9.classList.remove('show');
		img10.classList.add('show');
		dot9.style.backgroundColor = '#db0047';
		dot10.style.backgroundColor = '#f28531';

		img9.style.zIndex = '1';
		img10.style.zIndex = '2';
	} else if (img10.classList.contains('show')) {
		img10.classList.remove('show');
		img3.classList.add('show');
		dot10.style.backgroundColor = '#db0047';
		dot3.style.backgroundColor = '#f28531';

		img3.style.left = '0';
		img4.style.left = '-60%';
		img5.style.left = '-120%';
		img6.style.left = '-180%';
		img7.style.left = '-240%';
		img8.style.left = '-300%';
		img9.style.left = '-360%';
		img10.style.left = '-420%';

		img3.style.zIndex = '7';
		img4.style.zIndex = '6';
		img5.style.zIndex = '5';
		img6.style.zIndex = '4';
		img7.style.zIndex = '3';
		img8.style.zIndex = '2';
		img9.style.zIndex = '1';
		img10.style.zIndex = '0';
	}
});

// The Facebook swipe animation is done using the code above

let fb1 = document.querySelector('.mob-fb-img1');
let fb2 = document.querySelector('.mob-fb-img2');
let fb3 = document.querySelector('.mob-fb-img3');
let fb4 = document.querySelector('.mob-fb-img4');
let fb5 = document.querySelector('.mob-fb-img5');
let fb6 = document.querySelector('.mob-fb-img6');
let fb7 = document.querySelector('.mob-fb-img7');
let fb8 = document.querySelector('.mob-fb-img8');

let fb_dot1 = document.querySelector('.fb-dot3');
let fb_dot2 = document.querySelector('.fb-dot4');
let fb_dot3 = document.querySelector('.fb-dot5');
let fb_dot4 = document.querySelector('.fb-dot6');
let fb_dot5 = document.querySelector('.fb-dot7');
let fb_dot6 = document.querySelector('.fb-dot8');
let fb_dot7 = document.querySelector('.fb-dot9');
let fb_dot8 = document.querySelector('.fb-dot10');

let mobFacebook = document.querySelector('.mob-facebook-div');

mobFacebook.addEventListener('click', function () {
	if (fb1.classList.contains('show')) {
		fb1.classList.remove('show');
		fb2.classList.add('show');
		fb_dot1.style.backgroundColor = '#db0047';
		fb_dot2.style.backgroundColor = '#f28531';
		fb1.style.zIndex = '1';
		fb2.style.left = '-90%';
	} else if (fb2.classList.contains('show')) {
		fb2.classList.remove('show');
		fb3.classList.add('show');
		fb_dot2.style.backgroundColor = '#db0047';
		fb_dot3.style.backgroundColor = '#f28531';

		fb2.style.zIndex = '1';
		fb3.style.left = '-180%';
	} else if (fb3.classList.contains('show')) {
		fb3.classList.remove('show');
		fb4.classList.add('show');
		fb_dot3.style.backgroundColor = '#db0047';
		fb_dot4.style.backgroundColor = '#f28531';

		fb3.style.zIndex = '1';
		fb4.style.left = '-270%';
	} else if (fb4.classList.contains('show')) {
		fb4.classList.remove('show');
		fb5.classList.add('show');
		fb_dot4.style.backgroundColor = '#db0047';
		fb_dot5.style.backgroundColor = '#f28531';

		fb4.style.zIndex = '1';
		fb5.style.left = '-360%';
	} else if (fb5.classList.contains('show')) {
		fb5.classList.remove('show');
		fb6.classList.add('show');
		fb_dot5.style.backgroundColor = '#db0047';
		fb_dot6.style.backgroundColor = '#f28531';

		fb5.style.zIndex = '1';
		fb6.style.left = '-450%';
	} else if (fb6.classList.contains('show')) {
		fb6.classList.remove('show');
		fb7.classList.add('show');
		fb_dot6.style.backgroundColor = '#db0047';
		fb_dot7.style.backgroundColor = '#f28531';

		fb6.style.zIndex = '1';
		fb7.style.left = '-540%';
	} else if (fb7.classList.contains('show')) {
		fb7.classList.remove('show');
		fb8.classList.add('show');
		fb_dot7.style.backgroundColor = '#db0047';
		fb_dot8.style.backgroundColor = '#f28531';

		fb7.style.zIndex = '1';
		fb8.style.zIndex = '2';

		fb8.style.left = '-620%';
	} else if (fb8.classList.contains('show')) {
		fb8.classList.remove('show');
		fb1.classList.add('show');
		fb_dot8.style.backgroundColor = '#db0047';
		fb_dot1.style.backgroundColor = '#f28531';

		fb1.style.left = '0';
		fb2.style.left = '-80%';
		fb3.style.left = '-160%';
		fb4.style.left = '-240%';
		fb5.style.left = '-320%';
		fb6.style.left = '-400%';
		fb7.style.left = '-480%';
		fb8.style.left = '-560%';

		fb1.style.zIndex = '7';
		fb2.style.zIndex = '6';
		fb3.style.zIndex = '5';
		fb4.style.zIndex = '4';
		fb5.style.zIndex = '3';
		fb6.style.zIndex = '2';
		fb7.style.zIndex = '1';
		fb8.style.zIndex = '0';
	}
});

// The insta post swipe animation

let post1 = document.querySelector('.mob-post-img1');
let post2 = document.querySelector('.mob-post-img2');
let post3 = document.querySelector('.mob-post-img3');
let post4 = document.querySelector('.mob-post-img4');
let post5 = document.querySelector('.mob-post-img5');
let post6 = document.querySelector('.mob-post-img6');
let post7 = document.querySelector('.mob-post-img7');
let post8 = document.querySelector('.mob-post-img8');

let post_dot3 = document.querySelector('.post-dot3');
let post_dot4 = document.querySelector('.post-dot4');
let post_dot5 = document.querySelector('.post-dot5');
let post_dot6 = document.querySelector('.post-dot6');
let post_dot7 = document.querySelector('.post-dot7');
let post_dot8 = document.querySelector('.post-dot8');
let post_dot9 = document.querySelector('.post-dot9');
let post_dot10 = document.querySelector('.post-dot10');

let mobInstaPost = document.querySelector('.mob-post-div');

mobInstaPost.addEventListener('click', function () {
	if (post1.classList.contains('show')) {
		post1.classList.remove('show');
		post2.classList.add('show');
		post_dot3.style.backgroundColor = '#db0047';
		post_dot4.style.backgroundColor = '#f28531';
		post1.style.zIndex = '-1';
	} else if (post2.classList.contains('show')) {
		post2.classList.remove('show');
		post3.classList.add('show');
		post_dot4.style.backgroundColor = '#db0047';
		post_dot5.style.backgroundColor = '#f28531';

		post2.style.left = '-70%';
		post2.style.zIndex = '-1';
		post3.style.left = '-130%';
		post4.style.left = '-190%';
		post5.style.left = '-250%';
	} else if (post3.classList.contains('show')) {
		post3.classList.remove('show');
		post4.classList.add('show');
		post_dot5.style.backgroundColor = '#db0047';
		post_dot6.style.backgroundColor = '#f28531';

		post3.style.left = '-140%';
		post3.style.zIndex = '1';
		post4.style.left = '-200%';
		post5.style.left = '-260%';
		post6.style.left = '-310%';
	} else if (post4.classList.contains('show')) {
		post4.classList.remove('show');
		post5.classList.add('show');
		post_dot6.style.backgroundColor = '#db0047';
		post_dot7.style.backgroundColor = '#f28531';

		post4.style.left = '-210%';
		post4.style.zIndex = '1';
		post5.style.left = '-270%';
		post6.style.left = '-330%';
		post7.style.left = '-380%';
	} else if (post5.classList.contains('show')) {
		post5.classList.remove('show');
		post6.classList.add('show');
		post_dot7.style.backgroundColor = '#db0047';
		post_dot8.style.backgroundColor = '#f28531';

		post5.style.left = '-280%';
		post5.style.zIndex = '1';
		post6.style.left = '-340%';
		post7.style.left = '-400%';
		post8.style.left = '-460%';
	} else if (post6.classList.contains('show')) {
		post6.classList.remove('show');
		post7.classList.add('show');
		post_dot8.style.backgroundColor = '#db0047';
		post_dot9.style.backgroundColor = '#f28531';

		post6.style.zIndex = '1';
	} else if (post7.classList.contains('show')) {
		post7.classList.remove('show');
		post8.classList.add('show');
		post_dot9.style.backgroundColor = '#db0047';
		post_dot10.style.backgroundColor = '#f28531';

		post7.style.zIndex = '1';
		post8.style.zIndex = '2';
	} else if (post8.classList.contains('show')) {
		post8.classList.remove('show');
		post1.classList.add('show');
		post_dot10.style.backgroundColor = '#db0047';
		post_dot3.style.backgroundColor = '#f28531';

		post1.style.left = '0';
		post2.style.left = '-60%';
		post3.style.left = '-120%';
		post4.style.left = '-180%';
		post5.style.left = '-240%';
		post6.style.left = '-300%';
		post7.style.left = '-360%';
		post8.style.left = '-420%';

		post1.style.zIndex = '7';
		post2.style.zIndex = '6';
		post3.style.zIndex = '5';
		post4.style.zIndex = '4';
		post5.style.zIndex = '3';
		post6.style.zIndex = '2';
		post7.style.zIndex = '1';
		post8.style.zIndex = '0';
	}
});
