import { getSerializedPost, getAllPosts } from "@/lib/mdx";
import StaggerContainer from "@/components/stagger-container";
import MdxClient from "@/components/mdx/MDXClient";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { VideoText } from "@/components/magicui/video-text";
import Comments from "@/components/comments";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPost(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { slug } = params;

  const slugs = new Set(getAllPosts().map((p) => p.slug));
  if (!slugs.has(slug)) return notFound();

  const post = await getSerializedPost(params.slug);

  if (!post) return notFound();

  const { mdxSource, frontmatter } = post;

  return (
    <StaggerContainer className="mt-10 mb-40 flex flex-col">
      <article className="prose prose-pre:bg-transparent prose-code:before:hidden prose-code:after:hidden dark:prose-invert mx-auto py-10">
        <div className="relative h-[32px] w-[240px]">
          <VideoText fontSize={"1.85rem"} src="/nature.mp4">
            {frontmatter.title}
          </VideoText>
        </div>
        <div className="flex justify-between items-center gap-4 mt-2">
          <p className="text-sm text-muted-foreground font-mono">
            {frontmatter.date}
          </p>
          <p className="text-sm text-muted-foreground font-mono">
            <Clock className="inline-block mr-1" size={14} />{" "}
            {frontmatter.reading_time}
          </p>
        </div>

        <hr className="my-8 border-blue-400/30" />
        <MdxClient source={mdxSource} />
      </article>

      <Comments />
    </StaggerContainer>
  );
}
