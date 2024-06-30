const alphabet = 'abcdefghijklmnopqrstuvwxyz';

/**
 * Set up the guess buttons and attach event listeners to them.
 * 
 * @param {HTMLElement} element - The element to which the buttons will be appended.
 * @param {Function} handleGuess - The function that will be called when a guess is made.
 */
function setupGuesses(element, handleGuess) {
  // Split the alphabet string into an array of individual letters.
  alphabet.split('').forEach((letter) => {
    // Create a new button element for each letter.
    const btn = document.createElement('button');
    btn.innerText = letter; // Set the text content of the button to the letter.
    
    // Attach an event listener to the button that calls the handleGuess function
    // with the letter as an argument.
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    
    // Append the button to the specified element.
    element.append(btn);
  });
}

export default setupGuesses;
