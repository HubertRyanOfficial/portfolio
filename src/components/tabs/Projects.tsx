import { ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";

import {
  LINKS_TYPES,
  OPEN_SOURCE_PROJECTS,
  PROJECTS,
} from "@/constants/projects";
import { Separator } from "../ui/separator";

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
      className="bg-gray-50 text-black font-medium text-xs px-4 py-1 rounded-xl hover:bg-gray-200 flex flex-row items-center transition-all"
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
  icon,
}: {
  title: string;
  description: string | React.ReactNode | React.ReactNode[];
  date?: string;
  links?: {
    type: keyof typeof LINKS_TYPES;
    link: string;
  }[];
  icon?: any;
}) {
  return (
    <div>
      {date && <p className="text-sm mb-2 italic text-gray-600">{date}</p>}
      <div className="flex flex-row items-start p-3 rounded-xl hover:bg-gray-50 transition-all">
        {icon && (
          <motion.img
            whileHover={{
              scale: 1.1,
            }}
            src={icon}
            className="w-[80px] h-[80px] cursor-default object-contain"
          />
        )}
        <div className="ml-4">
          <span className="text-lg text-black font-medium">{title}</span>
          <p className="text-base text-black font-normal mt-2 max-w-[500px]">
            {description}
          </p>
          {links && (
            <div className="flex flex-row flex-wrap items-center gap-4 mt-2">
              {links.map((linkItem, index) => (
                <LinkItem
                  key={index}
                  type={linkItem.type}
                  link={linkItem.link}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="flex flex-col pb-8">
      {PROJECTS.map((item, index) => (
        <>
          <ProjectItem
            key={index}
            title={item.title}
            description={item.description}
            links={item.links}
            icon={item.icon}
          />
          {index < PROJECTS.length - 1 && <Separator className="my-6" />}
        </>
      ))}
      <h2 className="text-xl text-black font-medium my-8">
        Open Source Projects
      </h2>
      {OPEN_SOURCE_PROJECTS.map((item, index) => (
        <>
          <ProjectItem
            key={index}
            title={item.title}
            description={item.description}
            links={item.links}
            icon={item.icon}
          />
          {index < PROJECTS.length - 1 && <Separator className="my-6" />}
        </>
      ))}
    </div>
  );
}
