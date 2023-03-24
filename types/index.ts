import type { Icon } from "lucide-react"

export type NavItem = {
  title: string
  href: string
  isExternal?: boolean
  disabled?: boolean
  icon?: Icon
}

export type CardProps = {
  src?: any | string
  alt: string
  githubUrl?: string
  liveUrl?: string
  title: string
  description?: string
}

export type PostProps = {
  _id: string
  title: string
  slug: string
  description?: string
  image?: string
  imageAlt?: string
  body: {
    code: string
    raw?: string
  }
  status?: string
  headings?: string[]
  tweetIds?: string[]
  publishedAt?: string
  publishedAtFormatted?: string
}

export type ProjectProps = PostProps & {
  githubLink?: string
  liveLink?: string
  googlePlayLink?: string
}
