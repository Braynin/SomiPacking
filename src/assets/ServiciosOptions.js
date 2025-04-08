import ImprentaProducts from "./ImprentaProducts.js";
import PackagingProducts from "./PackagingProducts.js";

const ServiciosOptions = [
  {
    title: "Imprenta",
    image: "imprenta.jpeg",
    video: "/Imprent-video.mp4",
    description:
      "Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.",
    href: "Imprenta",
    products: ImprentaProducts,
  },
  {
    title: "Packaging",
    image: "Packaging.jpeg",
    video: "/Packaging-video.mp4",
    description:
      "Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.",
    href: "Packaging",
    products: PackagingProducts,
  },
];
export default ServiciosOptions;
