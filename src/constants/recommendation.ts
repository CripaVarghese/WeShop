export interface recommendationMenuType {
  menuItems: {
    header: string;
    url: string;
  }[];
}

export const recommendationMenu: recommendationMenuType = {
  menuItems: [
    {
      header: "Recommended",
      url: "#",
    },
    {
      header: "What's New",
      url: "#",
    },
    {
      header: "Popularity",
      url: "#",
    },
    {
      header: "Better Discount",
      url: "#",
    },
    {
      header: "Price: High to Low",
      url: "#",
    },

    {
      header: "Price: Low to High",
      url: "#",
    },
    {
      header: "Customer Rating",
      url: "#",
    },
  ],
};
