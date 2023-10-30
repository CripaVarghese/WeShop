interface Navigation {
  label: string; // TopWear
  url?: string; // /top-wear
}
interface NavGroup {
  header: Navigation;
  menuItems?: Navigation[];
}

type NavColumn = NavGroup[];

interface CategoryOptions {
  header: Navigation[]; // MEN
  navGrid: {
    column: string;
    categories: {
      header: {
        label: string;
        url: string;
      };
      menuItems: {
        label: string;
        url: string;
      }[];
    }[];
  }[];
}

export const navbarOptionsData: CategoryOptions = {
  header: [
    {
      label: "Men",
      url: "/men",
    },
    {
      label: "women",
      url: "/men",
    },
    {
      label: "KIDS",
      url: "/kids",
    },
    {
      label: "HOME & LIVING",
      url: "/home_and_living",
    },
    {
      label: "BEAUTY",
      url: "/beauty",
    },
    {
      label: "STUDIO",
      url: "/studio",
    },
  ],
  navGrid: [
    {
      column: "column_one",
      categories: [
        {
          header: {
            label: "TopWear",
            url: "/men",
          },
          menuItems: [
            {
              label: "T-Shirts",
              url: "/men",
            },
            {
              label: "Casual Shirts",
              url: "#",
            },
            {
              label: "Formal Shirts",
              url: "#",
            },
            {
              label: "Sweatshirts",
              url: "#",
            },
            {
              label: "Sweaters",
              url: "#",
            },
            {
              label: "Jackets",
              url: "#",
            },
            {
              label: "Blazers & Coats",
              url: "#",
            },
            {
              label: "Suits",
              url: "#",
            },
            {
              label: "Rain Jackets",
              url: "#",
            },
          ],
        },
        {
          header: {
            label: "Indian & Festive Wear",
            url: "/men",
          },
          menuItems: [
            {
              label: "Kurtas & Kurta Sets",
              url: "#",
            },
            {
              label: "Sherwanis",
              url: "#",
            },
            {
              label: "Nehru Jackets",
              url: "#",
            },
            {
              label: "Dhotis",
              url: "#",
            },
          ],
        },
      ],
    },
    // {
    //   column: "column_two",
    //   categories: [
    //     {
    //       header: {
    //         label: "Bottomwear",
    //         url: "/men",
    //       },
    //       menuItems: [
    //         {
    //           label: "T-Shirts",
    //           url: "/men",
    //         },
    //         {
    //           label: "Casual Shirts",
    //           url: "#",
    //         },
    //         {
    //           label: "Formal Shirts",
    //           url: "#",
    //         },
    //         {
    //           label: "Sweatshirts",
    //           url: "#",
    //         },
    //         {
    //           label: "Sweaters",
    //           url: "#",
    //         },
    //         {
    //           label: "Jackets",
    //           url: "#",
    //         },
    //         {
    //           label: "Blazers & Coats",
    //           url: "#",
    //         },
    //         {
    //           label: "Suits",
    //           url: "#",
    //         },
    //         {
    //           label: "Rain Jackets",
    //           url: "#",
    //         },
    //       ],
    //     },
    //     {
    //       header: {
    //         label: "Innerwear & Sleepwear",
    //         url: "/men",
    //       },
    //       menuItems: [
    //         {
    //           label: "Kurtas & Kurta Sets",
    //           url: "#",
    //         },
    //         {
    //           label: "Sherwanis",
    //           url: "#",
    //         },
    //         {
    //           label: "Nehru Jackets",
    //           url: "#",
    //         },
    //         {
    //           label: "Dhotis",
    //           url: "#",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};
