import { ExternalLinkIcon } from "lucide-react";

const LINKS_TYPES = {
  x: "X (Twitter)",
  website: "Visit website",
  instagram: "Instagram",
};

const PROJECTS: {
  title: string;
  description: string;
  links: {
    type: keyof typeof LINKS_TYPES;
    link: string;
  }[];
}[] = [
  {
    title: "Tapedin",
    description:
      "A social media app released in 2019 focused on sharing moments, receiving real reactions from people.",
    links: [
      {
        type: "website",
        link: "https://tapedin.com.br",
      },
      {
        type: "x",
        link: "https://x.com/tapedin",
      },
      {
        type: "instagram",
        link: "https://instagram.com/tapedin",
      },
    ],
  },
  {
    title: "Cloudsky",
    description:
      "Cloudsky is a password manager with end-to-end encryption built in 2023 and released in 2024.",
    links: [
      {
        type: "website",
        link: "https://cloudsky.app/en",
      },
      {
        type: "x",
        link: "https://x.com/cloudskyapp",
      },
    ],
  },
  {
    title: "Sixcry",
    description:
      "Sixcry is an encryption service based on a unique hexadecimal code, its first model being called Sixcry One (Cloudsky is the first internet service using Sixcry) and it was developed in 2023.",
    links: [
      {
        type: "website",
        link: "https://sixcry.com",
      },
      {
        type: "x",
        link: "https://x.com/six6cry",
      },
    ],
  },
];

function LinkItem({
  type,
  link,
}: {
  type: keyof typeof LINKS_TYPES;
  link: string;
}) {
  return (
    <a
      href={link}
      className="bg-gray-50 text-black font-medium text-xs px-4 py-1 rounded-xl hover:bg-gray-50 flex flex-row items-center"
      target="_blank"
    >
      {LINKS_TYPES[type]}
      <ExternalLinkIcon width={15} className="ml-2" />
    </a>
  );
}

export function ProjectItem({
  date,
  title,
  description,
  links,
}: {
  title: string;
  description: string | React.ReactNode | React.ReactNode[];
  date?: string;
  links?: {
    type: keyof typeof LINKS_TYPES;
    link: string;
  }[];
}) {
  return (
    <div>
      {date && <p className="text-sm mb-2 italic text-gray-600">{date}</p>}
      <h2 className="text-lg text-black font-medium">{title}</h2>
      <p className="text-base text-black font-normal mt-2 max-w-[500px]">
        {description}
      </p>
      {links && (
        <div className="flex flex-row flex-wrap items-center gap-4 mt-2">
          {links.map((linkItem, index) => (
            <LinkItem key={index} type={linkItem.type} link={linkItem.link} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-6 pb-8">
      {PROJECTS.map((item, index) => (
        <ProjectItem
          key={index}
          title={item.title}
          description={item.description}
          links={item.links}
        />
      ))}
    </div>
  );
}
