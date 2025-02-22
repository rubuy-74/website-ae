"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ScheduleTable from "../Table";
import { InfoSection } from "@/types/infoSection";



interface InfoProps {
  sections: InfoSection[];
}

const Info: React.FC<InfoProps> = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => (
        <section key={section.id} className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
            <div
              className={`flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-32.5 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
              >
                <Image
                  src={section.imageSrc}
                  alt={section.title}
                  layout="fill"
                  objectFit="contain"
                  className="dark:hidden"
                />
                <Image
                  src={section.imageSrc}
                  alt={section.title}
                  layout="fill"
                  objectFit="contain"
                  className="hidden dark:block"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? 20 : -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="md:w-1/2"
              >
                <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                  {section.title}
                </h2>
                <span className="font-medium uppercase text-black dark:text-white">
                  {section.subtitle}
                </span>
                {section.text && (
                  <p className="mb-4">
                    {section.text}
                  </p>
                )}
                {section.phone && (
                  <div>
                    <strong>Telefone:</strong> <a href={`tel:+351${section.phone}`}>{section.phone}</a>
                  </div>
                )}
                {section.email && (
                  <div>
                    <strong>Email:</strong> <a href={`mailto:${section.email}`}>{section.email}</a>
                  </div>
                )}
                {section.schedule && <ScheduleTable data={section.schedule} />}
                {section.link && (
                  <div>
                    <Link
                      href={`/${section.link.path ? section.link.path + "/" : "" }`}
                      rel="noopener noreferrer"
                      className="flex items-center w-fit py-2 px-4 rounded-lg transition-all duration-300 gap-5 bg-primary text-white hover:shadow-lg"
                    >
                      <span className="duration-300">{section.link.text}</span>
                      {section.link.showIcon && section.link.icon}
                    </Link>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Info;
