import "../styles/score.css";

type Score = {
    score: [number, number];
};

export default function Score({ score }: Score) {
    return (
        <div
            style={{
                fontWeight: "bold",
                position: "absolute",
                top: "0",
                left: "0",
                margin: "3px",
            }}
        >
            Score: <span style={{ color: "green" }}>{score[0]}</span>
            <span> - </span>
            <span style={{ color: "red" }}>{score[1]}</span>
        </div>
    );
}
