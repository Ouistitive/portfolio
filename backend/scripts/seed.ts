import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import { v4 as uuid } from "uuid";
import type {
  Project,
  Experience,
  Skill,
  School,
  Hobby,
  Learning,
} from "../src/lib/models";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

async function seed(tableName: string, items: (Record<string, unknown> | Project | Experience | Skill | School | Hobby | Learning)[]) {
  for (const item of items) {
    await docClient.send(
      new PutCommand({ TableName: tableName, Item: item }),
    );
  }
}

async function main() {
  const projects: Project[] = [
    {
      id: uuid(),
      title: { en: "Black Friday simulation", fr: "Simulation de Black Friday" },
      description: {
        en: "A Go-based simulation designed to model crowd dynamics during Black Friday, with the goal of identifying an optimal store layout that allows agents to navigate the entire store efficiently.\n\nThe system includes several types of agents: standard customers, selfish customers capable of stealing from other agents, and security guards responsible for reducing theft within their field of view.",
        fr: "Simulation en Go visant à modéliser les mouvements de foule lors du Black Friday afin d'identifier l'agencement de magasin optimal permettant aux agents de parcourir l'ensemble de l'espace.\n\nLe système repose sur plusieurs types d'agents : des clients classiques, des clients égoïstes pouvant voler d'autres agents, et des agents de sécurité chargés de réduire le taux de vol dans leur champ de vision.",
      },
      tags: ["Multi-agents System", "Go / Ebiten", "Concurrency management"],
      githubLink: "https://github.com/NoeGodin/BlackFriday-Simulator",
      order: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      title: { en: "Inventory management for UTC Student Organizations", fr: "Gestion des inventaires des associations" },
      description: {
        en: "Bobby is a web application in Laravel and React to manage UTC student organizations' equipments. This application allows student organizations to display their inventory and create borrow requests from other associations. Integration of other services from UTC to ensure authentication and data synchronization.\n\nWe put a security layer in order to protect our web application from main security breaches (code injection, access control...).",
        fr: "Application web de gestion des objets des associations de l'UTC en Laravel et React. L'application permet aux associations de visualiser leur inventaire et faire des demandes d'emprunts d'objets à d'autres associations. Intégration avec d'autres services de l'UTC pour assurer l'authentification et la synchronisation des données.\n\nNous avons mis en place des sécurités dans le but de protéger notre application web, des principales failles de sécurité (injection de code, contrôles des accès et permissions...).",
      },
      tags: ["PHP / Laravel", "React / Typescript", "IT Security", "Access control"],
      order: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      title: { en: "KanaMaster: Mobile application quiz", fr: "KanaMaster" },
      description: {
        en: "KanaMaster is a Java-based mobile quiz application designed to help users learn the main Japanese characters known as kana.",
        fr: "Application mobile de quiz en Java pour apprendre les principaux caractères japonais.",
      },
      tags: ["Java", "Android Studio"],
      githubLink: "https://github.com/Ouistitive/KanaMaster",
      order: 3,
      createdAt: new Date().toISOString(),
    },
  ];

  const experiences: Experience[] = [
    {
      id: uuid(),
      title: { en: "Cloud & Software Engineer Apprentice", fr: "Alternant ingénieur Cloud & Software" },
      company: { en: "SAP France", fr: "SAP France" },
      description: {
        en: "Design and Full-Stack development of a cloud platform on SAP BTP enabling access and permission management for Azure and SAP HANA datalakes, providing AI teams with secure data environments, with a SAP CAP/CDS backend and React interfaces built with UI5 Web Components.",
        fr: "Conception et développement Full-Stack d'une plateforme cloud sur SAP BTP permettant la gestion des accès et des permissions sur des datalakes Azure et SAP HANA, afin de fournir aux équipes AI des environnements data sécurisés, avec backend SAP CAP/CDS et interfaces React utilisant UI5 Web Components, en méthode Agile SAFe et mentorat de stagiaires et externes.",
      },
      from: { en: "September 2024", fr: "Septembre 2024" },
      to: { en: "Now", fr: "Maintenant" },
      tags: ["SAP BTP", "Full-Stack", "SAP CAP (CDS)", "SpringBoot", "React", "UI5"],
      order: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      title: { en: "Developer Cloud Full-Stack Intern", fr: "Stagiaire développeur Cloud Full-Stack" },
      company: { en: "IZHO", fr: "IZHO" },
      description: {
        en: "Development and optimization of Capcore, a web platform for energy consumption data management. Implemented multi-format data importers, built automated export pipelines, generated dynamic reporting features, and refactored backend components within an AWS-based microservices architecture.",
        fr: "Développement et optimisation de la plateforme web Capcore pour la gestion de données de consommation énergétique, avec implémentation d'importeurs multi-formats, création d'exporteurs automatisés, génération de rapports dynamiques et refonte de composants backend au sein d'une architecture micro-services sur AWS.",
      },
      from: { en: "April 2024", fr: "Avril 2024" },
      to: { en: "August 2024", fr: "Août 2024" },
      tags: ["AWS", "Serverless", "Microservices", "Node.js", "TypeScript", "Chart.js"],
      order: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      title: { en: "Developer Web & Mobile Intern", fr: "Stagiaire développeur web et mobile" },
      company: { en: "SIMPLOS", fr: "SIMPLOS" },
      description: {
        en: "Design and implementation of a WordPress plugin connecting e-commerce websites to the SIMPLOS platform to externalize customer authentication and data storage, with secure retrieval of required information for user registration and product purchases.",
        fr: "Conception d'un plugin WordPress connectant les sites e-commerce à la plateforme SIMPLOS pour externaliser l'authentification et le stockage des données clients, avec récupération sécurisée des informations nécessaires à l'inscription ou à l'achat de produit.",
      },
      from: { en: "April 2023", fr: "Avril 2023" },
      to: { en: "June 2023", fr: "Juin 2023" },
      tags: ["Cybersecurity", "Mobile", "Flutter", "WordPress", "PHP"],
      order: 3,
      createdAt: new Date().toISOString(),
    },
  ];

  const skills: Skill[] = [
    {
      id: uuid(),
      name: { en: "Backend", fr: "Backend" },
      description: {
        en: "API conception and implementation of the business logic.",
        fr: "Conception d'API et implémentation de la logique métier.",
      },
      category: "backend",
      tags: ["Node.JS", "Java", "Go", "Express", "SAP CAP (CDS)", "Python", "SpringBoot", "Redis"],
      order: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      name: { en: "Frontend", fr: "Frontend" },
      description: {
        en: "Development of reactive and fluide web interfaces with a focus on accessibility and polished UX.",
        fr: "Développement d'interfaces réactives et fluides, en mettant l'accent sur l'accessibilité et une UX soignée.",
      },
      category: "frontend",
      tags: ["React", "TypeScript", "Tailwind CSS", "SAPUI5", "HTML", "CSS", "Vue.JS"],
      order: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      name: { en: "Application architecture", fr: "Architecture applicative" },
      description: {
        en: "Conception of the architecture, components and data flows to ensure maintenability, performance and scalability.",
        fr: "Conception de l'architecture, des composants et des flux pour assurer maintenabilité, performance et évolutivité des projets.",
      },
      category: "architecture",
      tags: ["UML Diagram", "Object oriented programming"],
      order: 3,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      name: { en: "Cloud", fr: "Cloud" },
      description: {
        en: "Deploying and orchestrating applications in the cloud.",
        fr: "Déploiement et orchestration d'applications dans le cloud.",
      },
      category: "cloud",
      tags: ["SAP BTP"],
      order: 4,
      createdAt: new Date().toISOString(),
    },
  ];

  const schools: School[] = [
    {
      id: uuid(),
      title: {
        en: "Master's Degree in Computer Engineering — Infrastructure and Information Systems",
        fr: "Diplôme d'ingénieur — Génie informatique filière Infrastructure et Système d'information",
      },
      school: {
        en: "Université de Technologie de Compiègne",
        fr: "Université de Technologie de Compiègne",
      },
      description: {
        en: "Engineering program in Computer Science, specializing in infrastructure and information systems. Covered distributed architectures, cloud computing, and the design of maintainable systems. Developed a particular interest in AI (multi-agent systems).",
        fr: "Formation d'ingénieur en informatique orientée infrastructures et systèmes d'information, avec apprentissage des principes des architectures distribuées, du cloud et de la conception de systèmes évolutifs, avec un intérêt pour les systèmes intelligents (systèmes multi-agents).",
      },
      from: { en: "2024", fr: "2024" },
      to: { en: "Now", fr: "En cours" },
      tags: [],
      order: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      title: {
        en: "Bachelor of Technology in Computer Science — Design, Development, and Testing",
        fr: "BUT Informatique — Réalisation d'applications : conception, développement, validation",
      },
      school: {
        en: "University Institute of Technology, Paris Cité (IUT Paris Cité)",
        fr: "IUT de Paris Cité",
      },
      description: {
        en: "Program in Computer Science emphasizing the design and development of maintainable applications. Worked on web and mobile projects and designed application architectures. Validated applications through unit and integration testing. Gained hands-on experience throughout the software development lifecycle.",
        fr: "Formation technique axée sur la conception et le développement d'applications maintenables. Réalisation de projets web et mobiles, mise en place d'architectures logicielles, et validation des applications via des tests unitaires et d'intégration, avec une forte approche pratique du cycle de développement.",
      },
      from: { en: "2021", fr: "2021" },
      to: { en: "2024", fr: "2024" },
      tags: [],
      order: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      title: {
        en: "French Baccalaureate — Major in Computer Science and Mathematics",
        fr: "Baccalauréat général — Spécialités Informatique et Mathématique",
      },
      school: {
        en: "Rosa Parks High School",
        fr: "Lycée Rosa Parks",
      },
      description: {
        en: "Early experience in software development and algorithms. Created simple Python applications and web applications with HTML/CSS/JS. Worked with relational databases and learned fundamental data structures.",
        fr: "Premières expériences en développement logiciel et en algorithmique : création d'applications simples en Python, conception d'applications web, manipulation de bases de données relationnelles et apprentissage des structures de données fondamentales.",
      },
      from: { en: "2018", fr: "2018" },
      to: { en: "2021", fr: "2021" },
      tags: [],
      order: 3,
      createdAt: new Date().toISOString(),
    },
  ];

  const hobbies: Hobby[] = [
    {
      id: uuid(),
      title: { en: "Raspberry Pi home server", fr: "Raspberry Pi home server" },
      description: {
        en: "I have a Raspberry Pi 5 to self host web applications (NextCloud, Portainer, ...) and some of my own custom applications, allowing me to centralize my services while developing skills in system administration and web application deployment.",
        fr: "J'utilise une Raspberry Pi 5 pour héberger des applications web (NextCloud, Portainer, ...) ainsi que mes propres applications développées, ce qui me permet de centraliser mes services numériques tout en pratiquant l'administration système et le déploiement d'applications.",
      },
      tags: ["Home server", "System administration", "Web services", "Application deployment", "Automation"],
      order: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      title: { en: "Narrative video games", fr: "Jeux vidéo narratifs" },
      description: {
        en: "I enjoy narrative video games such as NieR: Automata and the Persona series for their immersive worlds, engaging stories, and memorable characters.",
        fr: "Je suis passionné par les jeux vidéo narratifs tels que NieR: Automata ou la série Persona, pour leur univers immersif ainsi que les histoires et personnages qui m'ont grandement marqué.",
      },
      tags: ["Video games", "Immersion", "Storytelling", "Characters", "Narrative design"],
      order: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      title: { en: "Drawing", fr: "Dessin" },
      description: {
        en: "Beginner in drawing, I enjoy using it as a means of personal expression and visual exploration. I like to depict characters I admire in poses that reflect their personality, often inspired by Japanese culture.",
        fr: "Débutant en dessin, j'aime l'utiliser comme moyen d'expression personnelle et d'exploration visuelle, pour représenter des personnages que j'apprécie avec des poses qui reflètent leur personnalité, souvent inspiré par la culture japonaise.",
      },
      tags: ["Drawing", "Creativity", "Visual art", "Illustration", "Artistic exploration"],
      order: 3,
      createdAt: new Date().toISOString(),
    },
  ];

  const learnings: Learning[] = [
    {
      id: uuid(),
      name: { en: "AWS Certified Cloud Practitioner", fr: "AWS Certified Cloud Practitioner" },
      description: {
        en: "I am currently taking AWS Certified Cloud Practitioner courses (CLF-C02) to learn and understand the best practices and cost optimization strategies for AWS cloud architectures.",
        fr: "Actuellement, je suis les cours de AWS (CLF-C02) dans le but d'apprendre et comprendre les meilleurs pratiques et optimisation de coût pour les architectures cloud sur AWS.",
      },
      tags: ["AWS", "Cloud", "Cloud fundamentals", "Cloud computing", "Cost optimization"],
      order: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      name: { en: "Reinforcement Learning", fr: "Apprentissage par renforcement" },
      description: {
        en: "I am learning reinforcement learning through David Silver's course to understand how to design agents capable of making optimal decisions, with the goal of developing an intelligent multi-agent system for package delivery.",
        fr: "Je me forme au reinforcement learning via les cours de David Silver pour comprendre comment des agents intelligents apprennent à prendre des décisions optimales, dans le but de faire un système multi-agents intelligent de drônes pour la livraison de colis.",
      },
      tags: ["Distributed systems", "Machine Learning", "Decision-making agents", "Multi-agent Systems"],
      order: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: uuid(),
      name: { en: "Japanese language", fr: "Langue japonaise" },
      description: {
        en: "I am currently learning Japanese at Université de technologie de Compiègne (UTC) as well as independently to improve my language skills and deepen my understanding of Japanese culture, with the goal of reaching an A2 level.",
        fr: "J'apprends actuellement la langue japonaise à l'UTC ainsi qu'en autonomie afin de développer mes compétences linguistiques et ma compréhension de la culture japonaise afin d'atteindre le niveau A2.",
      },
      tags: ["Language", "Japanese", "Communication"],
      order: 3,
      createdAt: new Date().toISOString(),
    },
  ];

  const tablePrefix = process.env.TABLE_PREFIX || "Portfolio-";

  await seed(`${tablePrefix}Projects`, projects);
  await seed(`${tablePrefix}Experiences`, experiences);
  await seed(`${tablePrefix}Skills`, skills);
  await seed(`${tablePrefix}Schools`, schools);
  await seed(`${tablePrefix}Hobbies`, hobbies);
  await seed(`${tablePrefix}Learnings`, learnings);
}

main().catch((err) => {
  process.exit(1);
});
