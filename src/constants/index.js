import project1 from '../assets/projects/project1.png'
import project2 from '../assets/projects/project2.png'
import project3 from '../assets/projects/project3.png'
import project4 from '../assets/projects/project4.png'

export const HERO_CONTENT = `Passionné par le développement d'applications, je prépare ma transition vers l'alternance, où je mettrai à profit mes compétences en conception et développement pour créer des solutions innovantes et adaptées aux besoins des utilisateurs.`

export const ABOUT_TEXT = `Je suis étudiant en Bachelor Concepteur Développeur d'Applications, passionné par le développement web et l'innovation numérique. Mon parcours m’a permis d’acquérir des compétences solides dans la conception et le développement d'applications, et je me spécialise particulièrement dans l'écosystème JavaScript, avec une forte appétence pour React et Node.js.

Ma maîtrise de la stack MERN (MongoDB, Express, React, Node.js) me permet de créer des applications web modernes, performantes et scalables. J'ai également une expérience avec Next.js, qui m'a permis de développer des applications React côté serveur, optimisées pour le SEO et la performance. À côté de cela, j'apprécie aussi travailler avec Symfony et PHP, que j’utilise pour développer des backends robustes et bien structurés.

Je suis en recherche active d'une alternance afin de mettre en pratique mes compétences dans un cadre professionnel et participer à la création de solutions numériques concrètes. Mon objectif est de continuer à me perfectionner en développement tout en étant impliqué dans des projets réels, afin d’apporter des solutions techniques adaptées aux besoins des utilisateurs.`

export const LINKS = [
  {
    id: 1,
    name: 'accueil',
    link: 'accueil',
  },
  {
    id: 2,
    name: 'présentation',
    link: 'presentation',
  },
  {
    id: 3,
    name: 'portfolio',
    link: 'portfolio',
  },
  {
    id: 4,
    name: 'contact',
    link: 'contact',
  },
]

export const EXPERIENCES = [
  {
    year: '2024 - Présent',
    role: 'Apprenant en Bachelor Concepteur Développeur Web',
    company: 'ETNA',
    description: `Début de mon alternance à l’ETNA en développement et conception d’applications : apprentissage des bases du développement web, mobile et logiciel, avec une mise en pratique sur des projets concrets en entreprise.`,
    technologies: ['Javascript', 'React.js', 'Next.js', 'mongoDB'],
  },
  {
    year: '2021 - 2022',
    role: 'Développeur Web et Web Mobile',
    company: 'Simplon.co',
    description: `Formation Développeur Web et Web Mobile avec Simplon.co : obtention du titre RNCP 31114, maîtrise des bases du développement front-end et back-end, avec 3 mois de stage pour appliquer les compétences acquises.`,
    technologies: ['HTML', 'CSS', 'PHP', 'mySQL'],
  },
  {
    year: '2007 - 2017',
    role: 'Contrôleur Qualité',
    company: "Kid's Plus (ShenZhen, Chine)",
    description: `Arrivé en qualité de traducteur afin de faciliter les échanges avec nos partenaires européens et américains, j'ai par la suite été contrôleur qualité en usine afin d'assurer à nos clients une marchandise conforme à leurs besoins.`,
  },
]

export const PROJECTS = [
  {
    title: 'KevFlix',
    image: project1,
    description:
      'Reprenant une interface proche de Netflix et basé sur TMDB (The Movie Database), une application complète qui rassemble tous les films et séries à travers le monde.',
    technologies: ['React', 'Express', 'MongoDB', 'Redux', 'Axios'],
  },
  {
    title: 'Blog App',
    image: project2,
    description:
      "Un blog complet avec fonctionnalités avancées. Intégration de l'editeur Tiptap.",
    technologies: ['Nodejs', 'React Query', 'Tiptap'],
  },
  {
    title: 'Whatsapp',
    image: project3,
    description:
      "Une version de Whatsapp qui implémente l'IA (GPT pour les conversations et dall-e pour la génération d'images).",
    technologies: ['Nextjs', 'Convex', 'OpenAI', 'ZegoCloud'],
  },
  {
    title: 'MernEats',
    image: project4,
    description:
      'Une plateforme rassemblant tous types de restaurants, un peu calqué à ce que peux proposer des applications comme Uber Eats.',
    technologies: ['Express', 'MongoDB', 'Stripe', 'React', 'Vite'],
  },
]

export const CONTACT = {
  address: '4 rue Menudière 2, 30100 Alès ',
  phoneNo: '+336 50 24 67 14 ',
  email: 'ouali_k@etna-alternance.net',
}
