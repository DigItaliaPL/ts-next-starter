import { EPageType, ERobotsContent, TMetaTags } from "../interfaces";
import { concatenateStrings } from "./helper";

export const defaultMetaTags: TMetaTags = {
  canonical: "https://www.jr3.it",
  description: "Fullstack Web Developer",
  image: "https://www.jr3.it/image.png",
  robots: concatenateStrings(ERobotsContent.index, ERobotsContent.follow),
  title: "Danilo JR3 Panaro",
  type: EPageType.website
};

export const defaultMenuItems = [
  { name: "Link 1", link: "#" },
  {
    name: "Link 2",
    link: "#",
    children: [
      { name: "Link 2a", link: "#" },
      { name: "Link 2b", link: "#" }
    ]
  },
  {
    name: "Link 3",
    link: "#",
    children: [
      { name: "Link 3a", link: "#" },
      { name: "Link 3b", link: "#" }
    ]
  }
];
