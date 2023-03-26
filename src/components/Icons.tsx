import { IconType } from "react-icons";
import { GiSaberToothedCatHead } from "react-icons/gi";
import {
  RiArrowLeftLine,
  RiCloseFill,
  RiGithubFill,
  RiGooglePlayFill,
  RiLink
} from "react-icons/ri";

export type Icon = IconType;

export const Icons = {
  Close: RiCloseFill,
  Github: RiGithubFill,
  GooglePlay: RiGooglePlayFill,
  GoBack: RiArrowLeftLine,
  Link: RiLink,
  Logo: GiSaberToothedCatHead
};
