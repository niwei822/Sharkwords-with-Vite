import './style.css';
import getRandomWord from './src/randomWord.js';
import setSharkImage from './src/sharkImage.js';
import { isLetterInWord, revealLetterInWord, setupWord } from './src/word';
import setupGuesses from './src/guess.js';

document.querySelector('#app').innerHTML = `
  <section id="shark-img"></section>

  <section id="game-status"></section>

  <section id="word-container"></section>

  <section id="letter-buttons"></section>
`;

function initSharkwords() {
  
  let numWrong = 0;
  const word = getRandomWord();
  const gameStatusEl = document.querySelector('#game-status');
  const wordContainerEl = document.querySelector('#word-container');
  const sharkImageEl = document.querySelector('#shark-img');
  const letterButtonEl = document.querySelector('#letter-buttons');

  setSharkImage(sharkImageEl, numWrong);
  setupWord(wordContainerEl, word);

  const handleGuess = (guessEvent, letter) => {
   const button = guessEvent.target;
   button.disabled = true;
    if(isLetterInWord(letter)) {
      revealLetterInWord(letter);
    } else {
      numWrong++;
      setSharkImage(sharkImageEl, numWrong);
    }

    if(numWrong === 5) {
      gameStatusEl.innerHTML = `You lose! The word was: ${word}`;
      disableAllButtons();
    } else if(word.split('').every((i) => i === letter)) {
      gameStatusEl.innerHTML = `You win! The word was: ${word}`;
      disableAllButtons();
    }

    function disableAllButtons() {
      const buttons = document.querySelectorAll('button');
      buttons.forEach((i) => i.disabled = true);
    }
  };
  
  setupGuesses(letterButtonEl, handleGuess);

  // for debugging:
  console.log(`[INFO] Correct word is: ${word}`);
  
};

initSharkwords();

