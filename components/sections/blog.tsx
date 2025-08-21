import React from "react";
import Title from "../title";
import { Button } from "../ui/button";
import { Link } from "lucide-react";
import { Separator } from "../ui/separator";

const Blog = () => {
  return (
    <section id="blog">
      <Title>Blog</Title>

      <ul className="mt-4">
        <BlogCard title="My first blog post" date="2023-01-01" />
        <Separator className="my-4" />
        <BlogCard title="My second blog post" date="2023-01-01" />
        <Separator className="my-4" />
        <BlogCard title="My third blog post" date="2023-01-01" />
      </ul>
    </section>
  );
};

export default Blog;

interface BlogProps {
  title: string;
  date: string;
}

const BlogCard = ({ title, date }: BlogProps) => {
  return (
    <li className="flex items-center justify-between group gap-2 hover:border-border border border-transparent py-2 px-3 rounded-r-md transition-colors cursor-pointer">
      <p className="border-l-4 border-blue-400 pl-4 group-hover:underline">
        {title}
      </p>
      <div className="flex items-center gap-4">
        <time className="text-muted-foreground text-sm">{date}</time>

        <Button variant="outline" className="shadow-none">
          <Link className="text-blue-400" />
        </Button>
      </div>
    </li>
  );
};
