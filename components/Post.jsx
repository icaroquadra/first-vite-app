import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/43785447?v=4"></img>

          <div className={styles.authorInfo}>
            <strong>Hello</strong>
            <span>there</span>
          </div>
        </div>

        <time title="11 de maio as 8:13h" dateTime="2024-04-24 09:15:09">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Hello Everyone 👋</p>
        <p>
          {" "}
          This is my first project with React and Vite, Im loving the experience
          thanks for your visit. S2{" "}
        </p>

        <p>
          <a href="https://github.com/icaroquadra">
            https://github.com/icaroquadra
          </a>{" "}
        </p>

        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
