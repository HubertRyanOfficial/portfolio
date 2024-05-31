import { motion } from "framer-motion";

import { shuffleArray } from "@/lib/arraySort";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import amazonIcon from "../../assets/amazon.svg";
import cloudIcon from "../../assets/cloud.svg";
import apolloIcon from "../../assets/apollo.svg";
import babelIcon from "../../assets/babel.svg";
import cPlusPlusIcon from "../../assets/c++.svg";
import cssIcon from "../../assets/css.svg";
import figmaIcon from "../../assets/figma.svg";
import firebaseIcon from "../../assets/firebase.svg";
import gitIcon from "../../assets/git.svg";
import graphqlIcon from "../../assets/graphql.svg";
import htmlIcon from "../../assets/html.svg";
import javascriptIcon from "../../assets/javascript.svg";
import jestIcon from "../../assets/jest.svg";
import kotlinIcon from "../../assets/kotlin.svg";
import materialUIIcon from "../../assets/materialui.svg";
import mongodbIcon from "../../assets/mongodb.svg";
import NextjsIcon from "../../assets/Nextjs.svg";
import nodeIcon from "../../assets/node.svg";
import npmIcon from "../../assets/npm.svg";
import postgresIcon from "../../assets/postgres.svg";
import pythonIcon from "../../assets/python.svg";
import reactIcon from "../../assets/react.svg";
import reactQueryIcon from "../../assets/reactquery.svg";
import reduxIcon from "../../assets/redux.svg";
import socketioIcon from "../../assets/socketio.svg";
import tailwindIcon from "../../assets/tailwind.svg";
import typescriptIcon from "../../assets/typescript.svg";
import webpackIcon from "../../assets/webpack.svg";
import xdIcon from "../../assets/xd.svg";

const MAIN_SKILLS = [
  "Data engineering",
  "Mobile development",
  "Web services",
  "Leadership",
  "Project management",
  "Communicative",
  "Data structure",
  "UI/UX designer",
  "Encryption",
  "Proactive",
  "Safety",
  "Creative",
];

const VIBRANTS = [
  "#FF5733",
  "#C70039",
  "#FFC300",
  "#DAF7A6",
  "#581845",
  "#28B463",
  "#1F618D",
  "#F39C12",
  "#8E44AD",
  "#E74C3C",
  "#FF33FF",
  "#33FF57",
  "#33FFF3",
  "#FF5733",
  "#FF33A1",
  "#33FF8E",
  "#33A1FF",
  "#A133FF",
  "#FF3380",
  "#FF6F33",
];

const TECHNOLOGIES = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "Python", icon: pythonIcon },
  { name: "C++", icon: cPlusPlusIcon },
  { name: "Kotlin", icon: kotlinIcon },
  { name: "Git", icon: gitIcon },
  { name: "Node", icon: nodeIcon },
  { name: "npm", icon: npmIcon },
  { name: "React/React Native", icon: reactIcon },
  { name: "Nextjs", icon: NextjsIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "React Query", icon: reactQueryIcon },
  { name: "Jest", icon: jestIcon },
  { name: "Webpack", icon: webpackIcon },
  { name: "Babel", icon: babelIcon },
  { name: "Tailwind", icon: tailwindIcon },
  { name: "Firebase", icon: firebaseIcon },
  { name: "MongoDB", icon: mongodbIcon },
  { name: "Postgres SQL", icon: postgresIcon },
  { name: "AWS", icon: amazonIcon },
  { name: "Google Cloud", icon: cloudIcon },
  { name: "Apollo", icon: apolloIcon },
  { name: "GraphQL", icon: graphqlIcon },
  { name: "Socket IO", icon: socketioIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "XD", icon: xdIcon },
  { name: "Material UI", icon: materialUIIcon },
];

function MainSkillItem({ text, index }: { text: string; index: number }) {
  const randomPosition = Math.round(Math.random() * VIBRANTS.length);
  const randomDegRotate = Math.round(Math.random() * 1);
  const randomDegRotateValue = Math.round(Math.random() * 5);
  const color = VIBRANTS[randomPosition];

  return (
    <motion.div
      drag
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
        transition: {
          delay: index / 20,
          type: "spring",
          damping: 8,
        },
      }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      whileHover={{
        scale: 1.1,
      }}
      whileDrag={{
        borderWidth: 1,
      }}
      transition={{
        type: "spring",
        damping: 6,
        velocity: 0.5,
      }}
      className="px-4 py-2 rounded-2xl bg-white shadow-sm cursor-default self-start"
      style={{
        rotate: `${randomDegRotate ? "" : "-"}${randomDegRotateValue}deg`,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {text}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <TooltipProvider>
      <div className="pb-8">
        <div className="flex flex-row flex-wrap gap-x-4 gap-y-2">
          {shuffleArray(MAIN_SKILLS).map((item, index) => (
            <MainSkillItem key={index} text={item} index={index} />
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">
          Click and hold to animate
        </p>
        <h2 className="text-lg sm:text-xl font-medium my-6">
          Technology Stack
        </h2>
        <div className="flex flex-row flex-wrap gap-4">
          {TECHNOLOGIES.map((tech, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <motion.img
                  whileHover={{
                    scale: 1.1,
                  }}
                  className="w-[50px] h-[50px]"
                  src={tech.icon}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
