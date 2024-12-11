import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const team = [
  {
    name: "Codega Laura",
    profile: "/images/teampicture/laura.svg",
    position: "Responsable Marketing",
  },
  {
    name: "Zakaria Baaza",
    profile: "/images/teampicture/zakaria.svg",
    position: "CEO",
  },
  {
    name: "Ahmed Bendenia",
    profile: "/images/teampicture/ahmed.svg",
    position: "Vidéaste",
  },
  {
    name: "Yassien Yousfi",
    profile: "/images/teampicture/yassien.jpg",
    position: "Associé Jr",
  },
  {
    name: "Antoine vansteenkiste",
    profile: "/images/teampicture/antoine.jpg",
    position: "Commercial",
  },
  {
    name: "Jhon Doe",
    profile: "/images/teampicture/developpement.svg",
    position: "Devellopeur Full Stack",
  },
  {
    name: "Justine F.",
    profile: "/images/teampicture/comptabilite.svg",
    position: "Comptabilité",
  },
]

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="team"
      className="flex flex-col items-center justify-center">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center">
        <h1 className="font-urbanist text-center text-2xl font-semibold md:text-5xl">L'Équipe</h1>
        <span className="text-md font-urbanist mt-4 px-2 text-center md:mt-4 md:px-5 md:text-xl">
          Une équipe qualifiée et passionnée à votre service.
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {team.map((item, index) => (
          <div key={index} className="card w-80 border border-base-content/10 shadow-sm lg:w-96">
            <figure className="lpx-10 pt-10">
              <img src={item.profile} alt="Shoes" className="h-44 w-44 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="font-urbanist card-title font-bold">{item.name}</h2>
              <h2 className="font-urbanist font-semibold opacity-70">{item.position}</h2>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Team
