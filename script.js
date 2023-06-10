"use strict";

const colors = {
	red : "rgb(217, 56, 41)", 
	yellow: "rgb(235, 211, 83)",
	gray: "rgb(202, 219, 229)",
	blue: "rgb(40, 63, 113)",
	black: "rgb(0, 0, 0)",
	white: "rgb(227, 230, 235)",
  beige: "rgb(250,235,215)"
};

const elemsToPaint = document.querySelectorAll("div.paint");

function paint() {

		elemsToPaint.forEach(elemToPaint => {
			elemToPaint.addEventListener("click", e => { 
        const className = e.target.className;
				switch(className) {
					case "paint red":
						e.target.style.backgroundColor = colors.red;
						e.target.style.color = colors.red;
					break
					case "paint yellow":
						e.target.style.backgroundColor = colors.yellow
						e.target.style.color = colors.yellow;
					break
					case "paint gray":
						e.target.style.backgroundColor = colors.gray
						e.target.style.color = colors.gray;
					break
					case "paint blue":
						e.target.style.backgroundColor = colors.blue
						e.target.style.color = colors.blue;
					break
					case "paint black":
						e.target.style.backgroundColor = colors.black
						e.target.style.color = colors.black;
					break
					case "paint white":
						e.target.style.backgroundColor = colors.white
						e.target.style.color = colors.white;
					break;	
				}
			})
		})
}

paint();

function reset() {
  const resetBtn = document.querySelector("button")
  resetBtn.addEventListener("click", () => { 
    elemsToPaint.forEach(elemToPaint => {
      elemToPaint.style.backgroundColor = colors.beige;
      elemToPaint.style.color = colors.black;
      console.log(elemToPaint)
    })
  })
}

reset(); 


















