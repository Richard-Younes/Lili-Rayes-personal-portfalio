let vid7 = document.getElementById('video7');
let vid8 = document.getElementById('video8');
let vid9 = document.getElementById('video9');

let text1 = document.querySelector('.p31');
let text2 = document.querySelector('.p32');
let text3 = document.querySelector('.p33');

let div1 = document.querySelector('.mob-circ1');
let div2 = document.querySelector('.mob-circ2');
let div3 = document.querySelector('.mob-circ3');

let txtClicked = document.querySelector('.orange-p');

let circClicked = document.querySelector('.mob-circ');

text1.addEventListener('click', () => {
	text2.classList.remove('orange-p');
	text3.classList.remove('orange-p');
	text1.classList.add('orange-p');

	vid7.style.zIndex = '6';
	vid8.style.zIndex = '5';
	vid9.style.zIndex = '4';

	div1.classList.add('mob-circ');
	div2.classList.remove('mob-circ');
	div3.classList.remove('mob-circ');

	div1.style.justifySelf = 'flex-end';

	div2.style.justifySelf = 'flex-end';
	text3.style.left = '-40%';
	div3.style.left = '0%';
	text1.style.left = '0%';
	text2.style.left = '0%';
});

text2.addEventListener('click', () => {
	text1.classList.remove('orange-p');
	text3.classList.remove('orange-p');
	text2.classList.add('orange-p');

	vid7.style.zIndex = '4';
	vid8.style.zIndex = '6';
	vid9.style.zIndex = '5';

	div1.classList.remove('mob-circ');
	div2.classList.add('mob-circ');
	div3.classList.remove('mob-circ');

	div1.style.justifySelf = 'baseline';
	div2.style.justifySelf = 'flex-end';

	text1.style.top = '2rem';
	text3.style.left = '-40%';
	div3.style.left = '0%';
	text1.style.left = '0%';
	text2.style.left = '0%';
});

text3.addEventListener('click', () => {
	text2.classList.remove('orange-p');
	text1.classList.remove('orange-p');
	text3.classList.add('orange-p');

	vid7.style.zIndex = '5';
	vid8.style.zIndex = '5';
	vid9.style.zIndex = '6';

	div1.classList.remove('mob-circ');
	div2.classList.remove('mob-circ');
	div3.classList.add('mob-circ');

	div1.style.justifySelf = 'baseline';
	text1.style.top = '2rem';

	div2.style.justifySelf = 'baseline';
	div3.style.left = '-50%';

	text3.style.left = '0';
	text1.style.left = '-40%';
	text2.style.left = '-20%';
});
