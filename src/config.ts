import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.jedi-ops.dev/", // replace this with your deployed domain
  author: "Jedi Labs",
  profile: "https://jedi-ops.dev/",
  desc: "A research and product studio focused on enabling small and agile teams to have NextGen and enterprise level experiences.",
  title: "Jedi Labs",
  ogImage: "assets/logo.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/jedi-ops",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/jediops",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  }
];
