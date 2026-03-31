export type Locale = "es" | "en";

export const translations = {
  es: {
    nav: {
      features: "Funcionalidades",
      pricing: "Precios",
      contact: "Contacto",
      login: "Iniciar Sesión",
      register: "Registrarse",
      dashboard: "Dashboard",
      logout: "Cerrar Sesión",
    },
    hero: {
      badge: "Plataforma de IA Legal #1 en República Dominicana",
      title: "Transforma tu Práctica Legal con",
      titleHighlight: "Inteligencia Artificial",
      subtitle:
        "JurisAI potencia a firmas de abogados con agentes de IA especializados en derecho dominicano. Revisión de contratos, due diligence, investigación legal y análisis predictivo — todo en una plataforma.",
      cta: "Comenzar Ahora",
      ctaSecondary: "Solicitar Demo",
      trustedBy: "Desarrollado sobre jurisprudencia dominicana",
    },
    features: {
      sectionTitle: "Funcionalidades",
      title: "Todo lo que tu Firma Necesita",
      subtitle:
        "Módulos especializados diseñados para el ecosistema legal dominicano.",
      items: [
        {
          title: "Revisión de Contratos",
          description:
            "Análisis automatizado de contratos con detección de riesgos, cláusulas faltantes y sugerencias de mejora basadas en derecho dominicano.",
          icon: "FileCheck",
        },
        {
          title: "Due Diligence Automatizado",
          description:
            "Ejecuta procesos de due diligence en minutos. Verifica antecedentes legales, corporativos y regulatorios de forma integral.",
          icon: "Search",
        },
        {
          title: "Investigación Legal Asistida",
          description:
            "Busca jurisprudencia del TSA, TSE, TC y Suprema Corte con IA que entiende el contexto legal dominicano.",
          icon: "BookOpen",
        },
        {
          title: "Inteligencia Procesal",
          description:
            "Análisis predictivo de litigios basado en historial de jueces, patrones de decisión y tendencias jurisdiccionales.",
          icon: "Brain",
        },
        {
          title: "Generación de Documentos",
          description:
            "Crea borradores de documentos legales profesionales adaptados a las normativas y formatos del sistema legal dominicano.",
          icon: "FileText",
        },
        {
          title: "Cumplimiento Regulatorio",
          description:
            "Monitoreo continuo de cumplimiento con DGII, ITBIS, NCF/e-CF y demás regulaciones fiscales y legales vigentes.",
          icon: "Shield",
        },
      ],
    },
    pricing: {
      sectionTitle: "Precios",
      title: "Planes que Escalan con tu Firma",
      subtitle:
        "Elige el plan que mejor se adapte a las necesidades de tu práctica legal.",
      monthly: "Mensual",
      annual: "Anual",
      annualSave: "Ahorra 20%",
      popular: "Más Popular",
      cta: "Comenzar",
      ctaEnterprise: "Contactar Ventas",
      perMonth: "/mes",
      perYear: "/año",
      plans: [
        {
          name: "Starter",
          description: "Ideal para abogados independientes",
          priceMonthly: "$99",
          priceAnnual: "$948",
          features: [
            "1 usuario",
            "Revisión de contratos básica",
            "Investigación legal asistida",
            "500 consultas/mes",
            "Soporte por email",
          ],
        },
        {
          name: "Professional",
          description: "Para firmas en crecimiento",
          priceMonthly: "$299",
          priceAnnual: "$2,868",
          features: [
            "Hasta 10 usuarios",
            "Todos los módulos de IA",
            "Inteligencia Procesal",
            "2,000 consultas/mes",
            "Soporte prioritario",
            "Integración con sistemas existentes",
          ],
        },
        {
          name: "Enterprise",
          description: "Para grandes firmas y corporativos",
          priceMonthly: "Custom",
          priceAnnual: "Custom",
          features: [
            "Usuarios ilimitados",
            "Todos los módulos + personalización",
            "API dedicada",
            "Consultas ilimitadas",
            "Deployment strategist dedicado",
            "SLA garantizado",
            "Facturación local (RNC/NCF)",
          ],
        },
      ],
    },
    testimonials: {
      title: "Lo que Dicen Nuestros Clientes",
      subtitle:
        "Firmas líderes en República Dominicana confían en JurisAI para transformar su práctica.",
    },
    cta: {
      title: "¿Listo para Transformar tu Práctica Legal?",
      subtitle:
        "Únete a las firmas que ya están usando IA para ser más eficientes, precisas y competitivas.",
      button: "Comenzar Gratis",
      buttonSecondary: "Agendar Demo",
    },
    footer: {
      description:
        "Plataforma de inteligencia artificial especializada en derecho dominicano. Potenciamos firmas de abogados con tecnología de vanguardia.",
      product: "Producto",
      company: "Empresa",
      legal: "Legal",
      about: "Sobre Nosotros",
      blog: "Blog",
      careers: "Carreras",
      privacy: "Privacidad",
      terms: "Términos",
      cookies: "Cookies",
      rights: "Todos los derechos reservados.",
      madeWith: "Hecho con",
      inDR: "en República Dominicana",
    },
    auth: {
      loginTitle: "Bienvenido de vuelta",
      loginSubtitle: "Ingresa a tu cuenta de JurisAI",
      registerTitle: "Crea tu Cuenta",
      registerSubtitle: "Comienza a transformar tu práctica legal hoy",
      email: "Correo Electrónico",
      password: "Contraseña",
      confirmPassword: "Confirmar Contraseña",
      name: "Nombre Completo",
      firm: "Nombre de la Firma",
      login: "Iniciar Sesión",
      register: "Crear Cuenta",
      forgotPassword: "¿Olvidaste tu contraseña?",
      noAccount: "¿No tienes cuenta?",
      hasAccount: "¿Ya tienes cuenta?",
      orContinueWith: "O continúa con",
      google: "Google",
      microsoft: "Microsoft",
    },
    contact: {
      title: "Contacta a Nuestro Equipo",
      subtitle:
        "¿Interesado en un plan Enterprise o tienes preguntas? Nuestro equipo está listo para ayudarte.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@firma.com",
      firmPlaceholder: "Nombre de tu firma",
      messagePlaceholder: "Cuéntanos sobre tus necesidades...",
      firmSize: "Tamaño de la firma",
      firmSizes: ["1-5 abogados", "6-20 abogados", "21-50 abogados", "50+ abogados"],
      submit: "Enviar Mensaje",
      success: "¡Mensaje enviado! Nos pondremos en contacto pronto.",
    },
    dashboard: {
      welcome: "Bienvenido",
      overview: "Resumen",
      modules: "Módulos",
      settings: "Configuración",
      recentActivity: "Actividad Reciente",
      quickActions: "Acciones Rápidas",
    },
  },
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      login: "Log In",
      register: "Sign Up",
      dashboard: "Dashboard",
      logout: "Log Out",
    },
    hero: {
      badge: "#1 Legal AI Platform in the Dominican Republic",
      title: "Transform Your Legal Practice with",
      titleHighlight: "Artificial Intelligence",
      subtitle:
        "JurisAI empowers law firms with AI agents specialized in Dominican law. Contract review, due diligence, legal research, and predictive analytics — all in one platform.",
      cta: "Get Started",
      ctaSecondary: "Request Demo",
      trustedBy: "Built on Dominican jurisprudence",
    },
    features: {
      sectionTitle: "Features",
      title: "Everything Your Firm Needs",
      subtitle:
        "Specialized modules designed for the Dominican legal ecosystem.",
      items: [
        {
          title: "Contract Review",
          description:
            "Automated contract analysis with risk detection, missing clauses, and improvement suggestions based on Dominican law.",
          icon: "FileCheck",
        },
        {
          title: "Automated Due Diligence",
          description:
            "Execute due diligence processes in minutes. Verify legal, corporate, and regulatory backgrounds comprehensively.",
          icon: "Search",
        },
        {
          title: "AI-Assisted Legal Research",
          description:
            "Search jurisprudence from TSA, TSE, TC, and Supreme Court with AI that understands Dominican legal context.",
          icon: "BookOpen",
        },
        {
          title: "Procedural Intelligence",
          description:
            "Predictive litigation analysis based on judge history, decision patterns, and jurisdictional trends.",
          icon: "Brain",
        },
        {
          title: "Document Generation",
          description:
            "Create professional legal document drafts adapted to Dominican legal system regulations and formats.",
          icon: "FileText",
        },
        {
          title: "Regulatory Compliance",
          description:
            "Continuous compliance monitoring with DGII, ITBIS, NCF/e-CF, and other current fiscal and legal regulations.",
          icon: "Shield",
        },
      ],
    },
    pricing: {
      sectionTitle: "Pricing",
      title: "Plans that Scale with Your Firm",
      subtitle:
        "Choose the plan that best fits your legal practice needs.",
      monthly: "Monthly",
      annual: "Annual",
      annualSave: "Save 20%",
      popular: "Most Popular",
      cta: "Get Started",
      ctaEnterprise: "Contact Sales",
      perMonth: "/mo",
      perYear: "/yr",
      plans: [
        {
          name: "Starter",
          description: "Ideal for independent attorneys",
          priceMonthly: "$99",
          priceAnnual: "$948",
          features: [
            "1 user",
            "Basic contract review",
            "AI-assisted legal research",
            "500 queries/month",
            "Email support",
          ],
        },
        {
          name: "Professional",
          description: "For growing firms",
          priceMonthly: "$299",
          priceAnnual: "$2,868",
          features: [
            "Up to 10 users",
            "All AI modules",
            "Procedural Intelligence",
            "2,000 queries/month",
            "Priority support",
            "Integration with existing systems",
          ],
        },
        {
          name: "Enterprise",
          description: "For large firms and corporates",
          priceMonthly: "Custom",
          priceAnnual: "Custom",
          features: [
            "Unlimited users",
            "All modules + customization",
            "Dedicated API",
            "Unlimited queries",
            "Dedicated deployment strategist",
            "Guaranteed SLA",
            "Local billing (RNC/NCF)",
          ],
        },
      ],
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle:
        "Leading firms in the Dominican Republic trust JurisAI to transform their practice.",
    },
    cta: {
      title: "Ready to Transform Your Legal Practice?",
      subtitle:
        "Join the firms already using AI to be more efficient, accurate, and competitive.",
      button: "Start Free",
      buttonSecondary: "Schedule Demo",
    },
    footer: {
      description:
        "Artificial intelligence platform specialized in Dominican law. We empower law firms with cutting-edge technology.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      about: "About Us",
      blog: "Blog",
      careers: "Careers",
      privacy: "Privacy",
      terms: "Terms",
      cookies: "Cookies",
      rights: "All rights reserved.",
      madeWith: "Made with",
      inDR: "in the Dominican Republic",
    },
    auth: {
      loginTitle: "Welcome Back",
      loginSubtitle: "Sign in to your JurisAI account",
      registerTitle: "Create Your Account",
      registerSubtitle: "Start transforming your legal practice today",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      name: "Full Name",
      firm: "Firm Name",
      login: "Log In",
      register: "Create Account",
      forgotPassword: "Forgot your password?",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      orContinueWith: "Or continue with",
      google: "Google",
      microsoft: "Microsoft",
    },
    contact: {
      title: "Contact Our Team",
      subtitle:
        "Interested in an Enterprise plan or have questions? Our team is ready to help.",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@firm.com",
      firmPlaceholder: "Your firm name",
      messagePlaceholder: "Tell us about your needs...",
      firmSize: "Firm size",
      firmSizes: ["1-5 attorneys", "6-20 attorneys", "21-50 attorneys", "50+ attorneys"],
      submit: "Send Message",
      success: "Message sent! We'll be in touch soon.",
    },
    dashboard: {
      welcome: "Welcome",
      overview: "Overview",
      modules: "Modules",
      settings: "Settings",
      recentActivity: "Recent Activity",
      quickActions: "Quick Actions",
    },
  },
} as const;

export type TranslationKeys = (typeof translations)[Locale];
