'use strict';

document.addEventListener('DOMContentLoaded', function () {
	// The circle variables
	let circle1 = document.querySelector('.circle1');
	let circle2 = document.querySelector('.circle2');
	let circle3 = document.querySelector('.circle3');
	let circle4 = document.querySelector('.circle4');

	// The text variables inside the circle variable
	let text1 = document.querySelector('.text1');
	let text2 = document.querySelector('.text2');
	let text3 = document.querySelector('.text3');
	let text4 = document.querySelector('.text4');

	let bigImg = document.querySelector('.big-img');
	// Image urls into variables

	let ac1 = '../Images/A&C website/a&c-02.jpg';
	let ac2 = '../Images/A&C website/a&c-01.jpg';
	let ac3 = '../Images/A&C website/A&C about.png';
	let pic1;
	let pic2;
	let pic3;
	let pic4;
	if (page === 'ac') {
		pic1 = ac1;
		pic2 = ac2;
		pic3 = ac3;
		pic4;
	}

	let ci1 = '../Images/cil website pics/cil homepage-01.jpg';
	let ci2 = '../Images/cil website pics/soap page-01.jpg';
	let ci3 = '../Images/cil website pics/about page-01.jpg';
	let ci4 = '../Images/cil website pics/contact page-01.jpg';
	if (page === 'cil') {
		pic1 = ci1;
		pic2 = ci2;
		pic3 = ci3;
		pic4 = ci4;
	}

	let cil = 'CIL';
	let ac = 'Arts & Culture';
	let linkText = document.querySelector('.cil-text');
	// The function that add and remove the class of circle and text for the animation
	function handleClick(event) {
		// removing the circle class
		circle1.classList.remove('circle');
		circle2.classList.remove('circle');
		circle3.classList.remove('circle');
		circle4.classList.remove('circle');

		if (event === circle1) {
			bigImg.src = pic1;
		}
		if (event === circle2) {
			bigImg.src = pic2;
		}
		if (event === circle3) {
			bigImg.src = pic3;
		}
		if (event === circle4) {
			bigImg.src = pic4;
		}
		// Removing the text class

		text1.classList.remove('circle-text');
		text2.classList.remove('circle-text');
		text3.classList.remove('circle-text');
		text4.classList.remove('circle-text');

		// Getting the child of the clicked element (Circle)
		let child = event.firstElementChild;

		// Adding the relevent classes to the clicked div and its child text
		child.classList.add('circle-text');
		event.classList.add('circle');
	}

	circle2.addEventListener('click', function () {
		handleClick(circle2);
	});

	circle1.addEventListener('click', function () {
		handleClick(circle1);
	});
	circle3.addEventListener('click', function () {
		handleClick(circle3);
	});

	circle4.addEventListener('click', function () {
		handleClick(circle4);
	});
});
