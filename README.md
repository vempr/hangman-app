# Hangman Game

This is a simple Hangman game built using React. The game provides a visual representation of the hangman's gallows, and the player wins if they guess all the letters correctly before making too many incorrect guesses.

## How to Run

This game is deployed on GitHub Pages. You can play it [here](https://vempr.github.io/hangman-app/).

## How to Play

- When the game starts, a random word is fetched from the [Random Words API](https://rapidapi.com/sheharyar566/api/random-words5).
- Players can click on letters in the virtual keyboard to guess them.
- Correct guesses fill in the corresponding blank spaces, while incorrect guesses are tallied.
- The game ends when the player correctly guesses all the letters or makes too many incorrect guesses.
- Players can start a new game after winning/losing.

## APIs Used

- [Random Words API](https://rapidapi.com/sheharyar566/api/random-words5): This API is used to fetch random words for the game.
- [Dictionary API](https://dictionaryapi.dev/): This API is used for displaying information about the word that was guessed.

## Languages

- UI designed with Vanilla CSS and HTML
- React with TypeScript

## Web Responsiveness

This game is designed to be responsive, adapting to various screen sizes and devices.

## Credits

This game was created by Alex Nguyen (2024). It is licensed under the MIT License:

> _Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br><br> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br><br> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._
