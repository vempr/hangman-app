import "../styles/hangmanDrawing.css";

const hangmanParts = [
    <div className="bottom-bar"></div>,
    <div className="straight-bar"></div>,
    <div className="upper-bar"></div>,
    <div className="hanging-down-bar"></div>,
    <div className="head"></div>,
    <div className="neck-torso"></div>,
    <div className="left-arm"></div>,
    <div className="right-arm"></div>,
    <div className="left-leg"></div>,
    <div className="right-leg"></div>,
];

type IncorrectType = {
    incorrect: number;
};

export default function HangmanDrawing({ incorrect }: IncorrectType) {
    return (
        <div className="hangman-container">
            <div className="wrapper">
                {hangmanParts.slice(0, incorrect).map((part, index) => (
                    <div key={index}>{part}</div>
                ))}
            </div>
        </div>
    );
}
