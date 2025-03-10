"use client";

import { Association } from "@/payload-types";
import { motion } from "framer-motion";
import { AssociationCard } from "./AssociationCard";

interface Props {
    associations: Association[];
}

const AssociationsClientPage = ({ associations } : Props) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    const aefeup_associations = associations
        .filter(association => association.in_aefeup)
        .sort((a, b) => a.name.localeCompare(b.name));

    const feup_associations = associations
        .filter(association => !association.in_aefeup)
        .sort((a, b) => a.name.localeCompare(b.name));

    const drawAssociations = (associations: Association[]) => {
        return (
            <div className="flex justify-center items-center mt-10">
                <div className="flex flex-wrap justify-center items-center mx-auto gap-20">
                    {associations.map((association, index) => {
                        return (
                            <AssociationCard association={association} key={index} />
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <main className="py-20 lg:py-25 xl:py-30">

            <section>
                { aefeup_associations.length > 0 && (
                    <motion.section
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <h1 className="mx-auto text-center mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                            Núcleos da AEFEUP
                        </h1>
                        {drawAssociations(aefeup_associations)}
                    </motion.section>
                )}

                {
                    feup_associations.length > 0 && (
                <motion.section
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { delay: aefeup_associations.length * 0.1 + 0.5 }
                        },
                    }}
                >
                    <h1 className="mx-auto text-center mb-4 mt-10 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
                        Núcleos e Associações da FEUP
                    </h1>
                    {drawAssociations(feup_associations)}
                </motion.section>
                )}
            </section>
        </main>
    );
};

export default AssociationsClientPage;
