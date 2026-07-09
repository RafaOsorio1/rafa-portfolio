export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Herramientas",
      interests: "Intereses",
      contact: "Contacto",
      resume: "Currículum"
    },
    hero: {
      hello: "Hola, soy",
      role: "Desarrollador Web",
      tagline: "Especializado en diseñar y construir arquitecturas web escalables, eficientes y de alto rendimiento. Y cuando me desconecto del código, me encuentras analizando telemetría de F1 o intentando conseguir algún trofeo platino.",
      status: "Abierto a nuevas oportunidades",
      cta: "Ver Proyectos",
      location: "Colombia",
      timezone: "EST",
      tw1: "Desarrollador Full-Stack.",
      tw2: "Gamer de corazón.",
      tw3: "Fan de la Fórmula 1.",
      tw4: "Amante del buen cine.",
      tw5: "Papá de Roxy, Nova y Sooky."
    },
    about: {
      label: "sobre_mí",
      title: "Full-Stack Dev.",
      subtitle: "Apasionado del detalle.",
      p1: "Soy un Full Stack Developer apasionado por crear aplicaciones web modernas, escalables y en tiempo real. Disfruto trabajando tanto en el frontend como en el backend, utilizando tecnologías como React, Node.js y bases de datos relacionales para dar vida a ideas complejas.",
      p2: "Además de programar por pura pasión en mis ratos libres, disfruto de desconectar explorando mundos en videojuegos, siguiendo de cerca la estrategia de la Fórmula 1, apreciando el buen cine de ciencia ficción y compartiendo tiempo con mi familia peluda (Roxy, Nova y Sooky).",
      stats: {
        yoe: "Años de experiencia",
        projects: "Proyectos completados",
        coffee: "Cafés consumidos",
        games: "Horas en videojuegos"
      },
      interests: {
        programming: {
          label: "Programación",
          sub: "Proyectos personales · Aprendizaje continuo · Código for fun"
        },
        f1: {
          label: "Fórmula 1",
          sub: "Team Cadillac · Checo Pérez #11 · Fan desde siempre"
        },
        games: {
          label: "Videojuegos",
          sub: "Xbox fanboy · FPS, Racing & Sandbox"
        },
        cinema: {
          label: "Cine",
          sub: "Sci-Fi · Thriller · Todo lo de Nolan y Villeneuve"
        },
        roxy: {
          label: "Roxy",
          sub: "La mejor perrita del mundo. Sin debate."
        },
        cats: {
          label: "Nova & Sooky",
          sub: "Las jefas del hogar · No aceptan cuestionamientos"
        }
      }
    },
    projects: {
      label: "proyectos",
      title: "Lo que he construido.",
      viewCode: "Ver Código",
      viewLive: "Visitar Sitio",
      collab: "Colaboración",
      close: "Cerrar"
    },
    skills: {
      label: "herramientas",
      title: "Mi stack tecnológico.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de datos",
        tools: "Herramientas / Infra"
      }
    },
    interests_section: {
      label: "intereses",
      title: "Fuera del código.",
      tabs: {
        f1: "Fórmula 1",
        gaming: "Gaming",
        cinema: "Cine",
        pets: "Mascotas"
      },
      f1: {
        team: "Team favorito:",
        driver: "Piloto favorito:",
        title: "Clasificación Pilotos 2026",
        loading: "Cargando telemetría...",
        syncing: "syncing...",
        live: "live via jolpica-f1",
        fav: "⭐ fav"
      },
      movies: {
        title: "Películas Top"
      },
      games: {
        title: "Juegos Top"
      },
      pets_data: {
        roxy: { type: "Perrita", desc: "La guardiana de la casa. Energía infinita, amor incondicional. Fan del balón y de los paseos interminables.", fact: "Duerme en tu cama y ni siquiera te pide permiso" },
        nova: { type: "Gata", desc: "La reina del hogar. Experta en interrumpir videollamadas y sentarse justo encima del teclado.", fact: "Sabe exactamente cuándo abres una bolsa de snacks" },
        sooky: { type: "Gata", desc: "La traviesa oficial. Especialista en tirar cosas de las mesas y pedir comida a las 3am.", fact: "Ha destruido exactamente 3 pares de auriculares" },
        click: "[ click para saludar ]"
      }
    },
    contact: {
      label: "contacto",
      title: "Hablamos?",
      desc: "Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta, una propuesta de proyecto o simplemente quieras saludar, ¡intentaré responderte lo antes posible!",
      btn: "Enviar Mensaje",
      footer: "Diseñado y construido por Rafael Rodelo"
    },
    projects_data: {
      easy_shop: {
        desc: "Plataforma de comercio electrónico moderna y completa.",
        long: "E-commerce full-stack desarrollado con React 19 y Node.js. Incluye carrito de compras, gestión de estado con Zustand, base de datos PostgreSQL gestionada con Prisma, y websockets para notificaciones en tiempo real."
      },
      chatty: {
        desc: "Aplicación de mensajería instantánea en tiempo real.",
        long: "Plataforma de chat construida con React y Socket.io. Soporta salas de chat, selectores de emojis y comunicación bidireccional de baja latencia con un backend escalable en Node.js."
      },
      chatty_api: {
        desc: "API REST y WebSocket para plataforma de mensajería.",
        long: "Backend de la plataforma Chatty. Arquitectura escalable en Node.js que maneja la persistencia de usuarios, seguridad JWT y comunicación bidireccional de baja latencia con Socket.io. Documentado con Swagger."
      },
      feedback: {
        desc: "Plataforma integral de feedback en colaboración con Angie Natalia.",
        long: "Aplicación full-stack desarrollada en colaboración con Angie Natalia (líder del proyecto). Me enfoqué en la arquitectura del backend, base de datos (PostgreSQL + Prisma) y apoyé en algunas implementaciones clave del frontend en Next.js."
      },
      feedback_api: {
        desc: "Backend robusto para plataforma de feedback corporativo.",
        long: "Arquitectura backend completa desarrollada desde cero. Gestión compleja de base de datos relacional (PostgreSQL + Prisma), autenticación segura y múltiples endpoints REST documentados interactivamente con Swagger."
      },
      f1_hub: {
        desc: "Plataforma de estadísticas y telemetría de Fórmula 1.",
        long: "Aplicación interactiva que consume la API de Jolpica para mostrar resultados en tiempo real, estadísticas de pilotos y análisis de carreras. Construida con un backend robusto para manejar la sincronización de datos."
      }
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      interests: "Interests",
      contact: "Contact",
      resume: "Resume"
    },
    hero: {
      hello: "Hi, I'm",
      role: "Web Developer",
      tagline: "Specialized in designing and building scalable, efficient, and high-performance web architectures. And when I log off, you'll find me analyzing F1 telemetry or trying to get a platinum trophy.",
      status: "Open to new opportunities",
      cta: "View Projects",
      location: "Colombia",
      timezone: "EST",
      tw1: "Full-Stack Developer.",
      tw2: "Gamer at heart.",
      tw3: "Formula 1 fan.",
      tw4: "Cinema lover.",
      tw5: "Dad to Roxy, Nova, and Sooky."
    },
    about: {
      label: "about_me",
      title: "Full-Stack Dev.",
      subtitle: "Passionate about details.",
      p1: "I'm a Full Stack Developer passionate about building modern, scalable, and real-time web applications. I enjoy working on both the frontend and backend, using technologies like React, Node.js, and relational databases to bring complex ideas to life.",
      p2: "Besides programming for pure passion in my free time, I enjoy disconnecting by exploring worlds in video games, closely following Formula 1 strategy, appreciating good sci-fi cinema, and sharing time with my furry family (Roxy, Nova, and Sooky).",
      stats: {
        yoe: "Years of experience",
        projects: "Completed projects",
        coffee: "Coffees consumed",
        games: "Hours in games"
      },
      interests: {
        programming: {
          label: "Programming",
          sub: "Personal projects · Continuous learning · Code for fun"
        },
        f1: {
          label: "Formula 1",
          sub: "Team Cadillac · Checo Pérez #11 · Lifelong fan"
        },
        games: {
          label: "Gaming",
          sub: "Xbox lover · FPS, Racing & Sandbox"
        },
        cinema: {
          label: "Cinema",
          sub: "Sci-Fi · Thriller · Everything Nolan and Villeneuve"
        },
        roxy: {
          label: "Roxy",
          sub: "The best dog in the world. No debate."
        },
        cats: {
          label: "Nova & Sooky",
          sub: "The bosses of the house · No questions asked"
        }
      }
    },
    projects: {
      label: "projects",
      title: "What I've built.",
      viewCode: "View Code",
      viewLive: "Visit Site",
      collab: "Collaboration",
      close: "Close"
    },
    skills: {
      label: "skills",
      title: "My tech stack.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        tools: "Tools / Infra"
      }
    },
    interests_section: {
      label: "interests",
      title: "Outside of code.",
      tabs: {
        f1: "Formula 1",
        gaming: "Gaming",
        cinema: "Cinema",
        pets: "Pets"
      },
      f1: {
        team: "Favorite team:",
        driver: "Favorite driver:",
        title: "2026 Driver Standings",
        loading: "Loading telemetry...",
        syncing: "syncing...",
        live: "live via jolpica-f1",
        fav: "⭐ fav"
      },
      movies: {
        title: "Top Movies"
      },
      games: {
        title: "Top Games"
      },
      pets_data: {
        roxy: { type: "Dog", desc: "The guardian of the house. Infinite energy, unconditional love. Fan of balls and endless walks.", fact: "Sleeps in your bed and doesn't even ask for permission" },
        nova: { type: "Cat", desc: "The queen of the home. Expert in interrupting video calls and sitting right on the keyboard.", fact: "Knows exactly when you open a bag of snacks" },
        sooky: { type: "Cat", desc: "The official troublemaker. Specialist in knocking things off tables and begging for food at 3am.", fact: "Has destroyed exactly 3 pairs of headphones" },
        click: "[ click to say hi ]"
      }
    },
    contact: {
      label: "contact",
      title: "Let's Talk?",
      desc: "I'm currently open to new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!",
      btn: "Send Message",
      footer: "Designed and built by Rafael Rodelo"
    },
    projects_data: {
      easy_shop: {
        desc: "Modern and comprehensive e-commerce platform.",
        long: "Full-stack e-commerce built with React 19 and Node.js. Includes a shopping cart, state management with Zustand, a PostgreSQL database managed with Prisma, and websockets for real-time notifications."
      },
      chatty: {
        desc: "Real-time instant messaging application.",
        long: "Chat platform built with React and Socket.io. Supports chat rooms, emoji pickers, and low-latency bidirectional communication with a scalable Node.js backend."
      },
      chatty_api: {
        desc: "REST API and WebSocket for messaging platform.",
        long: "Backend for the Chatty platform. Scalable Node.js architecture handling user persistence, JWT security, and low-latency bidirectional communication with Socket.io. Documented with Swagger."
      },
      feedback: {
        desc: "Comprehensive feedback platform in collaboration with Angie Natalia.",
        long: "Full-stack application developed in collaboration with Angie Natalia (project lead). I focused on the backend architecture, database (PostgreSQL + Prisma), and supported key frontend implementations in Next.js."
      },
      feedback_api: {
        desc: "Robust backend for corporate feedback platform.",
        long: "Complete backend architecture developed from scratch. Complex relational database management (PostgreSQL + Prisma), secure authentication, and multiple REST endpoints interactively documented with Swagger."
      },
      f1_hub: {
        desc: "Formula 1 statistics and telemetry platform.",
        long: "Interactive application that consumes the Jolpica API to display real-time results, driver statistics, and race analysis. Built with a robust backend to handle data synchronization."
      }
    }
  }
};
