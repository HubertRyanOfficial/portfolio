import { memo } from "react";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Copy, Send } from "lucide-react";
import { useToast } from "./ui/use-toast";

const HeaderInfo = memo(() => {
  const { toast } = useToast();

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-medium sm:text-3xl lg:text-4xl">
        Hubert Ryan
      </h1>
      <div className="flex items-center justify-end">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
          }}
          className="mt-4 text-lg text-black sm:text-xl lg:text-2xl"
        >
          Hi, I'm Software Engineer, UI/UX designer and musician.
        </motion.p>
        <div className="mt-2 flex flex-row justify-end gap-x-2">
          <Button
            onClick={() =>
              window.location.assign("mailto:hubertryanofficial@gmail.com")
            }
          >
            <Send className="mr-2 w-[20px]" /> Get in touch
          </Button>
          <Button
            variant="ghost"
            onClick={() => {
              navigator.clipboard.writeText("contact@sixcry.com");
              toast({
                title: "E-mail address copied.",
                description: "Waiting for you contact.",
                variant: "default",
              });
            }}
          >
            <Copy />
          </Button>
        </div>
      </div>
    </div>
  );
});

export default HeaderInfo;
