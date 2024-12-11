import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const team = [
  {
    name: "Codega Laura",
    profile: "/images/teampicture/laura.svg",
    position: "Responsable Marketing",
    alt: "Portrait de Codega Laura, Responsable Marketing",
  },
  {
    name: "Zakaria Baaza",
    profile: "/images/teampicture/zakaria.svg",
    position: "CEO",
    alt: "Portrait de Zakaria Baaza, CEO",
  },
  {
    name: "Ahmed Bendenia",
    profile: "/images/teampicture/ahmed.svg",
    position: "Vidéaste",
    alt: "Portrait de Ahmed Bendenia, Vidéaste",
  },
  {
    name: "Yassien Yousfi",
    profile: "/images/teampicture/yassien.jpg",
    position: "Associé Jr",
    alt: "Portrait de Yassien Yousfi, Associé Jr",
  },
  {
    name: "Antoine Vansteenkiste",
    profile: "/images/teampicture/antoine.jpg",
    position: "Commercial",
    alt: "Portrait de Antoine Vansteenkiste, Commercial",
  },
  {
    name: "John Doe",
    profile: "/images/teampicture/developpement.svg",
    position: "Développeur Full Stack",
    alt: "Portrait de John Doe, Développeur Full Stack",
  },
  {
    name: "Justine F.",
    profile: "/images/teampicture/comptabilite.svg",
    position: "Comptabilité",
    alt: "Portrait de Justine F., Comptabilité",
  },
];

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="team"
      className="flex flex-col items-center justify-center"
    >
      {/* Header Section */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1
          className="font-urbanist text-center text-2xl font-semibold md:text-5xl"
          aria-label="Notre équipe"
        >
          L'Équipe
        </h1>
        <span className="text-md font-urbanist mt-4 px-2 text-center md:mt-4 md:px-5 md:text-xl">
          Une équipe qualifiée et passionnée à votre service.
        </span>
      </motion.div>

      {/* Team Members */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        aria-label="Membres de l'équipe"
      >
        {team.map((item, index) => (
          <div
            key={index}
            className="card w-80 border border-base-content/10 shadow-sm lg:w-96"
            aria-label={`Carte membre de ${item.name}`}
          >
            <figure className="lpx-10 pt-10">
              <img
                src={item.profile}
                alt={item.alt}
                className="h-44 w-44 rounded-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="font-urbanist card-title font-bold">{item.name}</h2>
              <h2 className="font-urbanist font-semibold opacity-70">
                {item.position}
              </h2>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Team;