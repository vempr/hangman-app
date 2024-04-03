import "../styles/wordToGuess.css";

type WordType = {
    word: string;
    guessedLetters: string[];
};

export default function WordToGuess({ word, guessedLetters }: WordType) {
    return (
        <div className="wrapper">
            {word?.split("").map((letter: string, index: number) => (
                <span
                    key={index}
                    className="underline"
                >
                    <span
                        className={`letter ${
                            guessedLetters.includes(letter.toUpperCase())
                                ? "visible"
                                : "hidden"
                        }`}
                    >
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}
