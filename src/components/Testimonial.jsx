import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const testimonials = [
  {
    name: "Kylian Bouguereau",
    position: "Pokawa Belgium",
    quote:
      "Merci à Zakaria et à son équipe pour la mise en place des cartes dans le restaurant.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "Portrait de Kylian Bouguereau, Pokawa Belgium",
  },
  {
    name: "Ikkene Amina",
    position: "CEO IKNV Beauty",
    quote:
      "Un service exceptionnel! Répond à la demande très rapidement et de manière efficace. D’ailleurs indispensable pour votre entreprise !",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "Portrait de Ikkene Amina, CEO IKNV Beauty",
  },
  {
    name: "Angelo Bulla",
    position: "CEO AL Menuiserie",
    quote:
      "J’ai fait appel à NSMobile à plusieurs reprises. Installation de caméras de surveillance, audit de mon parc informatique, gestion de mon parc informatique et maintenant, pour un site web. J'ai toujours été satisfait des services prestés et leurs honoraires sont corrects. Merci !",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "Portrait de Angelo Bulla, CEO AL Menuiserie",
  },
  {
    name: "Amel Beldjerrou",
    position: "Black and White",
    quote: "Avis en attente",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    alt: "Portrait de Amel Beldjerrou, Black and White",
  },
];

const Testimonial = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="testimonial"
      className="my-20 flex flex-col items-center justify-center md:my-32"
    >
      {/* Header */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1
          className="text-center font-urbanist text-2xl font-semibold md:text-5xl"
          aria-label="Avis des clients"
        >
          Avis
        </h1>
        <span className="text-md mt-2 px-2 font-urbanist md:mt-4 md:px-5 md:text-xl">
          L'expérience client chez NSMobile
        </span>
      </motion.div>

      {/* Testimonials Slider */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="max-w-7xl py-10"
        aria-label="Témoignages des clients"
      >
        <Swiper
          cssMode={true}
          navigation={false}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="container mx-4 h-96 rounded-xl border border-base-content/10 max-sm:max-w-sm"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide className="h-full" key={index} aria-label={`Témoignage de ${item.name}`}>
              <div className="flex h-full items-center justify-center">
                <figure className="mx-10 mt-10">
                  <blockquote className="text-center font-urbanist font-bold leading-8 text-base-content lg:text-3xl">
                    <p>“{item.quote}”</p>
                  </blockquote>
                  <div className="mt-10 flex flex-col items-center">
                    <img
                      className="mx-auto h-14 w-14 rounded-full"
                      src={item.image}
                      alt={item.alt}
                    />
                    <div className="mt-4 flex justify-center gap-2 lg:tracking-widest">
                      <div aria-label={`Nom du client : ${item.name}`}>{item.name}</div>
                      <div
                        className="text-base-content/50"
                        aria-label={`Position : ${item.position}`}
                      >
                        {item.position}
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;