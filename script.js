const divNodeList = document.querySelectorAll('div');
const divsArray = [...divNodeList];

function changeColourToRed() {
  divsArray.forEach(function(div) {
    if (div.classList.contains('red')) {
      div.style.backgroundColor = 'rgb(217, 56, 41)';
      div.innerHTML = '';
    }
     /* if (div.classList.contains('gray')) {
      div.style.backgroundColor = 'rgb(202, 219, 229)';
      div.innerHTML = '';
    } else if (div.classList.contains('yellow')) {
      div.style.backgroundColor = 'rgb(235, 211, 83)';
      div.innerHTML = '';
    } else if (div.classList.contains('black')) {
      div.style.backgroundColor = 'rgb(0, 0, 0)';
      div.innerHTML = '';
    } else if (div.classList.contains('blue')) {
      div.style.backgroundColor = 'rgb(40, 63, 113)';
      div.innerHTML = '';
    } else if (div.classList.contains('white')) {
      div.style.backgroundColor = 'rgb(227, 230, 235)';
      div.innerHTML = '';
    } */
  });
}

function changeColourToGray() {
  divsArray.forEach(function(div) {
    if (div.classList.contains('gray')) {
      div.style.backgroundColor = 'rgb(202, 219, 229)';
      div.innerHTML = '';
    }
  });
}

/* document.addEventListener('click', changeColourToRed); */
document.addEventListener('click', changeColourToGray);
