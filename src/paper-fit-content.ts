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
