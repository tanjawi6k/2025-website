import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const services = [
  {
    name: "Maintenance",
    icon: "../../images/icons/digitalmarketing.png",
    description:
      "Ordinateur, mobile de livraison ou téléphone de société, nous sommes là pour en assurer le bon fonctionnement !",
  },
  {
    name: "Service Web",
    icon: "../../images/icons/webdevelopment.png",
    description:
      "À la recherche d’un site web dernier cri, d’une application légère et innovante ? Nous nous engageons à vous fournir le meilleur !",
  },
  {
    name: "Service NFC",
    icon: "../../images/icons/socialmedia.png",
    description:
      "NSMobile développe des solutions NFC pour l’horeca, la logistique et le marketing, incluant Tech Cards, gestion de stock, et cartes de visite connectées.",
  },
  {
    name: "Sécurité",
    icon: "../../images/icons/appdevelopment.png",
    description:
      "NSMobile installe des systèmes de surveillance par caméras de dernière génération. Elles offrent une précision exceptionnelle pour des détails nets.",
  },
]
const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="services"
      className="mt-10 flex flex-col items-center justify-center md:mt-20">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center">
        <h1 className="font-urbanist text-center text-2xl font-semibold md:text-5xl">
          Nos Services
        </h1>
        <span className="text-md font-urbanist mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">
        Optimisez vos performances et atteignez vos objectifs grâce à notre expertise.
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mt-10 grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item, index) => (
          <div
            key={index}
            className="card max-w-2xl  shadow-sm transition duration-300 hover:-translate-y-1">
            <div className="card-body">
              <div className="h-16 w-16 rounded-full bg-gradient-to-t from-base-300/20 to-base-content/10">
                <img className="p-4" src={item.icon} />
              </div>
              <h2 className="font-urbanist card-title text-3xl font-black">{item.name}</h2>
              <p className="text-md font-urbanist font-medium opacity-60">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
