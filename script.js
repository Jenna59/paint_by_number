const divNodeList = document.querySelectorAll('div');
const divsArray = [...divNodeList];
const red = document.getElementsByClassName('red')[0];
const gray0 = document.getElementsByClassName('gray')[0];
const gray1 = document.getElementsByClassName('gray')[1];
const gray2 = document.getElementsByClassName('gray')[2];
const gray3 = document.getElementsByClassName('gray')[3];
const gray4 = document.getElementsByClassName('gray')[4];
const yellow0 = document.getElementsByClassName('yellow')[0];
const yellow1 = document.getElementsByClassName('yellow')[1];
const yellow2 = document.getElementsByClassName('yellow')[2];
const black0 = document.getElementsByClassName('black')[0];
const black1 = document.getElementsByClassName('black')[1];
const blue = document.getElementsByClassName('blue')[0];
const white0 = document.getElementsByClassName('white')[0];
const white1 = document.getElementsByClassName('white')[1];
const white2 = document.getElementsByClassName('white')[2];
const white3 = document.getElementsByClassName('white')[3];
const white4 = document.getElementsByClassName('white')[4];
const white5 = document.getElementsByClassName('white')[5];
const white6 = document.getElementsByClassName('white')[6];
const white7 = document.getElementsByClassName('white')[7];
const white8 = document.getElementsByClassName('white')[8];


function changeColourToRed() {
  divsArray.forEach(function(div) {
    if (div.classList.contains('red')) {
      div.style.backgroundColor = 'rgb(217, 56, 41)';
      div.innerHTML = '';
    } 
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

function changeColourToYellow() {
  divsArray.forEach(function(div) {
    if (div.classList.contains('yellow')) {
      div.style.backgroundColor = 'rgb(235, 211, 83)';
      div.innerHTML = '';
    }
  });
}

function changeColourToBlack() {
  divsArray.forEach(function(div) {
    if (div.classList.contains('black')) {
      div.style.backgroundColor = 'rgb(0, 0, 0)';
      div.innerHTML = '';
    }
  });
}

function changeColourToBlue() {
  divsArray.forEach(function(div) {
    if (div.classList.contains('blue')) {
      div.style.backgroundColor = 'rgb(40, 63, 113)';
      div.innerHTML = '';
    }
  });
}

function changeColourToWhite() {
  divsArray.forEach(function(div) {
    if (div.classList.contains('white')) {
      div.style.backgroundColor = 'rgb(227, 230, 235)';
      div.innerHTML = '';
    }
  });
}

red.addEventListener('click', changeColourToRed);
gray0.addEventListener('click', changeColourToGray);
gray1.addEventListener('click', changeColourToGray);
gray2.addEventListener('click', changeColourToGray);
gray3.addEventListener('click', changeColourToGray);
gray4.addEventListener('click', changeColourToGray);
yellow0.addEventListener('click', changeColourToYellow);
yellow1.addEventListener('click', changeColourToYellow);
yellow2.addEventListener('click', changeColourToYellow);
black0.addEventListener('click', changeColourToBlack);
black1.addEventListener('click', changeColourToBlack);
blue.addEventListener('click', changeColourToBlue);
white0.addEventListener('click', changeColourToWhite);
white1.addEventListener('click', changeColourToWhite);
white2.addEventListener('click', changeColourToWhite);
white3.addEventListener('click', changeColourToWhite);
white4.addEventListener('click', changeColourToWhite);
white5.addEventListener('click', changeColourToWhite);
white6.addEventListener('click', changeColourToWhite);
white7.addEventListener('click', changeColourToWhite);
white8.addEventListener('click', changeColourToWhite);
