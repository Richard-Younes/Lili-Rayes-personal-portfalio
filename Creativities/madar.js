// This section is for the mobile version Onclick event listener

// Get all the image elements
const images = document.querySelectorAll('.mob-img111');
images.forEach((image, index) => {
	image.addEventListener('click', function () {
		this.style.zIndex = '4';
		for (let i = 0; i < index; i++) {
			images[i].style.zIndex = i + 1;
		}
		// Loop through the images after the clicked image
		for (let i = index + 1; i < images.length; i++) {
			// Assign incremental z-index values
			images[i].style.zIndex = 4 - i;
		}
	});
});

// Get all the image elements
const images2 = document.querySelectorAll('.mob-img112');
images2.forEach((image, index) => {
	image.addEventListener('click', function () {
		this.style.zIndex = '4';
		for (let i = 0; i < index; i++) {
			images2[i].style.zIndex = i + 1;
		}
		// Loop through the images after the clicked image
		for (let i = index + 1; i < images2.length; i++) {
			// Assign incremental z-index values
			images2[i].style.zIndex = 4 - i;
		}
	});
});

// Get all the image elements
const images3 = document.querySelectorAll('.mob-img113');
images3.forEach((image, index) => {
	image.addEventListener('click', function () {
		this.style.zIndex = '4';
		for (let i = 0; i < index; i++) {
			images3[i].style.zIndex = i + 1;
		}
		// Loop through the images after the clicked image
		for (let i = index + 1; i < images3.length; i++) {
			// Assign incremental z-index values
			images3[i].style.zIndex = 4 - i;
		}
	});
});

let imageCont1 = document.querySelector('#set1');
let imageCont2 = document.querySelector('#set2');
let imageCont3 = document.querySelector('#set3');

let imageFlex1 = document.querySelector('#set11');
let imageFlex2 = document.querySelector('#set22');
let imageFlex3 = document.querySelector('#set33');

imageFlex1.style.display = 'none';
imageFlex2.style.display = 'none';
imageFlex3.style.display = 'none';

let circle1 = document.querySelector('.sec2-circl1');
let circle2 = document.querySelector('.sec2-circl2');
let circle3 = document.querySelector('.sec2-circl3');

function sleep(milliseconds) {
	return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function hide(elementNb) {
	let elmt_hide = null;
	let elmt_s = null;
	let crcl = null;
	let clss = '';
	await sleep(150);
	if (elementNb === 1) {
		elmt_hide = imageCont1;
		elmt_s = imageFlex1;
		crcl = circle1;
		clss = 'hovered1';
	} else if (elementNb === 2) {
		elmt_hide = imageCont2;
		elmt_s = imageFlex2;
		crcl = circle2;
		clss = 'hovered2';
	} else if (elementNb === 3) {
		elmt_hide = imageCont3;
		elmt_s = imageFlex3;
		crcl = circle3;
		clss = 'hovered3';
	}

	crcl.classList.add(clss);
	elmt_hide.hidden = true;
	elmt_s.style.display = 'flex';
}

async function show(elementNb) {
	let elmt_hide = null;
	let elmt_s = null;
	let crcl = null;
	let clss = '';
	await sleep(150);
	if (elementNb === 1) {
		elmt_hide = imageCont1;
		elmt_s = imageFlex1;
		crcl = circle1;
		clss = 'hovered1';
	} else if (elementNb === 2) {
		elmt_hide = imageCont2;
		elmt_s = imageFlex2;
		crcl = circle2;
		clss = 'hovered2';
	} else if (elementNb === 3) {
		elmt_hide = imageCont3;
		elmt_s = imageFlex3;
		crcl = circle3;
		clss = 'hovered3';
	}

	crcl.classList.remove(clss);
	elmt_hide.hidden = false;
	elmt_s.style.display = 'none';
}
