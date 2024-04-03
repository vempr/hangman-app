import "../styles/keyboard.css";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-";
const alphabetArray = alphabet.split("");

type SetGuessedLettersType = {
    setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>;
    guessedLetters: string[];
    incorrectLetters: string[];
};

export default function Keyboard({
    setGuessedLetters,
    guessedLetters,
    incorrectLetters,
}: SetGuessedLettersType) {
    return (
        <div className="wrapper">
            <div className="container">
                {alphabetArray.map((letter: string) => (
                    <button
                        key={letter}
                        className={`btn ${
                            guessedLetters.includes(letter)
                                ? incorrectLetters.includes(letter)
                                    ? "incorrectlyChosen"
                                    : "correctlyChosen"
                                : ""
                        }`}
                        onClick={() => {
                            if (guessedLetters.includes(letter)) return;
                            setGuessedLetters((prev) => [...prev, letter]);
                        }}
                    >
                        {letter}
                    </button>
                ))}
            </div>
        </div>
    );
}
