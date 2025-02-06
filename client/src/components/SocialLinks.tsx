import { Card } from "@/components/ui/card";
import { SiGithub, SiGitlab, SiMastodon, SiMatrix, SiSteam, SiTelegram } from "react-icons/si";

const links = [
  {
    name: "Telegram",
    icon: SiTelegram,
    url: "https://t.me/username", // Replace with actual username
  },
  {
    name: "Matrix",
    icon: SiMatrix,
    url: "https://matrix.to/#/@username:matrix.org", // Replace with actual Matrix ID
  },
  {
    name: "Steam",
    icon: SiSteam,
    url: "https://steamcommunity.com/id/username", // Replace with actual Steam ID
  },
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/username", // Replace with actual username
  },
  {
    name: "GitLab",
    icon: SiGitlab,
    url: "https://gitlab.com/username", // Replace with actual username
  },
  {
    name: "Mastodon",
    icon: SiMastodon,
    url: "https://mastodon.social/@username", // Replace with actual Mastodon handle
  },
];

export function SocialLinks() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block transform transition-all duration-300 hover:scale-105"
        >
          <Card className="group flex h-24 items-center justify-center gap-3 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:bg-primary/20 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]">
            <link.icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white" />
            <span className="font-mono text-lg text-primary transition-all duration-300 group-hover:text-white">
              {link.name}
            </span>
          </Card>
        </a>
      ))}
    </div>
  );
}
