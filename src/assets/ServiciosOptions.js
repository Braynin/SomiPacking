import ImprentaProducts from "./ImprentaProducts.js";
import PackagingProducts from "./PackagingProducts.js";

const ServiciosOptions = [
  {
    title: "Imprenta",
    image: "imprenta.jpeg",
    video: "/Imprenta.-video.mp4",
    description:
      "Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.",
    href: "imprenta",
    products: ImprentaProducts,
  },
  {
    title: "Packaging",
    image: "Packaging.jpeg",
    video: "/Packaging-video.mp4",
    description:
      "Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.Cajas de diferentes tamaños y colores.",
    href: "packaging",
    products: PackagingProducts,
  },
];
export default ServiciosOptions;
