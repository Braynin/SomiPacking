const PackagingProducts = [
  {
    title: "Bolsas",
    icon: "Bolsas.webp",
    image: "Bolsas.webp",
    description: "Bolsas de diferentes tamaños y colores.",
    longDescription:
      "Fabricamos en diversos materiales y acabados para adaptarse a cada necesidad. Diseñadas para ofrecer resistencia y estilo.",
    variants: [
      {
        title: "Bolsa con asa twist",
        image: "Bolsa asa twist.png",
        caracteristicas: {
          Material: "Kraft, bond o couche.",
          Asa: "Twist pegada con refuerzo interno.",
          Impresión: "Offset o serigrafía.",
          Gramaje: "100 gr a 180 gr (según la resistencia requerida).",
          Usos: "Delivery de comida, tiendas de ropa, boutiques, panaderías y más.",
          Medida: "Personalizada.",
        },
      },
      {
        title: "Bolsa con asa troquel",
        image: "Bolsa asa troquel.png",
        caracteristicas: {
          Material: "Kraft, bond, couche, foldcote.",
          Asa: "Troquelada directamente en la bolsa.",
          Impresión: "Offset, serigrafía o hot stamping (acabados premium).",
          Usos: "Tiendas de ropa, calzado y accesorios, delivery.",
          Medida: "Personalizada.",
        },
      },
      {
        title: "Bolsa con asa cordón",
        image: "Bolsa con asa cordón.png",
        caracteristicas: {
          Material: "Couche o foldcote.",
          Asa: "Cordón de algodón o nylon, anudadas o sujetas con remaches metálicos.",
          Usos: "Joyerías, perfumerías, boutiques, regalos corporativos.",
          Impresión:
            "Offset, serigrafía, hot stamping o UV para acabados de lujo.",
          Medida: "Personalizada.",
        },
      },
      {
        title: "Bolsa Kraft",
        image: "Bolsas kraft sin asa.png",
        caracteristicas: {
          Material: "Kraft natural.",
          Impresión: "Serigrafía o flexografía.",
          Usos: "Alimentos (delivery de comida, panadería y pastelería), farmacias, tiendas minoristas (empaque de ropa, accesorios o regalos).",
          Medidas: { type: "image", src: "tabla-bolsas-kraft.png" },
        },
      },
      {
        title: "Bolsa para vino",
        image: "Bolsa para vino.png",
        caracteristicas: {
          Material: "Kraft, couche laminado.",
          Asa: "Cordón, cinta o troquelada.",
          Base: "Reforzada",
          Impresión: "Offset o serigrafía.",
          Usos: "Regalos corporativos, tiendas de licorería, restaurantes.",
        },
      },
      {
        title: "Bolsa portacubierto",
        image: "Bolsa portacubierto.png",
        caracteristicas: {
          Material: "Kraft.",
          Impresión: "Serigrafía o flexografía.",
          Usos: "Catering, eventos, restaurantes, cafeterías, bares.",
          Medida: "10 x 28 cm, 8 x 28 cm y 7 x 25 cm.",
        },
      },
      {
        title: "Bolsa Kraft delivery",
        image: "Bolsa-Kraft-Delivery.png",
        caracteristicas: {
          Material: "Papel kraft.",
          Medida: "36 x 28 x 18 cm.",
          Impresión: "Serigrafía.",
        },
      },
      {
        title: "Portavaso",
        image: "Porta vaso.png",
        caracteristicas: {
          Material: "Linner de 275 gr.",
          Tamaño: "22 x 48 cm.",
          Asa: "Troquelada.",
          Descripción:
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
      "Fabricamos cajas a medida, con materiales de calidad y diseños personalizados para garantizar una experiencia de marca única. Protegen y realzan la presentación de tus productos.",
    variants: [
      {
        title: "Caja Ecommerce",
        image: "Caja ecommerce -SI.png",
        caracteristicas: {
          Material: "Cartón microcorrugado.",
          Impresión: "Serigrafía u offset.",
          "Auto armable": "Sí.",
          Acabado: "Plastificado mate o brillante.",
          Usos: "Envío de accesorios, ropa, regalos corporativos, cosméticos y más.",
          Medida: "Personalizada.",
        },
      },
      {
        title: "Caja de pizza",
        image: "Caja pizza.png",
        caracteristicas: {
          Material: "Cartón microcorrugado, foldcote.",
          Impresión: "Serigrafía.",
          "Auto armable": "Sí.",
          Ventilaciones: "Troqueladas.",
          Usos: "Pizzerías, food trucks y restaurantes.",
          Medida: "#18, #20, #25, #30, #35, #40, #45.",
        },
      },
      {
        title: "Caja tipo KFC",
        image: "Caja tipo KFC.png",
        caracteristicas: {
          Material: "Dúplex CL 16.",
          Impresión: "Serigrafía, offset.",
          "Auto armable": "Sí.",
          Acabado: "Plastificado.",
          Ventilación: "Orificios de ventilación.",
          Barniz: "Antigraso interno.",
          Usos: "Delivery y take-away en restaurantes de comida rápida.",
          Medida: "19 cm x 12.5 cm, 8 cm.",
        },
      },
      {
        title: "Caja de pollo",
        image: "Caja pollo.png",
        caracteristicas: {
          Material: "Foldcote, linner.",
          Impresión: "Serigrafía, offset.",
          "Auto armable": "Sí.",
          Ventilaciones: "Troqueladas.",
          Barniz: "Antigraso interno.",
          Orificios: "De ventilación.",
          Usos: "Restaurantes de comida rápida, food trucks y catering.",
          Personalizable: "Sí.",
        },
      },
      {
        title: "Caja de hamburguesa",
        image: "Caja hamburguesa.png",
        caracteristicas: {
          Material: "Linner.",
          Impresión: "Serigrafía, offset.",
          "Auto armable": "Sí.",
          Barniz: "Antigraso interno.",
          Usos: "Restaurantes de comida rápida, food trucks y delivery.",
        },
      },
      {
        title: "Bandeja",
        image: "Bandeja.png",
        caracteristicas: {
          Material: "Cartulina kraft, foldcote.",
          Impresión: "Serigrafía, offset.",
          "Auto armable": "Sí.",
          Barniz: "Antigraso interno.",
          Usos: "Delivery de comida.",
          Medida: "21 cm x 4.5 cm.",
        },
      },
      {
        title: "Caja cupcakes",
        image: "Caja Cupcakes.png",
        caracteristicas: {
          Material: "Cartulina kraft, foldcote.",
          Impresión: "Serigrafía, offset.",
          "Auto armable": "Sí.",
          Acabado: "Plastificado mate o brillante.",
          Divisores: "Internos.",
          Usos: "Pastelerías, reposterías, eventos y celebraciones.",
        },
      },
      {
        title: "Caja de torta",
        image: "Caja torta.png",
        caracteristicas: {
          Material: "Cartulina kraft, foldcote.",
          Impresión: "Serigrafía, offset.",
          "Auto armable": "Sí.",
          Acabado: "Plastificado mate o brillante.",
          Usos: "Pastelerías, reposterías, eventos y celebraciones.",
        },
      },
      {
        title: "Caja papas",
        image: "Cajas para papa.png",
        caracteristicas: {
          Material: "Cartulina kraft, foldcote.",
          Impresión: "Serigrafía, offset.",
          "Auto armable": "Sí.",
          Barniz: "Antigraso interno.",
          Usos: "Restaurantes de comida rápida, food trucks y delivery.",
        },
      },
      {
        title: "Caja macarrones",
        image: "Caja macarrón.png",
        caracteristicas: {
          Material: "Cartulina kraft, foldcote, dúplex.",
          Acabado: "Plastificado mate o brillante.",
          Impresión: "Serigrafía, offset.",
          "Auto armable": "Sí.",
          Usos: "Pastelerías, reposterías y servicios de delivery de postres gourmet.",
        },
      },
      {
        title: "Caja de chocolates",
        image: "Caja chocolate.png",
        caracteristicas: {
          Material: "Cartulina kraft, foldcote, dúplex.",
          Acabado: "Plastificado mate o brillante.",
          Impresión: "Serigrafía, offset.",
          "Auto armable": "Sí.",
          Usos: "Pastelerías, reposterías y servicios de delivery de postres gourmet.",
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
          Material: "Papel manteca.",
          Usos: "Empaque de pasteles, embalaje de alimentos fritos.",
          Impresión: "Offset.",
          Personalizable: "Sí.",
        },
      },
      {
        title: "Individuales",
        image: "Brown and Green Simple Paper Bag Mockup Instagram Post.png",
        caracteristicas: {
          Material: "Papel kraft, bond.",
          Impresión: "Offset.",
          Usos: "Restaurantes, cafeterías, catering y eventos.",
          Personalizable: "Sí.",
        },
      },
      {
        title: "Sobre y cono papa",
        image: "Sobre y cono papa.png",
        caracteristicas: {
          Material: "Papel kraft, bond, papel manteca.",
          "Auto armable": "Sí.",
          Usos: "Restaurantes de comida rápida, food trucks, ferias gastronómicas y servicios de delivery.",
          Personalizable: "Sí.",
        },
      },
      {
        title: "Posavasos",
        image: "Posa vasos.png",
        caracteristicas: {
          Material: "Cartón kraft, prensado, foldcote.",
          Acabado: "Plastificado mate o brillante.",
          Usos: "Restaurantes, bares, cafeterías y eventos.",
          Personalizable: "Sí.",
        },
      },
    ],
  },
];

export default PackagingProducts;
