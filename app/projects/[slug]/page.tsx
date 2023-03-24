import Link from "next/link"

import { useMDXComponent } from "next-contentlayer/hooks"

import { MdOutlineKeyboardBackspace } from "react-icons/md"

import { ProjectProps } from "types"
import { components } from "@/ui/components/MDXComponents"
import { allProjects } from "contentlayer/generated"

import { FaGooglePlay } from "react-icons/fa"
import { Github as GithubIcon, Link as LinkIcon } from "lucide-react"
import Seo from "@/ui/Seo"
import Image from "next/image"

interface PageParams {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageParams) {
  const project = allProjects.find((p: ProjectProps) => p.slug === params.slug)

  return {
    title: `${project?.title} • Projetos`,
  }
}

export default function Page({ params }: PageParams) {
  const project = allProjects.find((p: ProjectProps) => p.slug === params.slug)

  const MDXContent = useMDXComponent(project ? project.body.code : "")

  if (!project) {
    return <>ROLA</>
  }

  return (
    <section className="mx-auto max-w-2xl px-2 pt-10">
      <Seo title={project.title} />
      <Link
        href="/projects"
        className="group inline-flex rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
      >
        <MdOutlineKeyboardBackspace className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100" />
      </Link>
      <div className="pt-5">
        <div className="flex items-center justify-between">
          <h2 className="leading-tighter mt-3 max-w-2xl text-3xl font-extrabold tracking-tighter md:text-5xl">
            {project?.title}
          </h2>
          <div className="flex gap-x-2 items-center pt-2">
            {project?.githubLink ? (
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="group rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
              >
                <GithubIcon
                  size={20}
                  className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100"
                />
              </Link>
            ) : null}
            {project?.liveLink ? (
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="group rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
              >
                <LinkIcon
                  size={20}
                  className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100"
                />
              </Link>
            ) : null}
            {project?.googlePlayLink ? (
              <Link
                href={project.googlePlayLink}
                target="_blank"
                rel="noreferrer"
                className="group rounded bg-gray-1001 p-2 transition-colors duration-100 ease-linear hover:bg-gray-1001/70"
              >
                <FaGooglePlay
                  size={20}
                  className="text-gray-one transition-colors duration-100 ease-linear group-hover:text-gray-100"
                />
              </Link>
            ) : null}
          </div>
        </div>
        <p className="mx-auto my-3 max-w-2xl text-base font-medium italic leading-snug tracking-tighter text-gray-one md:text-lg">
          {project?.description}
        </p>
        {project?.image ? (
          <Image
            src={project.image}
            alt={project?.imageAlt ?? "Project Image"}
            className="aspect-square h-[256px] w-full rounded object-cover"
            height={0}
            width={0}
            sizes="100vw"
            loading="lazy"
          />
        ) : null}
        <div className="mx-auto mt-8 grid max-w-4xl text-gray-one">
          <MDXContent
            components={{
              ...components,
            }}
          />
        </div>
      </div>
    </section>
  )
}
