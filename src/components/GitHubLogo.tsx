import githubImg from "../images/github.png";
import "../styles/githubLogo.css";

export default function GitHubLogo() {
    return (
        <a
            href="https://github.com/vempr/hangman-app/tree/main"
            target="_blank"
        >
            <img
                src={githubImg}
                alt="GitHub Repository"
            />
        </a>
    );
}
