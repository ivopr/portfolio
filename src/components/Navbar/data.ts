import { File, Github, User } from "lucide-react";

export const links = [
  {
    name: "about-me",
    href: "/",
    Icon: User,
  },
  {
    name: "projects",
    href: "/projects",
    Icon: File,
  },
  {
    name: "github",
    href: "https://github.com/ivopr/portfolio",
    Icon: Github,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  // {
  //   name: "posts",
  //   href: "/posts",
  //   Icon: AiOutlineFile
  // },
];
