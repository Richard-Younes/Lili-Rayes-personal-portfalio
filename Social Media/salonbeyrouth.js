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
