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
