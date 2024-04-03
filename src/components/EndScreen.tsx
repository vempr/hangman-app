import axios from "axios";
import { useState, useEffect } from "react";
import "../styles/endScreen.css";

type GameStateType = {
    gameState: string;
    word: string;
    startNewGame: () => void;
};

type Meaning = {
    partOfSpeech: string;
    definitions: {
        definition: string;
        example: string;
    }[];
};

export default function EndScreen({
    gameState,
    word,
    startNewGame,
}: GameStateType) {
    const message = gameState === "won" ? "You Won!" : "You Lost -";
    const [wordMeanings, setWordMeanings] = useState<Meaning[]>();

    useEffect(() => {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((response) => {
                const data = response.data[0];
                if (data) {
                    const meanings = data.meanings.map((meaning: Meaning) => {
                        return {
                            partOfSpeech: meaning.partOfSpeech,
                            definitions: meaning.definitions.map((def) => {
                                return {
                                    definition: def.definition,
                                    example: def.example,
                                };
                            }),
                        };
                    });
                    setWordMeanings(meanings);
                } else {
                    throw new Error("Error fetching word information. Sorry!");
                }
            })
            .catch((error) => console.error(error));
    }, [word]);

    return (
        <div className="portalWrapper">
            <div className="definitionWrapper">
                <div>
                    <p className="reveal">
                        {message} The word was <b>{word}</b>.
                    </p>
                    {wordMeanings &&
                        wordMeanings.map((meaning, index) => (
                            <div
                                className="meaning"
                                key={index}
                            >
                                <p className="partOfSpeech">
                                    {index + 1}: <b>{meaning.partOfSpeech}</b>
                                </p>
                                <ul>
                                    {meaning.definitions.map((def, index) => (
                                        <li
                                            className="definition"
                                            key={index}
                                        >
                                            <p>{def.definition}</p>
                                            {def.example && (
                                                <p className="example">
                                                    Example: {def.example}
                                                </p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
                <button
                    className="playBtn"
                    onClick={startNewGame}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
}
