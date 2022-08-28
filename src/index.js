import './css/style.css'
import './data/ancients.js';
import './data/mythicCards/index.js';
import './data/difficulties.js';
import ancientsData from './data/ancients.js';
import difficulties from './data/difficulties.js';
import { blueCards, brownCards, greenCards } from './data/mythicCards/index.js';


const azathothCard = document.querySelector('.azathoth'),
      cthulhuCard = document.querySelector('.cthulhu'),
      iogSothothCard = document.querySelector('.iogSothoth'),
      genDiff = document.querySelector('.generate'),
      firstStage = document.querySelector('.first-stage'),
      secondStage = document.querySelector('.second-stage'),
      thirdStage = document.querySelector('.third-stage'),
      // imgCard = document.querySelectorAll('.card-style'),
      shubNiggurathCard = document.querySelector('.shubNiggurath');



const firstGreen = document.querySelector('.first-green'),
      firstBrown = document.querySelector('.first-brown'),
      firstBlue = document.querySelector('.first-blue'),
      secondGreen = document.querySelector('.second-green'),
      secondBrown = document.querySelector('.second-brown'),
      secondBlue = document.querySelector('.second-blue'),
      thirdGreen = document.querySelector('.third-green'),
      thirdBrown = document.querySelector('.third-brown'),
      thirdBlue = document.querySelector('.third-blue');






let currectAncient = 'none';

azathothCard.addEventListener('click', ()=>{
  currectAncient = ancientsData[0];

  shubNiggurathCard.classList.remove('active');
  cthulhuCard.classList.remove('active');
  iogSothothCard.classList.remove('active');
  azathothCard.classList.add('active');

  // console.log(currectAncient);
})
cthulhuCard.addEventListener('click', ()=>{
  currectAncient = ancientsData[1];

  shubNiggurathCard.classList.remove('active');
  azathothCard.classList.remove('active');
  iogSothothCard.classList.remove('active');
  cthulhuCard.classList.add('active');

  // console.log(currectAncient);
})

iogSothothCard.addEventListener('click', ()=>{
  currectAncient = ancientsData[2];

  shubNiggurathCard.classList.remove('active');
  cthulhuCard.classList.remove('active');
  azathothCard.classList.remove('active');
  iogSothothCard.classList.add('active');

  // console.log(currectAncient);
})
shubNiggurathCard.addEventListener('click', ()=>{
  currectAncient = ancientsData[3];

  azathothCard.classList.remove('active');
  cthulhuCard.classList.remove('active');
  iogSothothCard.classList.remove('active');
  shubNiggurathCard.classList.add('active');

  // console.log(currectAncient);
})



genDiff.addEventListener('click', () => {
  console.log(currectAncient);
  getCards(currectAncient);
})


function createElements(arr, pushElem) {
 
  for (let i = 0; i < arr.length; i++) {
    let img = document.createElement('img');
    pushElem.append(img);
    img.classList.add('card-style');
    img.src = `${arr[i].cardFace}`
  }

}

function getCards(ancient) {
  let firstStageArr = [];
  let secondStageArr = [];
  let thirdStageArr = [];


  getFirstStageArr(ancient, firstStageArr);
  getSecondStageArr(ancient, secondStageArr, firstStageArr);
  getThirdStageArr(ancient, thirdStageArr, firstStageArr, secondStageArr);

  let imgCard = document.querySelectorAll('.card-style');
  imgCard.forEach(e => {
    e.remove();
  });

  createElements(firstStageArr, firstStage);
  createElements(secondStageArr, secondStage);
  createElements(thirdStageArr, thirdStage);

  firstGreen.textContent = `Зеленые ${ancient.firstStage.greenCards}`;
  firstBrown.textContent = `Коричневые ${ancient.firstStage.brownCards}`;
  firstBlue.textContent = `Синие ${ancient.firstStage.blueCards}`;

  secondGreen.textContent = `Зеленые ${ancient.secondStage.greenCards}`;
  secondBrown.textContent = `Коричневые ${ancient.secondStage.brownCards}`;
  secondBlue.textContent = `Синие ${ancient.secondStage.blueCards}`;

  thirdGreen.textContent = `Зеленые ${ancient.thirdStage.greenCards}`;
  thirdBrown.textContent = `Коричневые ${ancient.thirdStage.brownCards}`;
  thirdBlue.textContent = `Синие ${ancient.thirdStage.blueCards}`;
  console.log(firstStageArr);
  console.log(secondStageArr);
  console.log(thirdStageArr);
}

function getFirstStageArr(ancient, arr) {
  for (let i = 0; i < ancient.firstStage.greenCards; i++){
    let res = greenCards[getRandomNumber(0, greenCards.length-1)];
    if (!arr.includes(res)) {
      arr.push(res);
    } else {
      i--;
    } 
  }
  for (let i = 0; i < ancient.firstStage.brownCards; i++){
    let res = brownCards[getRandomNumber(0, brownCards.length-1)];
    if (!arr.includes(res)) {
      arr.push(res);
    } else {
      i--;
    } 
  }
  for (let i = 0; i < ancient.firstStage.blueCards; i++){
    let res = blueCards[getRandomNumber(0, blueCards.length-1)];
    if (!arr.includes(res)) {
      arr.push(res);
    } else {
      i--;
    } 
  }
}

function getSecondStageArr(ancient, arr, arr2) {
  for (let i = 0; i < ancient.secondStage.greenCards; i++){
    let res = greenCards[getRandomNumber(0, greenCards.length-1)];
    if (!arr.includes(res) && !arr2.includes(res)) {
      arr.push(res);
    } else {
      i--;
    } 
  }
  for (let i = 0; i < ancient.secondStage.brownCards; i++){
    let res = brownCards[getRandomNumber(0, brownCards.length-1)];
    if (!arr.includes(res) && !arr2.includes(res)) {
      arr.push(res);
    } else {
      i--;
    } 
  }
  for (let i = 0; i < ancient.secondStage.blueCards; i++){
    let res = blueCards[getRandomNumber(0, blueCards.length-1)];
    if (!arr.includes(res) && !arr2.includes(res)) {
      arr.push(res);
    } else {
      i--;
    } 
  }
}

function getThirdStageArr(ancient, arr, arr2, arr3) {
  for (let i = 0; i < ancient.thirdStage.greenCards; i++){
    let res = greenCards[getRandomNumber(0, greenCards.length-1)];
    if (!arr.includes(res) && !arr2.includes(res) && !arr3.includes(res)) {
      arr.push(res);
    } else {
      i--;
    } 
  }
  for (let i = 0; i < ancient.thirdStage.brownCards; i++){
    let res = brownCards[getRandomNumber(0, brownCards.length-1)];
    if (!arr.includes(res) && !arr2.includes(res) && !arr3.includes(res)) {
      arr.push(res);
    } else {
      i--;
    } 
  }
  for (let i = 0; i < ancient.thirdStage.blueCards; i++){
    let res = blueCards[getRandomNumber(0, blueCards.length-1)];
    if (!arr.includes(res) && !arr2.includes(res) && !arr3.includes(res)) {
      arr.push(res);
    } else {
      i--;
    } 
  }
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};


  // for (let i = 0; i < ancientsData[0].firstStage.greenCards; i++){
  //   let res = greenCards[getRandomNumber(0, greenCards.length-1)];
  //   if (!firstStageArr.includes(res)) {
  //     firstStageArr.push(res);
  //   } else {
  //     i--;
  //   } 
  // }

  