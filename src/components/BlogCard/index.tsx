import Link from "next/link";

export default function BlogCard({ title, slug }: Partial<PostProps>) {
  return (
    <div className="group">
      <Link
        href="/blog/[slug]"
        as={`/blog/${slug}`}
      >
        <div className="rounded border-2 border-transparent transition-all duration-100 ease-linear">
          <div className="h-[150px]">
            {/* <Image
              src={imageSrc}
              alt={imageAlt}
              className="object-cover w-full h-full rounded aspect-square"
              loading="lazy"
            /> */}
          </div>
          <h4 className="pt-2 text-sm font-bold text-zinc-400 transition-colors duration-100 ease-linear group-hover:text-gray-300">
            {title}
          </h4>
          {/* <p className="py-1 text-xs transition-colors duration-100 ease-linear font-grotesk text-zinc-400/90 group-hover:text-gray-300">
          {description}
        </p> */}
          <div className="flex w-full items-center justify-between pt-2">
            {/* <Link
            href="/single-blog"
            className="flex items-center p-2 text-sm transition-colors duration-100 ease-linear rounded group bg-zinc-900 text-zinc-400 hover:bg-zinc-900/70"
          >
            Read
            <HiArrowRight className="ml-2 transition-colors duration-100 ease-linear text-zinc-400 group-hover:text-gray-100" />
          </Link> */}
            {/* <div className="flex items-center">
            <span className="text-xs font-medium text-zinc-400">21</span>
            <HiOutlineEye className="ml-2 transition-colors duration-100 ease-linear text-zinc-400 group-hover:text-gray-100" />
          </div> */}
          </div>
        </div>
      </Link>
    </div>
  );
}
