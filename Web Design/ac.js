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
let smallImg = document.querySelector('.small-image');
// Image urls into variables

let ac1 = '../wetransfer_website-portfolio-for-release_2023-02-09_1913/Website portfolio for release/A&C website/a&c-02 cropped.jpg';
let ac2 = '../wetransfer_website-portfolio-for-release_2023-02-09_1913/Website portfolio for release/A&C website/a&c-01 cropped.jpg';
let ac3 = '../wetransfer_website-portfolio-for-release_2023-02-09_1913/Website portfolio for release/A&C website/A&C about cropped.png';

let pic1 = ac1;
let pic2 = ac2;
let pic3 = ac3;
let pic4;

let ci1 = '../wetransfer_website-portfolio-for-release_2023-02-09_1913/Website portfolio for release/cil website pics/cil 1.jpg';
let ci2 = '../wetransfer_website-portfolio-for-release_2023-02-09_1913/Website portfolio for release/cil website pics/cil2.jpg';
let ci3 = '../wetransfer_website-portfolio-for-release_2023-02-09_1913/Website portfolio for release/cil website pics/cil3.jpg';
let ci4 = '../wetransfer_website-portfolio-for-release_2023-02-09_1913/Website portfolio for release/cil website pics/cil4.jpg';

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
// This part will be related to he link div which is the div at the righ corner

let x = 0;

let container = document.querySelector('.section1');

let linkDiv = document.querySelector('.link-div');

let product = 'Products';
let artist = 'Artists';

function switchToCil() {
	container.style.gridTemplateColumns = '200px 200px 200px 200px';
	text2.textContent = product;
	smallImg.src = ac1;
	text4.textContent = 'Contact';

	pic1 = ci1;
	pic2 = ci2;
	pic3 = ci3;
	pic4 = ci4;
	bigImg.src = ci1;
	handleClick(circle1);
}
function switchToAC() {
	text2.textContent = artist;
	smallImg.src = '../wetransfer_website-portfolio-for-release_2023-02-09_1913/Website portfolio for release/cil website pics/CIL.jpg';
	text4.textContent = '';
	container.style.gridTemplateColumns = '200px 200px 200px';
	pic1 = ac1;
	pic2 = ac2;
	pic3 = ac3;
	pic4 = ci4;
	bigImg.src = ac1;
	handleClick(circle1);
}
if (page === 'cil') {
	switchToCil();
	console.log(x);
	x = 1;
}
linkDiv.addEventListener('click', function () {
	if (x === 0) {
		switchToCil();
		console.log(x);
		x = 1;
	} else {
		switchToAC();
		console.log(x);
		x = 0;
	}
});
