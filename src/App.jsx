import { Header } from "../components/Header.jsx";
import { Post } from "../components/Post.jsx";
import { Comment } from "../components/Comment.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://avatars.githubusercontent.com/u/43785447?v=4",
      name: "Ícaro",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Hello Everyone 👋" },
      {
        type: "paragraph",
        content:
          "This is my first project with React and Vite, Im loving the experience thanks for your visit. S2",
      },
      {
        type: "link",
        content: "https://github.com/icaroquadra",
      },
    ],
    publishedAt: new Date("2024-04-01 09:15:09"),
  },
  {
    id: 2,
    author: {
      avatar_url:
        "https://img3.pillowfort.social/posts/66983c83a6dc_Soren%20Screenshot%2005_small.png",
      name: "Soren",
      role: "Software Developer",
    },
    content: [
      { type: "paragraph", content: "Hello Everyone 👋" },
      {
        type: "paragraph",
        content:
          "This is my first project with React and Vite, Im loving the experience thanks for your visit. S2",
      },
      {
        type: "link",
        content: "https://github.com/icaroquadra",
      },
    ],
    publishedAt: new Date("2024-04-09 09:15:09"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
                {...post}
              />
            );
          })}

          <Comment />
        </main>
      </div>
    </div>
  );
}
