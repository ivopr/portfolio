import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

import BlogsGrid from "@/ui/components/BlogsGrid";

export const metadata: Metadata = {
  title: "Blog"
};

export default function Home() {
  return (
    <section className="container mx-auto pb-8 text-left">
      <BlogsGrid
        allPosts={allPosts.filter((post) => post.status === "published")}
      />
    </section>
  );
}
