import { Separator } from "../ui/separator";
import { ProjectItem } from "./Projects";

const EXPERIENCES = [
  {
    date: "June/2024 - Oct/2024",
    title: "UEX Technology - Front-end developer (Brazil)",
    description: (
      <>
        Responsible for developing web applications using React JS & Next JS,
        focusing on creating efficient and scalable user interfaces.Performed
        maintenance and bug fixes on existing applications to ensure stability
        and enhance performance.
        <br />
        <br />
        Developed new features to meet project requirements and improve user
        experience. Participated in alignment meetings with the development team
        to coordinate efforts and ensure project goals are met.
        <br />
        <br />
        Conducted code reviews to enforce best development practices and
        maintain high code quality. Contributed innovative ideas and solutions
        to enhance project outcomes.
        <br />
        <br />
        Created technical documentation for developed projects to ensure clarity
        and facilitate future maintenance.Stayed updated with the latest market
        trends and technologies to continuously improve development
        processes.Engaged in other related activities as required by the role.
      </>
    ),
  },
  {
    date: "June/2023 - Jan/2024",
    title: "Sidea Technology - Software Engineer (Brazil)",
    description: (
      <>
        Responsible for developing mobile application using React Native, Java
        and Objective-C for managing crypto wallets. Use native languages such
        as Kotlin and objective-c to create native modules where within React
        Native there is a certain limitation. For example, feeding background
        microservices.
        <br />
        <br />I worked on Api development using Node JS, PostgresSQL and Express
        to be run within the app, providing a better user experience using the
        Mobile-First strategy. <br />
        <br />
        Also responsible for CI/CD research and application in mobile
        applications using AppCenter and Actions within Bitbucket.
      </>
    ),
  },
  {
    date: "September/2021 - January/2023",
    title: "DevMaker - Mobile IOS e Android Engineer (Brazil)",
    description: (
      <>
        Devmaker is a software house that builds customized systems for all
        kinds of businesses. Tasked with the development of mobile applications
        with Expo (React Native) and GraphQL for many clients in Brazil, such as
        Roit Bank, Ponto Mais, Rightee, and others. <br />
        <br />
        Building new systems using React Native (Expo). Doing maintenance work
        and building new features on existing systems using Javascript. <br />
        <br />
        Creating beautiful interfaces in applications using Tailwind CSS as
        styles framework.
      </>
    ),
  },
  {
    date: "March/2021 - August/2021",
    title: "CRP Technology - Mobile Engineer (Brazil)",
    description:
      "In charge of building mobile apps for internal company purposes, using Flutter. Building new features and providing maintenance using Dart.",
  },
  {
    date: "January/2018 - January/2020",
    title:
      "Federal Institute of Education, Science and Technology of Sergipe - Software Programming monitor (Brazil)",
    description: (
      <>
        While I was studying computer assembly, I was invited to teach
        programming to the other students in the institute. I could share my
        skills in web-development and website creation and test. <br />
        <br />
        In 2018, I joined the institute to be a student but I ended up being a
        monitor for other students and in parallel I did projects and presented
        code corrections with the professors.
      </>
    ),
  },
];

export default function WorkExperiencies() {
  return (
    <div className="flex flex-col pb-8">
      {EXPERIENCES.map((item, index) => (
        <>
          <ProjectItem
            key={index}
            date={item.date}
            title={item.title}
            description={item.description}
          />
          {index < EXPERIENCES.length - 1 && <Separator className="my-6" />}
        </>
      ))}
    </div>
  );
}
