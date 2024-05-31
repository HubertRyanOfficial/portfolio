import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";
import WorkExperiencies from "./WorkExperiencies";

export default function TabsInfo() {
  return (
    <Tabs defaultValue="projects" className="w-full">
      <TabsList className="mb-8 flex-wrap sm:flex-nowrap sm:mb-6">
        <TabsTrigger value="projects">Projects</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="about">About</TabsTrigger>
        <TabsTrigger value="work">Work Experience</TabsTrigger>
      </TabsList>
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
      <TabsContent value="about">
        <About />
      </TabsContent>
      <TabsContent value="skills">
        <Skills />
      </TabsContent>
      <TabsContent value="work">
        <WorkExperiencies />
      </TabsContent>
    </Tabs>
  );
}
