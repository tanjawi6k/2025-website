import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="contactus"
      className="mt-20"
    >
      {/* Section Header */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex w-full flex-col justify-center"
      >
        <h1
          className="text-center font-urbanist text-2xl font-semibold md:text-5xl"
          aria-label="Nous contacter"
        >
          Nous contacter
        </h1>
        <span className="text-md mt-2 px-2 text-center font-urbanist md:mt-4 md:px-5 md:text-xl">
          L'innovation technologique au bout d'un clic
        </span>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mx-auto px-6 py-10"
      >
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <div className="lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-center">
            <div className="mt-6 space-y-8 md:mt-8">
              {/* Address */}
              <p className="-mx-2 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-base-400 mx-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span
                  className="mx-2 w-72 truncate font-urbanist text-base-content"
                  aria-label="Adresse : Rue de l'aumônerie 7, 6061 Montignies-sur-Sambre"
                >
                  Rue de l'aumônerie 7, 6061 Montignies-sur-Sambre
                </span>
              </p>

              {/* Phone */}
              <p className="-mx-2 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-base-400 mx-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span
                  className="mx-2 w-72 truncate font-urbanist text-base-content"
                  aria-label="Téléphone : +32 (0)71.94.23.24"
                >
                  +32 (0)71.94.23.24
                </span>
              </p>

              {/* Email */}
              <p className="-mx-2 flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-base-400 mx-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span
                  className="mx-2 w-72 truncate font-urbanist text-base-content"
                  aria-label="Email : info@nsmobile.be"
                >
                  info@nsmobile.be
                </span>
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-base-400">Suivez-nous</h3>
              <div className="-mx-1.5 mt-4 flex">
                <a
                  className="btn mx-1.5 rounded-full bg-base-100"
                  href="https://be.linkedin.com/company/nsmobile"
                  aria-label="Lien vers LinkedIn NSMobile"
                >
                  {/* LinkedIn SVG */}
                </a>
                <a
                  className="btn mx-1.5 rounded-full bg-base-100"
                  href="https://www.facebook.com/NSMobileBE"
                  aria-label="Lien vers Facebook NSMobile"
                >
                  {/* Facebook SVG */}
                </a>
                <a
                  className="btn mx-1.5 rounded-full bg-base-100"
                  href="https://www.instagram.com/nsmobile_be/"
                  aria-label="Lien vers Instagram NSMobile"
                >
                  {/* Instagram SVG */}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card mt-8 lg:mx-6 lg:w-1/2">
            <div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl">
              <h1 className="card-title">Faites-nous connaître vos besoins</h1>
              <form className="mt-6">
                <div className="flex-1">
                  <label htmlFor="name" className="mb-2 block text-sm">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    autoComplete="name"
                    type="text"
                    placeholder="Votre nom complet"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="mt-6 flex-1">
                  <label htmlFor="email" className="mb-2 block text-sm">
                    Adresse email
                  </label>
                  <input
                    id="email"
                    autoComplete="email"
                    type="email"
                    placeholder="abcd@example.be"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="mt-6 w-full">
                  <label htmlFor="message" className="mb-2 block text-sm">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    autoComplete="message"
                    className="textarea textarea-bordered w-full"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <button
                  className="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300"
                  type="submit"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center py-10 font-urbanist text-sm lg:text-lg">
        <h1>© 2024 NSMobile. Tous droits réservés. </h1>
      </div>
    </motion.section>
  );
};

export default Contact;