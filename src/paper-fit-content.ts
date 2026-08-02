export const paperFitBrand = {
  homeHref: "/",
  logoAlt: "Paper Fit",
  logoSrc: "/brand/paper-fit-logo.svg",
} as const;

export const paperFitNavigation = [
  { label: "Productos", href: "#productos" },
  { label: "Trabajos Realizados", href: "#trabajos-realizados" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const paperFitContact = {
  email: "somipacking@gmail.com",
  location: "Lima, Perú",
  phone: "+51 924 725 290",
  phoneUrl: "tel:+51924725290",
  whatsappUrl: "https://wa.me/51924725290",
  whatsappLabel: "Cotizar por WhatsApp",
} as const;

export const paperFitSocialLinks = [
  {
    href: "https://www.facebook.com/Somipacking/",
    iconSrc: "/icons/paper-fit/facebook.svg",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/Somipacking",
    iconSrc: "/icons/paper-fit/instagram.svg",
    label: "Instagram",
  },
  {
    href: "https://wa.me/51924725290",
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
  hours: ["Lunes a viernes", "9:00 a. m. - 6:00 p. m."] as const,
} as const;

export const paperFitHero = {
  desktopImageSrc: "/images/paper-fit-hero-desktop.png",
  description:
    "Fabricamos cajas, bolsas y empaques personalizados con entrega rápida y acabados de calidad para empresas y emprendedores.",
  imageAlt:
    "El ajuste perfecto para tu marca: empaques personalizados, beneficios de fabricaciÃ³n directa, entrega rÃ¡pida, acabados de calidad y atenciÃ³n personalizada.",
  mobileImageSrc: "/images/paper-fit-hero-mobile-actions-v2.png",
  secondaryCtaLabel: "Ver trabajos realizados",
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
      description: "Empaques a medida para productos, alimentos, retail y más.",
    },
    {
      imageSrc:
        "/images/paper-fit-solutions/paper-fit-bolsas-personalizadas.webp",
      imageAlt: "Bolsas personalizadas de Paper Fit",
      iconSrc: "/icons/paper-fit-bolsas-personalizadas.svg",
      iconVariant: "accent",
      title: "Bolsas Personalizadas",
      description:
        "Bolsas kraft, couche y ecológicas personalizadas con tu marca.",
    },
    {
      imageSrc:
        "/images/paper-fit-solutions/paper-fit-packaging-alimentos.webp",
      imageAlt: "Packaging para alimentos de Paper Fit",
      iconSrc: "/icons/paper-fit-packaging-alimentos.svg",
      iconVariant: "primary",
      title: "Packaging para Alimentos",
      description: "Empaques para tortas, postres, repostería y delivery.",
    },
    {
      imageSrc:
        "/images/paper-fit-solutions/paper-fit-merchandising-corporativo.webp",
      imageAlt: "Merchandising corporativo de Paper Fit",
      iconSrc: "/icons/paper-fit-merchandising-corporativo.svg",
      iconVariant: "accent",
      title: "Merchandising Corporativo",
      description:
        "Artículos promocionales que fortalecen tu marca y conectan con tus clientes.",
    },
    {
      imageSrc:
        "/images/paper-fit-solutions/paper-fit-impresion-comercial.webp",
      imageAlt: "Impresión comercial de Paper Fit",
      iconSrc: "/icons/paper-fit-impresion-comercial.svg",
      iconVariant: "primary",
      title: "Impresión Comercial",
      description:
        "Material impreso para tu empresa con la mejor calidad y presentación.",
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
  buttonLabel: "Ver más trabajos",
  buttonHref: "#",

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
