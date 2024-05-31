import { memo } from "react";

import { motion } from "framer-motion";

const HeaderInfo = memo(() => {
  return (
    <div className="mt-6">
      <h1 className="text-base font-medium sm:text-lg">@hubertryan</h1>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
        }}
        className="mt-4 text-2xl text-gray-400 sm:text-3xl"
      >
        Hi, I'm fullstack developer, UI/UX designer and musician from Brazil. 🇧🇷
      </motion.p>
    </div>
  );
});

export default HeaderInfo;
