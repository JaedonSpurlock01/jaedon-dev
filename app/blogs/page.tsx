import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import StaggerContainer from "@/components/stagger-container";
import Title from "@/components/title";

export const runtime = "nodejs";

export default async function Blogs() {
  const posts = getAllPosts();

  return (
    <StaggerContainer className="mt-20 mb-40 flex flex-col gap-8">
      <Title>Blogs</Title>

      <ul className="flex flex-col gap-4">
        {posts.map((p) => (
          <Link
            href={`/blogs/${p.slug}`}
            key={p.slug}
            className="hover:bg-neutral-100 p-4 rounded-md transition-colors duration-300"
          >
            <li key={p.slug} className="border-b border-blue-400/20 pb-6">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">{p.title}</h2>
                {p.authors?.length ? (
                  <div className="my-0.5 flex flex-wrap gap-2">
                    {p.authors.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded bg-gray-100 dark:bg-gray-800 px-2 py-1"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <p className="text-sm text-gray-500 font-mono">
                {new Date(p.date).toLocaleDateString()} • {p.reading_time}
              </p>
              {p.description && (
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {p.description}
                </p>
              )}
            </li>
          </Link>
        ))}
      </ul>
    </StaggerContainer>
  );
}
