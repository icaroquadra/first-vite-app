export interface PostContent {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface Author {
  avatar_url: string;
  name: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}
