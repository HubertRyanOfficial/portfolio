import { ExternalLinkIcon } from "lucide-react";

export default function ExternalLink({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  return (
    <a
      className="text-sm text-black font-medium hover:underline flex flex-row items-center"
      href={link}
      target="_blank"
    >
      {title}
      <ExternalLinkIcon width={18} className="ml-2" />
    </a>
  );
}
