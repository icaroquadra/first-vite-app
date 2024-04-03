import { Header } from "../components/Header.jsx";
import { Post } from "./Post.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Ícaro"
            content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
          <Post
            author="Soren"
            content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
        </main>
      </div>
    </div>
  );
}
