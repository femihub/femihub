'use strict';

// Selecting elements
const main = document.getElementById('main_container');

main.classList.add('hidden');
const hold = document.getElementById('btn-hold');
const front = document.getElementById('front_page');
const btnRoll = document.querySelector('.btn--roll');

btnRoll.addEventListener('click', function () {
  front.classList.add('hidden');
  main.classList.remove('hidden');
});

const btnHold = document.querySelector('.btn--hold');

btnHold.addEventListener('click', function () {
  hold.classList.add('zuri');
});
