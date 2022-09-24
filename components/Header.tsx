import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [text, count] = useTypewriter({
    words: ["Biginer", "Fun!", "Developer", "Architect", "Designer", "2022"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <div className="max-w-7xl mx-auto flex-col min-h-screen py-20 px-10 2xl:px-0">
        <div className="">
          <div className="flex justify-center text-9xl font-semibold z-50">
            <div className="wrapper">
              <h1>JavaScript For</h1>
            </div>
          </div>
          <div className="flex justify-center text-7xl mt-4 text-gray-600 font-mono">
            <h3>{text}</h3>
            <Cursor cursorColor="#F7AB0A" />
          </div>
          <div className="flex justify-center mt-10 -ml-5">
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="w-26 z-50 only:inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out rounded-full"
            >
              Sign Up For Free
            </button>
          </div>
          <div className="absolute space-x-8 -mt-40">
            <motion.img
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              src="https://pngimg.com/uploads/mario/mario_PNG60.png"
              style={{ width: "130px" }}
              className="z-50"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-8 -mt-40">
          <motion.img
            initial={{
              x: 200,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://www.freepnglogos.com/uploads/mario-png/mario-png-super-smash-bros-full-roster-leak-wiiu-10.png"
            style={{ width: "130px" }}
            className="z-50"
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
