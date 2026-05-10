import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blog";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col px-6 pt-6 pb-8 sm:pt-12 sm:pb-12 space-y-6">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center w-fit gap-3 text-md font-semibold text-muted-foreground cursor-pointer hover:text-foreground duration-200"
      >
        <ChevronLeft size={20} strokeWidth={2.25} /> Back to Home
      </button>
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">All Blogs</h1>
        <p className="text-muted-foreground font-light text-lg">
          Thoughts, write-ups, and explorations on design, development, and
          everything in between.
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </main>
  );
};

export default Blog;
