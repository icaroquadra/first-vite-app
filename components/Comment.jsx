import styles from "./Comment.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Avatar } from "./Avatar";

export function Comment({ commentContent, onDeleteComment }) {
  const [numberOfClaps, setNumberOfClaps] = useState(19);

  function handleDeleteComment() {
    onDeleteComment(commentContent);
  }

  function handleNumberOfClaps() {
    setNumberOfClaps(numberOfClaps + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://avatars.githubusercontent.com/u/43785447?v=4"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>
                Icaro Quadra
                <span>{" (you)"}</span>
              </strong>

              <time title="11 de maio as 8:13h" dateTime="2024-04-24 09:15:09">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="delete comment">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </header>

          <p>{commentContent}</p>
        </div>

        <footer>
          <button onClick={handleNumberOfClaps}>
            <FontAwesomeIcon icon={faThumbsUp} />
            claps
            <span>{numberOfClaps}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
