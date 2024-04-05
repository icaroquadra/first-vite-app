import styles from "./Comment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/43785447?v=4"></img>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}></div>

        <header>
          <div className={styles.authorAndTime}>
            <strong> Icaro Quadra </strong>

            <time title="11 de maio as 8:13h" dateTime="2024-04-24 09:15:09">
              Cerca de 1h atrás
            </time>
          </div>

          <p>Very good Dev, Well Done!! :clap:</p>
        </header>

        <footer>
          <button>
            <FontAwesomeIcon icon={faThumbsUp} />
            claps
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
