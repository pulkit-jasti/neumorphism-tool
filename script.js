let box = document.getElementById('box');

let size = document.getElementById('size');
let rad = document.getElementById('radius');
let blur = document.getElementById('blur');
let dist = document.getElementById('distance');

let sliders = document.querySelectorAll('.slider');
console.log(sliders);

let left = '';
let right = '-';
let Top = '';
let bottom = '-';

function updateValues() {
	box.style.width = `${size.value}px`;
	box.style.height = `${size.value}px`;
	box.style.borderRadius = `${rad.value}px`;
	box.style.boxShadow = `${left}${dist.value}px ${Top}${dist.value}px ${blur.value}px #cbced1, ${right}${dist.value}px ${bottom}${dist.value}px ${blur.value}px #fff`;
}

sliders.forEach(e => {
	e.addEventListener('input', updateValues);
});

updateValues();

let tl = document.getElementById('light-top-left');
let tr = document.getElementById('light-top-right');
let bl = document.getElementById('light-bottom-left');
let br = document.getElementById('light-bottom-right');

function lightIconReset() {
	tl.innerHTML = '';
	tr.innerHTML = '';
	bl.innerHTML = '';
	br.innerHTML = '';
}

tl.addEventListener('click', function () {
	left = '';
	right = '-';
	Top = '';
	bottom = '-';
	updateValues();
	lightIconReset();
	this.innerHTML = '<img src="images/flashlight.png" alt="" />';
});

tr.addEventListener('click', function () {
	left = '-';
	right = '';
	Top = '';
	bottom = '-';
	updateValues();
	lightIconReset();
	this.innerHTML = '<img src="images/flashlight.png" alt="" />';
});

bl.addEventListener('click', function () {
	left = '';
	right = '-';
	Top = '-';
	bottom = '';
	updateValues();
	lightIconReset();
	this.innerHTML = '<img src="images/flashlight.png" alt="" />';
});

br.addEventListener('click', function () {
	left = '-';
	right = '';
	Top = '-';
	bottom = '';
	updateValues();
	lightIconReset();
	this.innerHTML = '<img src="images/flashlight.png" alt="" />';
});
