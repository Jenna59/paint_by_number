const red = document.querySelector(".one"); 
const blue = document.querySelector(".four");

const iterateOverGrey = 
	document.querySelectorAll(".three").forEach(square => {
		square.addEventListener("click", e => {
			square.style.backgroundColor = 'rgb(202, 219, 229)'
		})
	});

const iterateOverWhite = 
	document.querySelectorAll(".six").forEach(square => {
		square.addEventListener("click", e => {
			square.style.backgroundColor = 'rgb(227, 230, 235)';
		})
	});

const iterateOverYellow = 
	document.querySelectorAll(".two").forEach(square => {
		square.addEventListener("click", e => {
			square.style.backgroundColor = 'rgb(235, 211, 83)';
		})
	});

const iterateOverBlack = 
document.querySelectorAll(".five").forEach(square => {
		square.addEventListener("click", e => {
			square.style.backgroundColor = 'rgb(0, 0, 0)';

		})
	});

function paintRed() {
	const red = document.querySelector(".one"); 
	if (red) {
    red.style.backgroundColor = 'rgb(217, 56, 41)';
  }; 
}; 

function paintBlue() {
	if (blue) {
    blue.style.backgroundColor = 'rgb(40, 63, 113)';
  }; 
}; 

red.addEventListener('click', paintRed);
blue.addEventListener('click', paintBlue);