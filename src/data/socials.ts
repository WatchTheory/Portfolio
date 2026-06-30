export interface SocialLink {
  name: string;
  icon: string;
  darkIcon?: string;
  href: string;
}

export const socials: SocialLink[] = [
  {
    name: "Github",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
    href: "https://github.com/WatchTheory",
  },
  {
    name: "X",
    icon: "/social/x.svg",
    darkIcon: "/social/x-dark.svg",
    href: "https://x.com/Science4Casey",
  },
  {
    name: "Linkedin",
    icon: "/social/linkedin.svg",
    darkIcon: "/social/linkedin-dark.svg",
    href: "https://www.linkedin.com/in/kevincomaduran/",
  },
  {
    name: "Gmail",
    icon: "/social/Outlook.svg",
    href: "mailto:KComaduran3@Outlook.com",
  },
  {
    name: "CodeWars",
    icon: "/social/codewars.svg",
    href: "https://www.codewars.com/users/AlienAstronaut",
  },
];
