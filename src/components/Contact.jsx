import { motion } from 'framer-motion'

import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div name="contact" className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Contactez-Moi
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="py-6 text-center tracking-tight"
      >
        Remplissez ce formulaire pour me contacter
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center"
      >
        <form
          action="https://getform.io/f/bkkkerdb"
          method="POST"
          className="flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Entrez votre nom"
            className="p-2 bg-transparent border rounded-md text-neutral-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Entrez votre e-mail"
            className="my-4 p-2 bg-transparent border rounded-md text-neutral-400 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Entrez votre message"
            rows="10"
            className="p-2 bg-transparent border rounded-md text-neutral-400 focus:outline-none"
          ></textarea>
          <button className="text-gradient-to-r from-pink-300 via-slate-500 to-purple-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 border">
            Envoi
          </button>
        </form>
      </motion.div>
      <div className="text-center tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="mailto:ouali_k@etna-alternance.net" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  )
}

export default Contact
