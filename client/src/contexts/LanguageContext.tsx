import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    projects: "Projects",
    gallery: "Gallery",
    contact: "Contact",
    
    // Home Page
    greeting: "Greetings, I am",
    name: "Adelard Borauzima Hanzira",
    description1: "I am an AI Coach, Social Entrepreneur, Software Engineer, and Artist dedicated to leveraging technology and innovation to advance social good. My academic foundation in computer science at Ashesi University, supported by the Mastercard Foundation Scholarship, has equipped me with both technical expertise and leadership acumen to address critical societal challenges.",
    description2: "In my capacity as Co-Founder and Chief Executive Officer of Reliance Soul International Youth Foundation and Founder of The Peacemakers, I spearhead transformative initiatives designed to empower displaced youth within the creative sector. My work focuses on fostering healing, promoting social inclusion, and creating sustainable impact through innovative approaches in art, education, social entrepreneurship, and community development.",
    connectWithMe: "Connect With Me",
    downloadCV: "Download CV",
    whatIDo: "What I Do",
    globalExperiences: "Global Experiences",
    yearsExperience: "Years of Experience",
    projectsCompleted: "Projects Completed",
    youthImpacted: "Youth Impacted",
    organizationsWorked: "Organizations Worked With",
    artist: "Artist",
    socialEntrepreneur: "Social Entrepreneur",
    softwareEngineer: "Software Engineer",
    aiCoach: "AI Coach",
    globalCitizen: "Global Citizen",
    interculturalCollaborator: "Intercultural Collaborator",
    leadershipAsService: "Leadership as Service",
    tourGuideCertified: "Tour Guide Certified",
    designThinking: "Design Thinking",
    artistDescription: "Expressing stories through creative work",
    socialEntrepreneurDescription: "Building solutions for social impact",
    softwareEngineerDescription: "Creating immersive web applications",
    aiTrainerDescription: "One of my Students projects for AI in data Analytics and Visualization",
    leadershipDescription: "Exploring and developing leadership potential among young people.",
    culturalCollaborationDescription: "Building bridges across cultures",

    // About Page
    aboutMe: "About Me",
    myJourney: "My Journey",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    achievements: "Achievements",
    passions: "Passions",
    aboutDescription: "Learn more about my background, journey, and the experiences that have shaped who I am today.",
    educationTitle: "Computer Science at Ashesi University",
    educationDescription: "Pursuing a degree in Computer Science with a focus on AI and Software Engineering, supported by the Mastercard Foundation Scholarship.",
    experienceRoles: "Experience & Roles",
    coreValues: "Core Values",
    creativeSocialTitle: "Creative | Social Entrepreneur | Computer Scientist | Global Citizen | Leader & Follower",
    aboutBio1: "I have a deep passion for artistic expression, and tech empowering young people globally especially from marginalized communities using a goal in them for healing and achieve dreams.",
    aboutBio2: "As Co-Founder and CEO of Reliance Sou International Youth Foundation, I lead initiatives that promote digital skills, self-reliance, entrepreneurship, and community impact across Africa.",
    aboutBio3: "My work focuses on leveraging innovation, storytelling, and technology to create opportunities for youth and drive sustainable social change.",
    aboutMission1: "I am a Melton Foundation Fellow and a Global Fellow of GHEA21, and I previously served as a representative on the Mastercard Foundation Scholars Council.",
    aboutMission2: "Through my work, I strive to build innovative solutions that create opportunities for youth and drive social impact across Africa, using technology and art as tools for empowerment and positive change.",
    
    // Projects Page
    myProjects: "My Projects",
    projectsDescription: "Explore a collection of my work spanning technology, social impact, and creative endeavors.",
    viewProject: "View Project",
    liveDemo: "Live Demo",
    sourceCode: "Source Code",
    technologies: "Technologies",
    buildingImpact: "Building Impact",
    projectsWork: "PROJECTS & WORK",
    
    // Gallery Page
    myGallery: "My Gallery",
    galleryDescription: "A visual journey through my experiences, projects, and moments that define my story.",
    
    // Contact Page
    getInTouch: "Get In Touch",
    contactDescription: "Let's connect and explore opportunities for collaboration, mentorship, or simply share ideas.",
    name_label: "Name",
    email_label: "Email",
    subject_label: "Subject",
    message_label: "Message",
    sendMessage: "Send Message",
    contactInfo: "Contact Information",
    howICanHelp: "How I Can Help",
    connectOnSocial: "Connect on Social Media",
    quickResponse: "Quick Response",
    quickResponseDesc: "Average response time of 24 hours for all inquiries",
    globalCollaboration: "Global Collaboration",
    globalCollaborationDesc: "Open to remote projects and international partnerships",
    professionalSupport: "Professional Support",
    professionalSupportDesc: "Dedicated to delivering high-quality solutions",
    readyToCollaborate: "Ready to collaborate? Let's turn your ideas into impactful solutions.",
    directEmail: "Direct Email",
    responseTime: "Response Time",
    responseTimeDesc: "Within 24 hours",
    responseTimeNote: "GMT timezone (flexible for global meetings)",
    location: "Location",
    locationDesc: "Accra, Ghana | Kampala, Uganda | Goma, DRCongo",
    locationNote: "Available for global remote collaboration",
    
    // Footer
    rightsReserved: "All rights reserved",
    builtWith: "Built with",
    madeBy: "Made by Adelard",
    
    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    readMore: "Read more",
    learnMore: "Learn More",
    backToTop: "Back to Top"
  },
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    gallery: "Galerie",
    contact: "Contact",
    
    // Home Page
    greeting: "Salutations, je suis",
    name: "Adelard Borauzima Hanzira",
    description1: "Je suis un Coach IA, Entrepreneur Social, Ingénieur Logiciel et Artiste dédié à l'utilisation de la technologie et de l'innovation pour faire progresser le bien social. Ma formation académique en informatique à l'Université Ashesi, soutenue par la Bourse de la Fondation Mastercard, m'a doté à la fois d'une expertise technique et d'un sens du leadership pour relever les défis sociétaux critiques.",
    description2: "En ma qualité de Co-Fondateur et Directeur Général de la Fondation Internationale de la Jeunesse Reliance Soul et Fondateur des Pacificateurs, je dirige des initiatives transformatrices conçues pour autonomiser les jeunes déplacés dans le secteur créatif. Mon travail se concentre sur la promotion de la guérison, l'inclusion sociale et la création d'un impact durable grâce à des approches innovantes en art, éducation, entrepreneuriat social et développement communautaire.",
    connectWithMe: "Connectez-vous avec moi",
    downloadCV: "Télécharger CV",
    whatIDo: "Ce que je fais",
    globalExperiences: "Expériences Mondiales",
    yearsExperience: "Années d'Expérience",
    projectsCompleted: "Projets Terminés",
    youthImpacted: "Jeunes Impactés",
    organizationsWorked: "Organisations Partenaires",
    artist: "Artiste",
    socialEntrepreneur: "Entrepreneur Social",
    softwareEngineer: "Ingénieur Logiciel",
    aiCoach: "Coach IA",
    globalCitizen: "Citoyen Mondial",
    interculturalCollaborator: "Collaborateur Interculturel",
    leadershipAsService: "Leadership comme Service",
    tourGuideCertified: "Guide Touristique Certifié",
    designThinking: "Pensée Design",
    artistDescription: "Exprimer des histoires à travers le travail créatif",
    socialEntrepreneurDescription: "Créer des solutions pour l'impact social",
    softwareEngineerDescription: "Créer des applications web immersives",
    aiTrainerDescription: "Un des projets de mes étudiants pour l'IA en analyse de données et visualisation",
    leadershipDescription: "Explorer et développer le potentiel de leadership chez les jeunes.",
    culturalCollaborationDescription: "Construire des ponts entre les cultures",

    // About Page
    aboutMe: "À propos de moi",
    myJourney: "Mon Parcours",
    education: "Éducation",
    experience: "Expérience",
    skills: "Compétences",
    achievements: "Réalisations",
    passions: "Passions",
    aboutDescription: "Apprenez-en plus sur mon parcours et les expériences qui ont façonné qui je suis aujourd'hui.",
    educationTitle: "Informatique à l'Université Ashesi",
    educationDescription: "Poursuivant un diplôme en informatique avec un focus sur l'IA et l'ingénierie logicielle, soutenu par la Bourse de la Fondation Mastercard.",
    experienceRoles: "Expérience et Rôles",
    coreValues: "Valeurs Fondamentales",
    creativeSocialTitle: "Créatif | Entrepreneur Social | Informaticien | Citoyen Mondial | Leader & Suiveur",
    aboutBio1: "J'ai une passion profonde pour l'expression artistique et la technologie, autonomisant les jeunes du monde entier, en particulier des communautés marginalisées, avec un objectif de guérison et de réalisation de rêves.",
    aboutBio2: "En tant que Co-Fondateur et PDG de la Fondation Internationale de la Jeunesse Reliance Soul, je dirige des initiatives qui promeuvent les compétences numériques, l'autonomie, l'entrepreneuriat et l'impact communautaire à travers l'Afrique.",
    aboutBio3: "Mon travail se concentre sur l'utilisation de l'innovation, de la narration et de la technologie pour créer des opportunités pour les jeunes et conduire un changement social durable.",
    aboutMission1: "Je suis un Boursier de la Fondation Melton et un Boursier Mondial de GHEA21, et j'ai précédemment servi comme représentant au Conseil des Boursiers de la Fondation Mastercard.",
    aboutMission2: "À travers mon travail, je m'efforce de construire des solutions innovantes qui créent des opportunités pour les jeunes et conduisent l'impact social à travers l'Afrique, utilisant la technologie et l'art comme outils d'autonomisation et de changement positif.",
    
    // Projects Page
    myProjects: "Mes Projets",
    projectsDescription: "Explorez une collection de mon travail couvrant la technologie, l'impact social et les efforts créatifs.",
    viewProject: "Voir le Projet",
    liveDemo: "Démo en Direct",
    sourceCode: "Code Source",
    technologies: "Technologies",
    buildingImpact: "Construire l'Impact",
    projectsWork: "PROJETS ET TRAVAIL",
    
    // Gallery Page
    myGallery: "Ma Galerie",
    galleryDescription: "Un voyage visuel à travers mes expériences, projets et moments qui définissent mon histoire.",
    
    // Contact Page
    getInTouch: "Entrer en Contact",
    contactDescription: "Connectons-nous et explorons les opportunités de collaboration, de mentorat ou simplement partageons des idées.",
    name_label: "Nom",
    email_label: "Email",
    subject_label: "Sujet",
    message_label: "Message",
    sendMessage: "Envoyer le Message",
    contactInfo: "Informations de Contact",
    howICanHelp: "Comment Je Peux Aider",
    connectOnSocial: "Connectez-vous sur les Réseaux Sociaux",
    quickResponse: "Réponse Rapide",
    quickResponseDesc: "Temps de réponse moyen de 24 heures pour toutes les demandes",
    globalCollaboration: "Collaboration Mondiale",
    globalCollaborationDesc: "Ouvert aux projets à distance et aux partenariats internationaux",
    professionalSupport: "Support Professionnel",
    professionalSupportDesc: "Dédié à fournir des solutions de haute qualité",
    readyToCollaborate: "Prêt à collaborer? Transformons vos idées en solutions impactantes.",
    directEmail: "Email Direct",
    responseTime: "Temps de Réponse",
    responseTimeDesc: "Dans les 24 heures",
    responseTimeNote: "Fuseau horaire GMT (flexible pour les réunions mondiales)",
    location: "Localisation",
    locationDesc: "Accra, Ghana | Kampala, Ouganda | Goma, RD Congo",
    locationNote: "Disponible pour la collaboration mondiale à distance",
    
    // Footer
    rightsReserved: "Tous droits réservés",
    builtWith: "Créé avec",
    madeBy: "Créé par Adelard",
    
    // Common
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    readMore: "Lire la suite",
    learnMore: "En savoir plus",
    backToTop: "Retour en haut"
  },
  sw: {
    // Navigation
    home: "Nyumbani",
    about: "Kuhusu",
    projects: "Miradi",
    gallery: "Picha",
    contact: "Wasiliana",
    
    // Home Page
    greeting: "Hujambo, mimi ni",
    name: "Adelard Borauzima Hanzira",
    description1: "Mimi ni Mkocha wa AI, Mjasiriamali wa Kijamii, Mhandisi wa Programu, na Msanii aliyejitolea kutumia teknolojia na uvumbuzi kuendeleza mema ya kijamii. Msingi wangu wa kitaaluma katika sayansi ya kompyuta katika Chuo Kikuu cha Ashesi, unaouungwa mkono na Ufadhili wa Shirika la Mastercard, umenipa utaalamu wa kiufundi na uongozi wa kutatua changamoto muhimu za kijamii.",
    description2: "Katika nafasi yangu kama Mwanzilishi Mshirika na Mkurugenzi Mkuu wa Shirika la Kimataifa la Vijana la Reliance Soul na Mwanzilishi wa The Peacemakers, ninaongoza mipango ya mabadiliko iliyoundwa kuwawezesha vijana waliohamishwa katika sekta ya ubunifu. Kazi yangu inazingatia kukuza uponyaji, kukuza ujumuishaji wa kijamii, na kuunda athari endelevu kupitia mbinu za ubunifu katika sanaa, elimu, ujasiriamali wa kijamii, na maendeleo ya jamii.",
    connectWithMe: "Unganisha Nami",
    downloadCV: "Pakua CV",
    whatIDo: "Ninachofanya",
    globalExperiences: "Uzoefu wa Kimataifa",
    yearsExperience: "Miaka ya Uzoefu",
    projectsCompleted: "Miradi Iliyokamilika",
    youthImpacted: "Vijana Walioathiriwa",
    organizationsWorked: "Mashirika Tuliyofanya Kazi",
    artist: "Msanii",
    socialEntrepreneur: "Mjasiriamali wa Kijamii",
    softwareEngineer: "Mhandisi wa Programu",
    aiCoach: "Mkocha wa AI",
    globalCitizen: "Raia wa Dunia",
    interculturalCollaborator: "Mshirika wa Kimataifa",
    leadershipAsService: "Uongozi kama Huduma",
    tourGuideCertified: "Mwongozi wa Utalii Aliyeidhinishwa",
    designThinking: "Mawazo ya Kubuni",
    artistDescription: "Kueleza hadithi kupitia kazi za ubunifu",
    socialEntrepreneurDescription: "Kujenga suluhisho za athari za kijamii",
    softwareEngineerDescription: "Kuunda programu za wavuti za kuvutia",
    aiTrainerDescription: "Mojawapo ya miradi ya wanafunzi wangu kwa AI katika uchambuzi wa data na miwani",
    leadershipDescription: "Kuchunguza na kukuza uwezo wa uongozi miongoni mwa vijana.",
    culturalCollaborationDescription: "Kujenga madaraja kati ya tamaduni",

    // About Page
    aboutMe: "Kuhusu Mimi",
    myJourney: "Safari Yangu",
    education: "Elimu",
    experience: "Uzoefu",
    skills: "Ujuzi",
    achievements: "Mafanikio",
    passions: "Mapenzi",
    aboutDescription: "Jifunze zaidi kuhusu mazingira yangu, safari yangu, na uzoefu ambao umeunda ni nani leo.",
    educationTitle: "Sayansi ya Kompyuta katika Chuo Kikuu cha Ashesi",
    educationDescription: "Ninafuata shahada ya Sayansi ya Kompyuta kwa lengo la AI na Uhandisi wa Programu, inayouungwa mkono na Ufadhili wa Shirika la Mastercard.",
    experienceRoles: "Uzoefu na Majukumu",
    coreValues: "Maadili Muhimu",
    creativeSocialTitle: "Msanii | Mjasiriamali wa Kijamii | Mwanasayansi wa Kompyuta | Raia wa Dunia | Kiongozi & Mfuasi",
    aboutBio1: "Nina mapenzi makuu ya kujieleza kibunifu na teknolojia kuwawezesha vijana duniani kote hasa kutoka jamii zilizoinazwa kwa lengo la kupona na kufikia ndoto.",
    aboutBio2: "Kama Mwanzilishi Mshirika na Mkurugenzi Mkuu wa Shirika la Kimataifa la Vijana la Reliance Soul, ninaongoza mipango inayoendeleza ujuzi wa kidijitali, kujitegemea, ujasiriamali, na athari za kijamii kote Afrika.",
    aboutBio3: "Kazi yangu inazingatia kutumia uvumbuzi, uhadithi, na teknolojia kuunda fursa za vijana na kuongoza mabadiliko endelevu ya kijamii.",
    aboutMission1: "Mimi ni Mwanafunzi wa Shirika la Melton na Mwanafunzi wa Kimataifa wa GHEA21, na awali nilitumika kama mwakilishi katika Baraza la Wanafunzi wa Shirika la Mastercard.",
    aboutMission2: "Kupitia kazi yangu, ninajitahidi kujenga suluhisho za ubunifu zinazoundza fursa za vijana na kuongoza athari za kijamii kote Afrika, nikitumia teknolojia na sanaa kama zana za kujiwezesha na mabadiliko mazuri.",
    
    // Projects Page
    myProjects: "Miradi Yangu",
    projectsDescription: "Chunguza mkusanyiko wa kazi yangu unaoendeshwa teknolojia, athari za kijamii, na juhudi za ubunifu.",
    viewProject: "Ona Mradi",
    liveDemo: "Onyesho la Moja kwa Moja",
    sourceCode: "Msimbo wa Chanzo",
    technologies: "Teknolojia",
    buildingImpact: "Kujenga Athari",
    projectsWork: "MIRADI NA KAZI",
    
    // Gallery Page
    myGallery: "Picha Zangu",
    galleryDescription: "Safari ya miwani kupitia uzoefu wangu, miradi, na mhimili ambazo zinafafanua hadithi yangu.",
    
    // Contact Page
    getInTouch: "Wasiliana",
    contactDescription: "Hebu tuunganishe na kuchunguza fursa za ushirikiano, ushauri au hata kubadilisha mawazo.",
    name_label: "Jina",
    email_label: "Barua pepe",
    subject_label: "Mada",
    message_label: "Ujumbe",
    sendMessage: "Tuma Ujumbe",
    contactInfo: "Maelezo ya Mawasiliano",
    howICanHelp: "Jinsi Ninaweza Kusaidia",
    connectOnSocial: "Unganisha kwenye Mitandao ya Kijamii",
    quickResponse: "Jibu la Haraka",
    quickResponseDesc: "Wastani wa muda wa kujibu masaa 24 kwa maombi yote",
    globalCollaboration: "Ushirikiano wa Kimataifa",
    globalCollaborationDesc: "Wazi kwa miradi ya mbali na ushirikiano wa kimataifa",
    professionalSupport: "Msaada wa Kitaaluma",
    professionalSupportDesc: "Imejitolea kutoa suluhisho za ubora wa juu",
    readyToCollaborate: "Tayari kushirikiana? Hebu tubadilishe mawazo yako kuwa suluhisho zenye athari.",
    directEmail: "Barua Pepe Moja kwa Moja",
    responseTime: "Muda wa Kujibu",
    responseTimeDesc: "Ndani ya masaa 24",
    responseTimeNote: "Saa za GMT (zinaweza kubadilika kwa mikutano ya kimataifa)",
    location: "Mahali",
    locationDesc: "Accra, Ghana | Kampala, Uganda | Goma, Jamhuri ya Kidemokrasia ya Congo",
    locationNote: "Inapatikana kwa ushirikiano wa kimataifa wa mbali",
    
    // Footer
    rightsReserved: "Haki zote zimehifadhiwa",
    builtWith: "Imejengwa kwa",
    madeBy: "Imefanywa na Adelard",
    
    // Common
    loading: "Inapakia...",
    error: "Hitilafu",
    success: "Mafanikio",
    readMore: "Soma zaidi",
    learnMore: "Jifunze Zaidi",
    backToTop: "Rudi Juu"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Get language from localStorage or default to 'en'
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('portfolio-language') as Language;
      return savedLanguage && ['en', 'fr', 'sw'].includes(savedLanguage) ? savedLanguage : 'en';
    }
    return 'en';
  });

  // Save language to localStorage whenever it changes
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};