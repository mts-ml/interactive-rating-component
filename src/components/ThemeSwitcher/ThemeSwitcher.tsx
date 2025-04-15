import { useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";


const TOGGLE_CLASSES =
   "text-[.70rem] font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";


const SliderToggle = () => {
   const [darkTheme, setDarkTheme] = useState(false)

   function handleThemeSwitcher() {
      setDarkTheme(prevTheme => {
         const newTheme = !prevTheme;
         const root = document.documentElement

         if (newTheme) {
            root.classList.add('dark')
         } else {
            root.classList.remove('dark')
         }

         return newTheme;
      })
   }


   return (
      <div className="absolute right-9 top-4 flex w-fit items-center rounded-full">
         <button
            className={`${TOGGLE_CLASSES} ${darkTheme ? "text-white" : "text-slate-300"
               }`}
            onClick={handleThemeSwitcher}
         >
            <FiSun className="relative z-10 text-lg md:text-sm" />
            <span className="relative z-10">Light</span>
         </button>

         <button
            className={`${TOGGLE_CLASSES} ${darkTheme ? "text-white" : "text-slate-800"
               }`}
            onClick={handleThemeSwitcher}
         >
            <FiMoon className="relative z-10 text-lg md:text-sm" />
            <span className="relative z-10">Dark</span>
         </button>
         <div
            className={`absolute inset-0 z-0 flex ${darkTheme ? "justify-end" : "justify-start"
               }`}
         >
            <motion.span
               layout
               transition={{ type: "spring", damping: 15, stiffness: 250 }}
               className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
            />
         </div>
      </div>
   );
};

export default SliderToggle;
