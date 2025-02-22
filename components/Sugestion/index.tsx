"use client";
import { motion } from "framer-motion";
import React from "react";

const SuggestionBox = () => {
  return (
  <div className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black ">
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },

        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
    // className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
    >

      <section id="suggestion" className="relative px-4 md:px-8 2xl:px-0 flex items-center justify-center">
        <div className="relative mx-auto max-w-c-1390 px-7.5 lg:px-15 l xl:px-20 w-full">
          <div className="w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black">
            <h2 className="mb-6 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2 text-center">
              Dá feedback anónimo!
            </h2>
            
            <div className="w-full flex justify-center">
              <textarea
                id="suggestion"
                name="suggestion"
                rows={5}
                placeholder="Digita aqui..."
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full bg-transparent focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
              ></textarea>
            </div>
            
            <div className="flex justify-center mt-6">
              <button
                aria-label="Enviar Mensagem"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#97321D] px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-[#97321D]"
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  </div>
  );
};

export default SuggestionBox;
