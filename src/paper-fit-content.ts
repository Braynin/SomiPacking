export const paperFitBrand = {
  homeHref: "/",
  logoAlt: "Paper Fit",
  logoSrc: "/brand/paper-fit-logo.svg",
} as const;

const paperFitWhatsappUrl = "https://wa.me/51924725290";
const paperFitWhatsappMessage =
  "¡Hola, Paper Fit! Quisiera recibir información sobre su catálogo de productos. Muchas gracias.";

export const paperFitNavigation = [
  { label: "Nuestras Soluciones", href: "#nuestras-soluciones" },
  { label: "Trabajos Realizados", href: "#trabajos-realizados" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const paperFitContact = {
  email: "ventas@paperfit.pe",
  location: "Jr. Antonio de Elizalde 520, Cercado de Lima",
  phone: "+51 924 725 290",
  phoneUrl: "tel:+51924725290",
  whatsapp: {
    href: `${paperFitWhatsappUrl}?text=${encodeURIComponent(paperFitWhatsappMessage)}`,
    label: "Cotizar por WhatsApp",
    message: paperFitWhatsappMessage,
    url: paperFitWhatsappUrl,
  },
} as const;

export const paperFitSocialLinks = [
  {
    href: "https://www.facebook.com/Somipacking/",
    iconSrc: "/icons/paper-fit/facebook.svg",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/paperfit_?igsh=cnp6YmNocjR4OGpx",
    iconSrc: "/icons/paper-fit/instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@somipackaging?_r=1&_t=ZS-98bibdvE1ZM",
    iconSrc: "/icons/paper-fit/tiktok.svg",
    label: "TikTok",
  },
  {
    href: paperFitContact.whatsapp.href,
    iconSrc: "/icons/paper-fit/whatsapp.svg",
    label: "WhatsApp",
  },
] as const;

export const paperFitFooter = {
  bookOfClaimsUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSfluLvLxw08XpL0FuoX0-2rDSiijRtQtHBn4vuPYy5zYmaEwQ/viewform?usp=send_form",
  companyDescription:
    "Fabricamos cajas, bolsas y empaques personalizados con entrega rápida y acabados de calidad.",
  copyright: "© 2026 Paper Fit. Todos los derechos reservados.",
  hours: [
    { days: "Lunes a viernes", time: "9 a. m. a 6 p. m." },
    { days: "Sábado", time: "9 a. m. a 2 p. m." },
  ] as const,
} as const;

export const paperFitHero = {
  desktopImageSrc: "/images/paper-fit-hero-desktop.png",
  description:
    "Fabricamos cajas, bolsas y empaques personalizados con entrega rápida y acabados de calidad para empresas y emprendedores.",
  imageAlt:
    "El ajuste perfecto para tu marca: empaques personalizados, beneficios de fabricaciÃ³n directa, entrega rÃ¡pida, acabados de calidad y atenciÃ³n personalizada.",
  mobileImageSrc: "/images/paper-fit-hero-mobile.jpeg",
  titleAccent: "para tu marca",
  titlePrimary: "El ajuste perfecto",
} as const;

export const paperFitSolutions = {
  title: "Nuestras Soluciones",

  items: [
    {
      imageSrc:
        "/images/paper-fit-solutions/paper-fit-cajas-personalizadas.webp",
      imageAlt: "Cajas personalizadas de Paper Fit",
      iconSrc: "/icons/paper-fit-cajas-personalizadas.svg",
      iconVariant: "primary",
      title: "Cajas Personalizadas",
      materials: ["Foldcote", "Kraft", "Microcorrugado"],
      applications: [
        "Alimentos",
        "Retail",
        "Cosméticos",
        "Regalos",
        "Corporativo",
      ],
      buttonLabel: "Cotizar cajas",
      whatsappMessage: "¡Hola, Paper Fit! Quiero cotizar Cajas Personalizadas.",
    },
    {
      imageSrc:
        "/images/paper-fit-solutions/paper-fit-bolsas-personalizadas.webp",
      imageAlt: "Bolsas personalizadas de Paper Fit",
      iconSrc: "/icons/paper-fit-bolsas-personalizadas.svg",
      iconVariant: "accent",
      title: "Bolsas Personalizadas",
      materials: ["Kraft", "Couché", "Bond"],
      applications: [
        "Tiendas",
        "Boutiques",
        "Eventos",
        "Corporativo",
        "Promociones",
      ],
      buttonLabel: "Cotizar bolsas",
      whatsappMessage:
        "¡Hola, Paper Fit! Quiero cotizar Bolsas Personalizadas.",
    },
    {
      imageSrc:
        "/images/paper-fit-solutions/paper-fit-packaging-alimentos.webp",
      imageAlt: "Packaging para alimentos de Paper Fit",
      iconSrc: "/icons/paper-fit-packaging-alimentos.svg",
      iconVariant: "primary",
      title: "Packaging para Alimentos",
      materials: ["Kraft", "Foldcote", "Microcorrugado"],
      applications: [
        "Pastelería",
        "Panadería",
        "Delivery",
        "Cafeterías",
        "Repostería",
      ],
      buttonLabel: "Cotizar packaging",
      whatsappMessage:
        "¡Hola, Paper Fit! Quiero cotizar Packaging para Alimentos.",
    },
    {
      imageSrc:
        "/images/paper-fit-solutions/paper-fit-merchandising-corporativo.webp",
      imageAlt: "Merchandising corporativo de Paper Fit",
      iconSrc: "/icons/paper-fit-merchandising-corporativo.svg",
      iconVariant: "accent",
      title: "Merchandising Corporativo",
      materials: ["Papel", "Cartón", "Metal", "Plástico", "Tela"],
      applications: [
        "Agendas",
        "Cuadernos",
        "Lapiceros",
        "Tomatodos",
        "Tazas y más",
      ],
      buttonLabel: "Cotizar merchandising",
      whatsappMessage:
        "¡Hola, Paper Fit! Quiero cotizar Merchandising Corporativo.",
    },
    {
      imageSrc:
        "/images/paper-fit-solutions/paper-fit-impresion-comercial.webp",
      imageAlt: "Impresión comercial de Paper Fit",
      iconSrc: "/icons/paper-fit-impresion-comercial.svg",
      iconVariant: "primary",
      title: "Impresión Comercial",
      materials: ["Couché", "Bond", "Cartulina", "Adhesivos"],
      applications: [
        "Tarjetas",
        "Folders",
        "Catálogos",
        "Volantes",
        "Stickers y etiquetas",
      ],
      buttonLabel: "Cotizar impresión",
      whatsappMessage: "¡Hola, Paper Fit! Quiero cotizar Impresión Comercial.",
    },
  ],
} as const;

export const paperFitWorkflow = {
  title: "¿Cómo trabajamos?",

  steps: [
    {
      number: 1,
      iconSrc: "/icons/paper-fit-envianos-tu-diseno.svg",
      iconAlt: "Envíanos tu diseño",
      title: "Envíanos tu diseño",
      description: "Nos envías tu diseño listo para impresión.",
    },
    {
      number: 2,
      iconSrc: "/icons/paper-fit-cotizamos.svg",
      iconAlt: "Cotizamos",
      title: "Cotizamos",
      description: "Cotizamos según medida, cantidad y acabados.",
    },
    {
      number: 3,
      iconSrc: "/icons/paper-fit-fabricamos.svg",
      iconAlt: "Fabricamos",
      title: "Fabricamos",
      description: "Iniciamos la producción con altos estándares de calidad.",
    },
    {
      number: 4,
      iconSrc: "/icons/paper-fit-entregamos.svg",
      iconAlt: "Entregamos",
      title: "Entregamos",
      description: "Te entregamos tu pedido listo para usar.",
    },
  ],
} as const;

export const paperFitWorkGallery = {
  title: "Trabajos realizados",
  autoplayInterval: 2000,
  autoplayResumeDelay: 4000,

  items: [
    {
      imageSrc: "/images/paper-fit-work-gallery/paper-fit-work-almaCen.webp",
      imageAlt: "Trabajo realizado para Alma Cen",
    },
    {
      imageSrc: "/images/paper-fit-work-gallery/paper-fit-work-Cumpa.webp",
      imageAlt: "Trabajo realizado para Cumpa",
    },
    {
      imageSrc: "/images/paper-fit-work-gallery/paper-fit-work-elPiombino.webp",
      imageAlt: "Trabajo realizado para El Piombino",
    },
    {
      imageSrc: "/images/paper-fit-work-gallery/paper-fit-work-LP.webp",
      imageAlt: "Trabajo realizado para LP",
    },
    {
      imageSrc:
        "/images/paper-fit-work-gallery/paper-fit-work-vivoXderecho.webp",
      imageAlt: "Trabajo realizado para Vivo X Derecho",
    },
    {
      imageSrc: "/images/paper-fit-work-gallery/paper-fit-work-Caja.webp",
      imageAlt: "Caja kraft abierta para packaging",
    },
    {
      imageSrc:
        "/images/paper-fit-work-gallery/paper-fit-work-Cumpa-bolsa.webp",
      imageAlt: "Bolsa kraft personalizada para Cumpa",
    },
  ],
} as const;

export const paperFitTrust = {
  trustTitle: "¿Quiénes confían en nosotros?",

  trustItems: [
    {
      iconSrc: "/icons/paper-fit-trust/paper-fit-restaurantes.svg",
      iconAlt: "Restaurantes",
      label: "Restaurantes",
    },
    {
      iconSrc: "/icons/paper-fit-trust/paper-fit-pastelerias.svg",
      iconAlt: "Pastelerías",
      label: "Pastelerías",
    },
    {
      iconSrc: "/icons/paper-fit-trust/paper-fit-cafeterias.svg",
      iconAlt: "Cafeterías",
      label: "Cafeterías",
    },
    {
      iconSrc: "/icons/paper-fit-trust/paper-fit-empresas.svg",
      iconAlt: "Empresas",
      label: "Empresas",
    },
    {
      iconSrc: "/icons/paper-fit-trust/paper-fit-retail.svg",
      iconAlt: "Retail",
      label: "Retail",
    },
    {
      iconSrc: "/icons/paper-fit-trust/paper-fit-emprendedores.svg",
      iconAlt: "Emprendedores",
      label: "Emprendedores",
    },
  ],

  quoteTitle: "¿Qué necesitamos para cotizar?",

  requirements: [
    "Medidas del producto",
    "Cantidad requerida",
    "Diseño listo para impresión",
    "Acabados deseados",
  ],

  note: "¿No tienes las medidas? Nuestro equipo puede asesorarte sin compromiso.",

  illustrationSrc: "/icons/paper-fit-packaging-box.svg",
  illustrationAlt: "Caja de packaging",
} as const;
