import { Header } from "../ components/Header.jsx";
import { Post } from "./Post.jsx";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Ícaro"
        content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />
      <Post
        author="Soren"
        content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
      />
    </div>
  );
}
