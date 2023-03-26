import { allProjects } from "contentlayer/generated";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

import { BlurImage } from "@app/components/BlurImage";
import { GoBackButton } from "@app/components/GoBackButton";
import { Icons } from "@app/components/Icons";
import { HeaderSEO } from "@app/components/Layout/HeaderSEO";
import { components } from "@app/components/MDX/MDXComponents";

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allProjects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      project: allProjects.find((p) => p.slug === params?.slug)
    }
  };
};

export default function Page({ project }: { project: ProjectProps }) {
  const MDXContent = useMDXComponent(project ? project.body.code : "");

  return (
    <>
      <HeaderSEO
        title={project.title}
        description={project.description}
        ogImage={`title=${project.title}&type=project&image${
          project.image?.split("/")[2]
        }`}
      />
      <GoBackButton />
      <div className="mt-5 flex items-center justify-between">
        <h2 className="leading-tighter mt-3 max-w-2xl text-3xl font-extrabold tracking-tighter md:text-5xl">
          {project.title}
        </h2>
        <div className="flex items-center gap-x-2 pt-2">
          {project.githubLink ? (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className="group rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
            >
              <Icons.Github
                size={20}
                className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100"
              />
            </Link>
          ) : null}
          {project.liveLink ? (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="group rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
            >
              <Icons.Link
                size={20}
                className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100"
              />
            </Link>
          ) : null}
          {project.googlePlayLink ? (
            <Link
              href={project.googlePlayLink}
              target="_blank"
              rel="noreferrer"
              className="group rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
            >
              <Icons.GooglePlay
                size={20}
                className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100"
              />
            </Link>
          ) : null}
        </div>
      </div>
      <p className="mx-auto my-3 max-w-2xl text-base font-medium italic leading-snug tracking-tighter text-gray-one md:text-lg">
        {project.description}
      </p>
      {project.image ? (
        <BlurImage
          src={project.image}
          alt={project?.imageAlt ?? "Project Image"}
          className="max-h-[256px] w-full rounded object-contain"
          height={0}
          width={0}
          sizes="100vw"
          loading="lazy"
        />
      ) : null}
      <div className="mx-auto mt-8 grid max-w-4xl text-gray-one">
        <MDXContent
          components={{
            ...components
          }}
        />
      </div>
    </>
  );
}
