import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.author}>
        <img
          className={styles.authorAvatar}
          src="https://avatars.githubusercontent.com/u/43785447?v=4"
        ></img>
        <div>
          <strong className={styles.authorName}></strong>
          <span className={styles.authorInfo}></span>
        </div>
        <time title="11 de maio as 8:13" dateTime="2024-04-24 09:15:09"></time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          {" "}
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <a href="">👉 jane.design/doctorcare</a>
        <a href="">#novoprojeto #nlw #rocketseat</a>
      </div>
    </article>
  );
}
