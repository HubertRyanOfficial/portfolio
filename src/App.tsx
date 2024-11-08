import { motion } from "framer-motion";

import { Separator } from "./components/ui/separator";

import ExternalLink from "./components/ExternalLink";
import HeaderInfo from "./components/HeaderInfo";

import TabsInfo from "./components/tabs";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <div className="w-full min-h-[100vh] flex justify-center bg-white overflow-y-auto">
        <main className="max-w-[800px] h-[750px] mt-16 px-8">
          <header>
            <div className="flex flex-row items-end justify-between">
              <motion.img
                initial={{
                  opacity: 0,
                }}
                animate={{ opacity: 1 }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="w-32 h-w-32 rounded-2xl sm:w-40 sm:h-40"
                src="https://avatars.githubusercontent.com/u/51359763?v=4"
              />
              <div className="flex flex-col items-end gap-y-2 sm:flex-row sm:gap-x-4">
                <ExternalLink
                  title="Github"
                  link="https://github.com/hubertryanofficial"
                />
                <ExternalLink
                  title="X @hubertryanoff"
                  link="https://x.com/hubertryanoff"
                />
              </div>
            </div>
            <HeaderInfo />
          </header>
          <Separator className="my-6" />
          <TabsInfo />
        </main>
      </div>
      <Toaster />
    </>
  );
}

export default App;
