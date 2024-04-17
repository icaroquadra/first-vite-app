import { Comment } from "../comment/Comment.js";
import { useState, FormEvent, ChangeEvent, InvalidEvent } from "react";
import styles from "./Post.module.css";
import { Avatar } from "../avatar/Avatar.js";
import { PostContent } from "../../interfaces/PostInterface.js";

interface PostProps {
  post: PostContent;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["great post fella"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishdDateFormated = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(post.publishedAt));

  function publishedAtRelativeToNow() {
    const currentDate = new Date();
    const timeDifference = currentDate - post.publishedAt;
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
      }).format(post.publishedAt);
      return `Published on ${formattedDate}`;
    }
  }

  function handleCommentSubmit(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Invalid comment");
  }

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeleted = comments.filter(
      (comment) => comment !== commentToDelete,
    );

    setComments(commentWithoutDeleted);
  }

  const isNewCommentTextEmpty = !newCommentText.length;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatar_url} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishdDateFormated}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedAtRelativeToNow()}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((item, index) => {
          if (item.type === "paragraph") {
            return <p key={index}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={index}>
                <a>{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={styles.commentForm}>
        <strong>Let your comment</strong>

        <textarea
          onChange={handleNewComment}
          value={newCommentText}
          name="newComment"
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>

        <footer>
          <button type="submit" disabled={isNewCommentTextEmpty}>
            Publish
          </button>
        </footer>
      </form>

      {comments.map((commentContent) => {
        return (
          <Comment
            key={commentContent}
            commentContent={commentContent}
            onDeleteComment={deleteComment}
          />
        );
      })}
    </article>
  );
}
