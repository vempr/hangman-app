import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import Score from "./components/Score";
import HangmanDrawing from "./components/HangmanDrawing";
import WordToGuess from "./components/WordToGuess";
import Keyboard from "./components/Keyboard";
import EndScreen from "./components/EndScreen";
import "./styles/loadingScreen.css";

const options = {
    method: "GET",
    url: "https://random-words5.p.rapidapi.com/getRandom",
    headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
    },
};

export default function App() {
    const [word, setWord] = useState<string | null>(null);
    const [score, setScore] = useState<[number, number]>([0, 0]);
    const [distinctLetters, setdistinctLetters] = useState<string[]>();
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [gameState, setGameState] = useState<string | null>(null); // true win, false lose

    const startNewGame = () => {
        setWord(null);
        setdistinctLetters([]);
        setGuessedLetters([]);
        setIncorrectLetters([]);
        setCorrectLetters([]);

        setScore(
            gameState === "won"
                ? [score[0] + 1, score[1]]
                : [score[0], score[1] + 1]
        );
        setGameState(null);
    };

    useEffect(() => {
        const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
        if (word && lastGuessedLetter) {
            const uppercasedWord = word.toUpperCase();
            const uppercasedGuessedLetter = lastGuessedLetter.toUpperCase();
            if (uppercasedWord.includes(uppercasedGuessedLetter)) {
                setCorrectLetters([...correctLetters, lastGuessedLetter]);
            } else {
                setIncorrectLetters([...incorrectLetters, lastGuessedLetter]);
            }
        }
    }, [guessedLetters, word]);

    useEffect(() => {
        const fetchWord = async () => {
            try {
                const response = await axios.request(options);
                const fetchedWord = response.data;
                setWord(fetchedWord);
                if (fetchedWord) {
                    const lettersArray = fetchedWord.toUpperCase().split("");
                    setdistinctLetters(Array.from(new Set(lettersArray)));
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchWord();
    }, [score]);

    useEffect(() => {
        if (
            word &&
            distinctLetters &&
            correctLetters.length === distinctLetters.length &&
            incorrectLetters.length < 10
        ) {
            setGameState("won");
        }
        if (incorrectLetters.length === 10) {
            setGameState("lost");
        }
    }, [correctLetters, incorrectLetters, distinctLetters]);

    return (
        <>
            <div className="fade">
                {word ? (
                    <div>
                        <HangmanDrawing incorrect={incorrectLetters.length} />
                        <WordToGuess
                            word={word}
                            guessedLetters={guessedLetters}
                        />
                        <Keyboard
                            guessedLetters={guessedLetters}
                            setGuessedLetters={setGuessedLetters}
                            incorrectLetters={incorrectLetters}
                        />
                        <Score score={score} />
                    </div>
                ) : (
                    <div className="loadingWrapper">
                        <div className="loading"></div>
                    </div>
                )}
            </div>

            {gameState &&
                word &&
                createPortal(
                    <EndScreen
                        gameState={gameState}
                        word={word}
                        startNewGame={startNewGame}
                    />,
                    document.body
                )}
        </>
    );
}
