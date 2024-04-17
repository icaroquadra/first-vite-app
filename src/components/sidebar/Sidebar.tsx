import styles from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Avatar } from "../avatar/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1694894427818-cdbf33cfe2ec?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></img>

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/43785447?v=4" />
        <strong> user name </strong>
        <span> job </span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <FontAwesomeIcon icon={faPencil} />
          personal site
        </a>
      </footer>
    </aside>
  );
}
