const PackagingProducts = [
  {
    title: "Bolsas",
    icon: "Bolsas.webp",
    image: "Bolsas.webp",
    description: "Bolsas de diferentes tamaños y colores.",
    longDescription:
      "Diseñadas para ofrecer resistencia y estilo. Fabricamos en diversos materiales y acabados para adaptarse a cada necesidad.",
    variants: [
      {
        title: "Bolsa con asa twist",
        image: "Bolsa asa twist.png",
        caracteristicas: {
          material: "Kraft, bond o couche.",
          asa: "Twist pegada con refuerzo interno.",
          impresion: "Offset o serigrafía.",
          gramaje: "100 gr a 180 gr (según la resistencia requerida).",
          usos: "Delivery de comida, tiendas de ropa, boutiques, panaderías y más.",
          medida: "Personalizada.",
        },
      },
      {
        title: "Bolsa con asa troquel",
        image: "Bolsa asa troquel.png",
        caracteristicas: {
          material: "Kraft, bond, couche, foldcote.",
          asa: "Troquelada directamente en la bolsa.",
          impresion: "Offset, serigrafía o hot stamping (acabados premium).",
          usos: "Tiendas de ropa, calzado y accesorios, delivery.",
          medida: "Personalizada.",
        },
      },
      {
        title: "Bolsa con asa cordón",
        image: "Bolsa con asa cordón.png",
        caracteristicas: {
          material: "Couche o foldcote.",
          asa: "Cordón de algodón o nylon, anudadas o sujetas con remaches metálicos.",
          plastificado: "Plastificado.",
          impresion:
            "Offset, serigrafía, hot stamping o UV para acabados de lujo.",
          medida: "Personalizada.",
        },
      },
      {
        title: "Bolsa Kraft",
        image: "Bolsas kraft sin asa.png",
        caracteristicas: {
          material: "Kraft natural.",
          impresion: "Serigrafía o flexografía.",
          usos: "Alimentos (delivery de comida, panadería y pastelería), farmacias, tiendas minoristas (empaque de ropa, accesorios o regalos).",
          tabla: { type: "image", src: "tabla-bolsas-kraft.png" },
        },
      },
      {
        title: "Bolsa para vino",
        image: "Bolsa para vino.png",
        caracteristicas: {
          material: "Kraft, couche laminado.",
          asa: "Cordón, cinta o troquelada.",
          refuerzo: "En la base.",
          impresion: "Offset o serigrafía.",
          usos: "Regalos corporativos, tiendas de licorería, restaurantes.",
        },
      },
      {
        title: "Bolsa portacubierto",
        image: "Bolsa portacubierto.png",
        caracteristicas: {
          material: "Couche o foldcote, kraft, bond o couche.",
          impresion: "Serigrafía o flexografía.",
          usos: "Catering, eventos, restaurantes, cafeterías, bares.",
          medida: "10 x 28 cm, 8 x 28 cm y 7 x 25 cm.",
        },
      },
      {
        title: "Bolsa Kraft delivery",
        image: "Bolsa-Kraft-Delivery.png",
        caracteristicas: {
          material: "Papel kraft.",
          medida: "36 x 28 x 18 cm.",
          personalizacion: "Con serigrafía.",
        },
      },
      {
        title: "Portavaso",
        image: "Porta vaso.png",
        caracteristicas: {
          material: "Linner de 275 gr.",
          tamaño: "22 x 48 cm.",
          asa: "Troquelada.",
          descripcion:
            "Práctico y seguro. Ideal para transportar vasos de 8 oz, 12 oz, 16 oz.",
        },
      },
    ],
  },
  {
    title: "Cajas",
    icon: "Cajas.webp",
    image: "Cajas.webp",
    description: "Cajas de diferentes tamaños y colores.",
    longDescription:
      "Protegen y realzan la presentación de tus productos. Fabricamos cajas a medida, con materiales de calidad y diseños personalizados para garantizar una experiencia de marca única.",
    variants: [
      {
        title: "Caja Ecommerce",
        image: "Caja ecommerce -SI.png",
        caracteristicas: {
          material: "Cartón microcorrugado.",
          impresion: "Serigrafía u offset.",
          auto_armable: "Sí.",
          acabado: "Plastificado: mate o brillante.",
          usos: "Envío de accesorios, ropa, regalos corporativos, cosméticos y más.",
          medida: "Personalizada.",
        },
      },
      {
        title: "Caja de pizza",
        image: "Caja pizza.png",
        caracteristicas: {
          material: "Cartón microcorrugado, foldcote.",
          impresion: "Serigrafía.",
          auto_armable: "Sí.",
          ventilaciones: "Troqueladas.",
          usos: "Pizzerías, food trucks y restaurantes.",
          medida: "#18, #20, #25, #30, #35, #40, #45.",
        },
      },
      {
        title: "Caja tipo KFC",
        image: "Caja tipo KFC.png",
        caracteristicas: {
          material: "Dúplex CL 16.",
          impresion: "Serigrafía, offset.",
          auto_armable: "Sí.",
          acabado: "Plastificado.",
          ventilacion: "Orificios de ventilación.",
          barniz: "Antigraso interno.",
          usos: "Delivery y take-away en restaurantes de comida rápida.",
          medida: "19 cm x 12.5 cm, 8 cm.",
        },
      },
      {
        title: "Caja de pollo",
        image: "Caja pollo.png",
        caracteristicas: {
          material: "Foldcote, linner.",
          impresion: "Serigrafía, offset.",
          auto_armable: "Sí.",
          ventilaciones: "Troqueladas.",
          barniz: "Antigraso interno.",
          orificios: "De ventilación.",
          usos: "Restaurantes de comida rápida, food trucks y catering.",
          personalizable: "Sí.",
        },
      },
      {
        title: "Caja de hamburguesa",
        image: "Caja hamburguesa.png",
        caracteristicas: {
          material: "Linner.",
          impresion: "Serigrafía, offset.",
          auto_armable: "Sí.",
          barniz: "Antigraso interno.",
          usos: "Restaurantes de comida rápida, food trucks y delivery.",
        },
      },
      {
        title: "Bandeja",
        image: "Bandeja.png",
        caracteristicas: {
          material: "Cartulina kraft, foldcote.",
          impresion: "Serigrafía, offset.",
          auto_armable: "Sí.",
          barniz: "Antigraso interno.",
          usos: "Delivery de comida.",
          medida: "21 cm x 4.5 cm.",
        },
      },
      {
        title: "Caja cupcakes",
        image: "Caja Cupcakes.png",
        caracteristicas: {
          material: "Cartulina kraft, foldcote.",
          impresion: "Serigrafía, offset.",
          auto_armable: "Sí.",
          acabado: "Plastificado: mate o brillante.",
          divisores: "Internos.",
          usos: "Pastelerías, reposterías, eventos y celebraciones.",
        },
      },
      {
        title: "Caja de torta",
        image: "Caja torta.png",
        caracteristicas: {
          material: "Cartulina kraft, foldcote.",
          impresion: "Serigrafía, offset.",
          auto_armable: "Sí.",
          acabado: "Plastificado: mate o brillante.",
          usos: "Pastelerías, reposterías, eventos y celebraciones.",
        },
      },
      {
        title: "Caja papas",
        image: "Cajas para papa.png",
        caracteristicas: {
          material: "Cartulina kraft, foldcote.",
          impresion: "Serigrafía, offset.",
          auto_armable: "Sí.",
          barniz: "Antigraso interno.",
          usos: "Restaurantes de comida rápida, food trucks y delivery.",
        },
      },
      {
        title: "Caja macarrones",
        image: "Caja macarrón.png",
        caracteristicas: {
          material: "Cartulina kraft, foldcote, dúplex.",
          acabado: "Plastificado: mate o brillante.",
          impresion: "Serigrafía, offset.",
          auto_armable: "Sí.",
          usos: "Pastelerías, reposterías y servicios de delivery de postres gourmet.",
        },
      },
      {
        title: "Caja de chocolates",
        image: "Caja chocolate.png",
        caracteristicas: {
          material: "Cartulina kraft, foldcote, dúplex.",
          acabado: "Plastificado: mate o brillante.",
          impresion: "Serigrafía, offset.",
          auto_armable: "Sí.",
          usos: "Pastelerías, reposterías y servicios de delivery de postres gourmet.",
        },
      },
    ],
  },
  {
    title: "Envolturas",
    icon: "Envoltura.webp",
    image: "Envoltura.webp",
    description: "Bolsas de diferentes tamaños y colores.",
    longDescription:
      "Soluciones flexibles y versátiles para el embalaje de productos. Ofrecemos opciones que combinan estética y funcionalidad.",
    variants: [
      {
        title: "Papel antigrasa",
        image: "Papel antigrasa.jpg",
        caracteristicas: {
          material: "Papel manteca.",
          usos: "Empaque de pasteles, embalaje de alimentos fritos.",
          impresion: "Serigrafía, offset.",
          personalizable: "Sí.",
        },
      },
      {
        title: "Individuales",
        image: "Individual.jpg",
        caracteristicas: {
          material: "Papel kraft, bond.",
          impresion: "Serigrafía, offset.",
          usos: "Restaurantes, cafeterías, catering y eventos.",
          personalizable: "Sí.",
        },
      },
      {
        title: "Sobre y cono papa",
        image: "Sobre y cono papa.png",
        caracteristicas: {
          material: "Papel kraft, bond, papel manteca.",
          auto_armable: "Sí.",
          usos: "Restaurantes de comida rápida, food trucks, ferias gastronómicas y servicios de delivery.",
          personalizable: "Sí.",
        },
      },
      {
        title: "Posavasos",
        image: "Posa vasos.png",
        caracteristicas: {
          material: "Cartón kraft, prensado, foldcote.",
          acabado: "Plastificado: mate o brillante.",
          usos: "Restaurantes, bares, cafeterías y eventos.",
          personalizable: "Sí.",
        },
      },
    ],
  },
];

export default PackagingProducts;
