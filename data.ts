type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    date?: string;
    price: number;
  };
  
  type Products = Product[];
  

  export const todaysMenu: Products = [
    {
      id: 1,
      title: "Arnavut Cigeri",
      desc: "Fried Liver",
      img: "/temporary/arnavutcigeri.jpg",
      price: 8,
    },
    {
        id: 2,
        title: "Biber Dolmasi",
        desc: "Pepper stuffed with rice, pine nuts, currants, and herbs, Vegan",
        img: "/temporary/biberdolmasi.jpg",
        price: 4,
      },
      {
        id: 3,
        title: "Cig Kofte",
        desc: "Spicy bulgur kofte, Vegan",
        img: "/temporary/cigkofte.jpg",
        price: 3,
      },
      {
        id: 4,
        title: "Enginar Dolmasi",
        desc: "Artichoke stuffed with rice, pine nuts, currants, and herbs, Vegan",
        img: "/temporary/enginardolmasi.jpg",
        price: 10,
      },
      {
        id: 5,
        title: "Topik",
        desc: "Chickpea and tahini dip, Vegan",
        img: "/temporary/topik.jpg",
        price: 8,
      },
      {
        id: 6,
        title: "Burma Baklava",
        desc: "Walnut filled filo pastry, Vegan",
        img: "/temporary/burmabaklava.jpg",
        price: 5,
      },
      {
        id: 7,
        title: "Irmik Helvasi",
        desc: "Semolina halva with pine nuts, Vegan",
        img: "/temporary/irmikhelvasi.jpg",
        price: 5,
      },
      {
        id: 8,
        title: "Sobiyet",
        desc: "Pistachio filled baklava, Vegan",
        img: "/temporary/sobiyet.jpg",
        price: 5,
      },
      {
        id: 9,
        title: "Un Helvasi",
        desc: "Flour halva with pine nuts, Vegan",
        img: "/temporary/unhelvasi.jpg",
        price: 3,
      },
      {
        id: 10,
        title: "Tahinli Kurabiye",
        desc: "Sesame cookie, Vegan",
        img: "/temporary/tahinlikurabiye.jpg",
        price: 3,
      },
  ];
  
 