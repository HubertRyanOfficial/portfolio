import TapedinLogo from "@/assets/brands/tapedin.png";
import SixcryLogo from "@/assets/brands/sixcry.svg";
import CloudskyLogo from "@/assets/brands/cloudsky.svg";

import OpxLogo from "@/assets/brands/opx.png";
import BetweenPages from "@/assets/brands/between-pages.png";
import RNPersisted from "@/assets/brands/react-native-persisted.jpeg";
import Gemini from "@/assets/brands/gemini.jpeg";

type Project = {
  title: string;
  description: string;
  links: {
    type: keyof typeof LINKS_TYPES;
    link: string;
  }[];
  icon: any;
};

export const LINKS_TYPES = {
  x: "X (Twitter)",
  website: "Visit website",
  github: "Visit respository",
  instagram: "Instagram",
};

export const PROJECTS: Project[] = [
  {
    title: "Tapedin - Social media app",
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
    icon: TapedinLogo,
  },
  {
    title: "Cloudsky - Password manager",
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
    icon: CloudskyLogo,
  },
  {
    title: "Sixcry - Encryption service",
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
    icon: SixcryLogo,
  },
];

export const OPEN_SOURCE_PROJECTS: Project[] = [
  {
    title: "Opx Browser - Mobile browser",
    description:
      "Opx Browser is a open source mobile browser. The goal with this project is delivery the best experience using and exploring the web as an open source project.",
    icon: OpxLogo,
    links: [
      {
        type: "github",
        link: "https://github.com/opxbrowser",
      },
    ],
  },
  {
    title: "Between Pages - Animation library (React Native)",
    description:
      "A library to help the developers animate and improve the user experience when is moved between pages with animations on react native apps.",
    icon: BetweenPages,
    links: [
      {
        type: "github",
        link: "https://github.com/HubertRyanOfficial/between-pages/",
      },
    ],
  },
  {
    title: "React Native Persist - Library (React Native)",
    description:
      "A library to help your context being persisted in your react native apps. The usePersist hook is a useful tool for storing and persisting state data in a React Native application using contexts API.",
    icon: RNPersisted,
    links: [
      {
        type: "github",
        link: "https://github.com/HubertRyanOfficial/react-native-persist-context",
      },
    ],
  },
  {
    title: "Google Gemini App (Clone) - AI App",
    description:
      "Google Gemini App Clone is designed to bring advanced AI capabilities and conversational intelligence to a mobile interface. Built with Expo and leveraging powerful tools like the Gemini 1.5 Flash AI model and Vertex AI API, this clone app aims to replicate the most essential features of the original Google Gemini App, providing users with a seamless and intelligent experience.",
    icon: Gemini,
    links: [
      {
        type: "github",
        link: "https://github.com/HubertRyanOfficial/google-gemini-app-clone",
      },
    ],
  },
];
