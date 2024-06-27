let word;

function setupWord(element, initWord) {
    word = initWord;
    word.split('').forEach(() => {
        element.insertAdjacentHTML('beforeend', '<div class="letter-box"></div>');
    })
}

function isLetterInWord(letter) {
    if(word.includes(letter)) {
        return true;
    }
    return false;
}

function revealLetterInWord(letter) {
    const elements = document.querySelectorAll('.letter-box');
    word.split('').forEach((i, index) => {
        if(i === letter) {
            elements[index].innerHTML = letter;
        }
    });
}


export { setupWord, isLetterInWord, revealLetterInWord }