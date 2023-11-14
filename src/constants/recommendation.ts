export interface recommendationMenuType {
  menuItems: {
    label: string;
    url: string;
  }[];
}

export const recommendationMenu: recommendationMenuType = {
  menuItems: [
    {
      label: "Recommended",
      url: "#",
    },
    {
      label: "What's New",
      url: "#",
    },
    {
      label: "Popularity",
      url: "#",
    },
    {
      label: "Better Discount",
      url: "#",
    },
    {
      label: "Price: High to Low",
      url: "#",
    },

    {
      label: "Price: Low to High",
      url: "#",
    },
    {
      label: "Customer Rating",
      url: "#",
    },
  ],
};
