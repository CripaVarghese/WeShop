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
  navColumns: {
    column: string;
    categories: {
      navGroup: string;
      categories: {
        header: {
          label: string;
          url: string;
        };
        menuItems?: {
          label: string;
          url: string;
        }[];
      }[];
    }[];
  }[];
}

export const navbarOptionsData: CategoryOptions = {
  header: [
    {
      label: "MEN",
      url: "/men",
    },
    {
      label: "WOMEN",
      url: "/women",
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
  navColumns: [
    {
      column: "column_one",
      categories: [
        {
          navGroup: "navGroup_one",
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
          ],
        },
        {
          navGroup: "navGroup_two",
          categories: [
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
      ],
    },

    {
      column: "column_two",
      categories: [
        {
          navGroup: "navGroup_one",
          categories: [
            {
              header: {
                label: "Bottomwear",
                url: "/men",
              },
              menuItems: [
                {
                  label: "Jeans",
                  url: "#",
                },
                {
                  label: "Casual Trousers",
                  url: "#",
                },
                {
                  label: "Formal Trousers",
                  url: "#",
                },
                {
                  label: "Shorts",
                  url: "#",
                },
                {
                  label: "Track Pants & Joggers",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          navGroup: "navGroup_two",
          categories: [
            {
              header: {
                label: "Innerwear & Sleepwear",
                url: "/men",
              },
              menuItems: [
                {
                  label: "Briefs & Trunks",
                  url: "#",
                },
                {
                  label: "Boxers",
                  url: "#",
                },
                {
                  label: "Vests",
                  url: "#",
                },
                {
                  label: "Sleepwear & Loungewear",
                  url: "#",
                },
                {
                  label: "Thermals",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          navGroup: "navGroup_two",
          categories: [
            {
              header: {
                label: "Plus size",
                url: "/men",
              },
            },
          ],
        },
      ],
    },

    {
      column: "column_third",
      categories: [
        {
          navGroup: "navGroup_one",
          categories: [
            {
              header: {
                label: "Footwear",
                url: "/men",
              },
              menuItems: [
                {
                  label: "Casual Shoes",
                  url: "#",
                },
                {
                  label: "Sports Shoes",
                  url: "#",
                },
                {
                  label: "Formal Shoes",
                  url: "#",
                },
                {
                  label: "Sneakers",
                  url: "#",
                },
                {
                  label: "Sandals & Floaters",
                  url: "#",
                },
                {
                  label: "Flip Flops",
                  url: "#",
                },
                {
                  label: "Socks",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          navGroup: "navGroup_two",
          categories: [
            {
              header: {
                label: "Personal Care & Grooming",
                url: "/men",
              },
            },
          ],
        },
        {
          navGroup: "navGroup_three",
          categories: [
            {
              header: {
                label: "Sunglasses & Frames",
                url: "/men",
              },
            },
          ],
        },
        {
          navGroup: "navGroup_five",
          categories: [
            {
              header: {
                label: "Watches",
                url: "/men",
              },
            },
          ],
        },
      ],
    },

    {
      column: "column_four",
      categories: [
        {
          navGroup: "navGroup_one",
          categories: [
            {
              header: {
                label: "Sports & Active Wear",
                url: "/men",
              },
              menuItems: [
                {
                  label: "Sports Shoes",
                  url: "#",
                },
                {
                  label: "Sports Sandals",
                  url: "#",
                },
                {
                  label: "Active T-Shirts",
                  url: "#",
                },
                {
                  label: "Track Pants & Shorts",
                  url: "#",
                },
                {
                  label: "Tracksuits",
                  url: "#",
                },
                {
                  label: "Jackets & Sweatshirts",
                  url: "#",
                },
                {
                  label: "Sports Accessories",
                  url: "#",
                },
                {
                  label: "Swimwear",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          navGroup: "navGroup_two",
          categories: [
            {
              header: {
                label: "Gadgets",
                url: "/men",
              },
              menuItems: [
                {
                  label: "Smart Wearables",
                  url: "#",
                },
                {
                  label: "Fitness Gadgets",
                  url: "#",
                },
                {
                  label: "Headphones",
                  url: "#",
                },
                {
                  label: "Speakers",
                  url: "#",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      column: "column_five",
      categories: [
        {
          navGroup: "navGroup_one",
          categories: [
            {
              header: {
                label: "Fashion Accessories",
                url: "/men",
              },
              menuItems: [
                {
                  label: "Wallets",
                  url: "#",
                },
                {
                  label: "Belts",
                  url: "#",
                },
                {
                  label: "Perfumes & Body Mists",
                  url: "#",
                },
                {
                  label: "Trimmers",
                  url: "#",
                },
                {
                  label: "Deodorants",
                  url: "#",
                },
                {
                  label: "Ties, Cuffurls & Pocket Squares",
                  url: "#",
                },
                {
                  label: "Accessory Gift Sets",
                  url: "#",
                },
                {
                  label: "Caps & Hats",
                  url: "#",
                },
                {
                  label: "Mufflers, Scarves & Gloves",
                  url: "#",
                },
                {
                  label: "Phone Cases",
                  url: "#",
                },
                {
                  label: "Rings & Wristwear",
                  url: "#",
                },
                {
                  label: "Helmets",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          navGroup: "navGroup_two",
          categories: [
            {
              header: {
                label: "Bags & Backpacks",
                url: "/men",
              },
            },
          ],
        },
        {
          navGroup: "navGroup_three",
          categories: [
            {
              header: {
                label: "Luggages & Trolleys",
                url: "/men",
              },
            },
          ],
        },
      ],
    },
  ],
};
