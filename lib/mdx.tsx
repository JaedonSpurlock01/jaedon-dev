import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  date: string;
  description?: string;
  reading_time: string;
  published?: boolean;
  authors?: string[];
};

export type PostListItem = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  reading_time: string;
  authors?: string[];
};

function readFile(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  return { filePath, source };
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostListItem[] {
  const slugs = getPostSlugs();

  const posts = slugs.map((slug) => {
    const { source } = readFile(slug);
    const { content, data } = matter(source);
    const fm = data as PostFrontmatter;

    const words = content.trim().split(/\s+/).length || 0;
    const minutes = Math.max(1, Math.round(words / 220));
    const reading_time = `${minutes} min read`;

    const published = fm.published !== false;
    return {
      slug,
      title: fm.title ?? slug,
      date: fm.date ?? "1970-01-01",
      description: fm.description,
      reading_time,
      published,
      authors: fm.authors,
    };
  });

  // Only published posts on public lists
  const filtered = posts.filter((p) => {
    const { source } = readFile(p.slug);
    const { data } = matter(source);
    return (data as PostFrontmatter).published !== false;
  });

  return filtered.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getSerializedPost(slug: string) {
  try {
    const { source } = readFile(slug);
    const { content, data } = matter(source);
    const fm = data as PostFrontmatter;

    return { content, frontmatter: fm };
  } catch (error) {
    console.error(error);
    return null;
  }
}
