import styles from "./Post.module.css";
import { Avatar } from "./Avatar.jsx";

export function Post({ author, publishedAt, content }) {
  const publishdDateFormated = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(publishedAt));

  function publishedAtRelativeToNow() {
    const currentDate = new Date();
    const timeDifference = currentDate - publishedAt;
    const secondsDifference = Math.floor(timeDifference / 1000);

    if (secondsDifference < 60) {
      // Less than a minute ago
      return "Just now";
    } else if (secondsDifference < 3600) {
      // Less than an hour ago
      const minutes = Math.floor(secondsDifference / 60);
      return `${minutes} minute(s) ago`;
    } else if (secondsDifference < 86400) {
      // Less than a day ago
      const hours = Math.floor(secondsDifference / 3600);
      return `${hours} hour(s) ago`;
    } else if (secondsDifference < 604800) {
      // Less than a week ago
      const days = Math.floor(secondsDifference / 86400);
      return `${days} day(s) ago`;
    } else {
      // More than a week ago, show the exact date
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
      }).format(publishedAt);
      return `Published on ${formattedDate}`;
    }
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar_url} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishdDateFormated} dateTime={publishedAt.toISOString()}>
          {publishedAtRelativeToNow()}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "link") {
            return <a key={index}>{item.content}</a>;
          }
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea placeholder="Deixe um comentário"></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
