interface Navigation {
  label: string; // TopWear
  url?: string; // /top-wear
}
interface NavGroup {
  header: Navigation;
  menuItems?: Navigation[];
}

type NavColumn = NavGroup[];

export interface CategoryOptions {
  navContents: {
    header: {
      id: string | null;
      label: string;
      url: string;
      color: string;
    };
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
  }[];
}

export const navbarOptionsData: CategoryOptions = {
  navContents: [
    {
      header: {
        id: "men",
        label: "MEN",
        url: "/men",
        color: "#ee5f73",
      },
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
    },
    // womenOption
    {
      header: {
        id: "women",
        label: "WOMEN",
        url: "/women",
        color: "#fb56c1",
      },
      navColumns: [
        {
          column: "column_one",
          categories: [
            {
              navGroup: "navGroup_one",
              categories: [
                {
                  header: {
                    label: "Indian & Fusion Wear",
                    url: "/men",
                  },
                  menuItems: [
                    {
                      label: "Kurtas & Suits",
                      url: "#",
                    },
                    {
                      label: "Kurtis, Tunics & Tops",
                      url: "#",
                    },
                    {
                      label: "Sarees",
                      url: "#",
                    },
                    {
                      label: "Ethnic Wear",
                      url: "#",
                    },
                    {
                      label: "Leggings, Salwars & Churidars",
                      url: "#",
                    },
                    {
                      label: "Skirts & Palazzos",
                      url: "#",
                    },
                    {
                      label: "Dress Materials",
                      url: "#",
                    },
                    {
                      label: "Lehenga Cholis",
                      url: "#",
                    },
                    {
                      label: "Dupattas & Shawls",
                      url: "#",
                    },
                    {
                      label: "Jackets",
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
                    label: "Belts, Scarves & More",
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
                    label: "Watches & Wearables",
                    url: "/men",
                  },
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
                    label: "Western Wear",
                    url: "/men",
                  },
                  menuItems: [
                    {
                      label: "Tops",
                      url: "#",
                    },
                    {
                      label: "Tshirts",
                      url: "#",
                    },
                    {
                      label: "Jeans",
                      url: "#",
                    },
                    {
                      label: "Trousers & Capris",
                      url: "#",
                    },
                    {
                      label: "Shorts & Skirts",
                      url: "#",
                    },
                    {
                      label: "Co-ords",
                      url: "#",
                    },
                    {
                      label: "Playsuits",
                      url: "#",
                    },
                    {
                      label: "Jumpsuits",
                      url: "#",
                    },
                    {
                      label: "Shrugs",
                      url: "#",
                    },
                    {
                      label: "Sweaters & Sweatshirts",
                      url: "#",
                    },
                    {
                      label: "Jackets & Coats",
                      url: "#",
                    },
                    {
                      label: "Blazers & Waistcoats",
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
                    label: "Maternity",
                    url: "/men",
                  },
                },
              ],
            },
            {
              navGroup: "navGroup_two",
              categories: [
                {
                  header: {
                    label: "sunglasses & Frames",
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
                    label: "Footwear",
                    url: "/men",
                  },
                  menuItems: [
                    {
                      label: "Flats",
                      url: "#",
                    },
                    {
                      label: "Casual Shoes",
                      url: "#",
                    },
                    {
                      label: "Heels",
                      url: "#",
                    },
                    {
                      label: "Boots",
                      url: "#",
                    },
                    {
                      label: "Sports Shoes & Floaters",
                      url: "#",
                    },
                  ],
                },
              ],
            },
            {
              navGroup: "navGroup_four",
              categories: [
                {
                  header: {
                    label: "Sports & Active Wear",
                    url: "/men",
                  },
                  menuItems: [
                    {
                      label: "Clothing",
                      url: "#",
                    },
                    {
                      label: "Footwear",
                      url: "#",
                    },
                    {
                      label: "Sports Accessories",
                      url: "#",
                    },
                    {
                      label: "Sports Equipment",
                      url: "#",
                    },
                  ],
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
                    label: "Lingerie & Sleepwear",
                    url: "/men",
                  },
                  menuItems: [
                    {
                      label: "Bra",
                      url: "#",
                    },
                    {
                      label: "Briefs",
                      url: "#",
                    },
                    {
                      label: "Shapewear",
                      url: "#",
                    },
                    {
                      label: " Sleepwear & Loungewear",
                      url: "#",
                    },
                    {
                      label: "Swimwear",
                      url: "#",
                    },
                    {
                      label: "Camisoles & Thermals",
                      url: "#",
                    },
                  ],
                },
              ],
            },
          ],
        },

        {
          column: "column_fifth",
          categories: [
            {
              navGroup: "navGroup_one",
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
            {
              navGroup: "navGroup_two",
              categories: [
                {
                  header: {
                    label: "Jewellery",
                    url: "/men",
                  },
                  menuItems: [
                    {
                      label: "Fashion Jewellery",
                      url: "#",
                    },
                    {
                      label: "Fine Jewellery",
                      url: "#",
                    },
                    {
                      label: "Earrings",
                      url: "#",
                    },
                  ],
                },
              ],
            },
            {
              navGroup: "navGroup_three",
              categories: [
                {
                  header: {
                    label: "Backpacks",
                    url: "/men",
                  },
                },
              ],
            },
            {
              navGroup: "navGroup_four",
              categories: [
                {
                  header: {
                    label: "Handbags, Bags & Wallets",
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
                    label: "Luggages & Trolleys",
                    url: "/men",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    // kids
    {
      header: {
        id: "kids",
        label: "KIDS",
        url: "/kids",
        color: "#f26a10",
      },
      navColumns: [
        {
          column: "column_one",
          categories: [
            {
              navGroup: "navGroup_one",
              categories: [
                {
                  header: {
                    label: "Boys Clothing",
                    url: "",
                  },
                  menuItems: [
                    {
                      label: "T-Shirts",
                      url: "",
                    },
                    {
                      label: "Shirts",
                      url: "",
                    },
                    {
                      label: "Shorts",
                      url: "",
                    },
                    {
                      label: "Jeans",
                      url: "",
                    },
                    {
                      label: "Trousers",
                      url: "",
                    },
                    {
                      label: "Clothing Sets",
                      url: "",
                    },
                    {
                      label: "Ethnic Wear",
                      url: "",
                    },
                    {
                      label: "Track Pants & Pyjamas",
                      url: "",
                    },
                    {
                      label: "Jacket, Sweater & Sweatshirts",
                      url: "",
                    },
                    {
                      label: "Party Wear",
                      url: "",
                    },
                    {
                      label: "Innerwear & Thermals",
                      url: "",
                    },
                    {
                      label: "Nightwear & Loungewear",
                      url: "",
                    },
                    {
                      label: "Value Packs",
                      url: "",
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
                    label: "Girls Clothing",
                    url: "",
                  },
                  menuItems: [
                    {
                      label: "Dresses",
                      url: "",
                    },
                    {
                      label: "Tops",
                      url: "",
                    },
                    {
                      label: "Tshirts",
                      url: "",
                    },
                    {
                      label: "Clothing Sets",
                      url: "",
                    },
                    {
                      label: "Lehenga choli",
                      url: "",
                    },
                    {
                      label: "Kurta Sets",
                      url: "",
                    },
                    {
                      label: "Party wear",
                      url: "",
                    },
                    {
                      label: "Dungarees & Jumpsuits",
                      url: "",
                    },
                    {
                      label: "Skirts & shorts",
                      url: "",
                    },
                    {
                      label: "Tights & Leggings",
                      url: "",
                    },
                    {
                      label: "Jeans, Trousers & Capris",
                      url: "",
                    },
                    {
                      label: "Jacket, Sweater & Sweatshirts",
                      url: "",
                    },
                    {
                      label: "Innerwear & Thermals",
                      url: "",
                    },
                    {
                      label: "Nightwear & Loungewear",
                      url: "",
                    },
                    {
                      label: "Value Packs",
                      url: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          column: "column_three",
          categories: [
            {
              navGroup: "navGroup_one",
              categories: [
                {
                  header: {
                    label: "Footwear",
                    url: "",
                  },
                  menuItems: [
                    {
                      label: "Casual Shoes",
                      url: "",
                    },
                    {
                      label: "Flipflops",
                      url: "",
                    },
                    {
                      label: "Sports Shoes",
                      url: "",
                    },
                    {
                      label: "Flats",
                      url: "",
                    },
                    {
                      label: "Sandals",
                      url: "",
                    },
                    {
                      label: "Heels",
                      url: "",
                    },
                    {
                      label: "School Shoes",
                      url: "",
                    },
                    {
                      label: "Socks",
                      url: "",
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
                    label: "Toys & Games",
                    url: "",
                  },
                  menuItems: [
                    {
                      label: "T-Shirts",
                      url: "",
                    },
                    {
                      label: "Learning & Development",
                      url: "",
                    },
                    {
                      label: "Activity Toys",
                      url: "",
                    },
                    {
                      label: "Soft Toys",
                      url: "",
                    },
                    {
                      label: "Action Figure / Play set",
                      url: "",
                    },
                  ],
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
                    label: "Infants",
                    url: "",
                  },
                  menuItems: [
                    {
                      label: "Bodysuits",
                      url: "",
                    },
                    {
                      label: "Rompers & Sleepsuits",
                      url: "",
                    },
                    {
                      label: "Clothing Sets",
                      url: "",
                    },
                    {
                      label: "Tshirts & Tops",
                      url: "",
                    },
                    {
                      label: "Dresses",
                      url: "",
                    },
                    {
                      label: "Bottom wear",
                      url: "",
                    },
                    {
                      label: "Winter Wear",
                      url: "",
                    },
                    {
                      label: "Innerwear & Sleepwear",
                      url: "",
                    },
                    {
                      label: "Infant Care",
                      url: "",
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
                    label: "Home & Bath",
                    url: "",
                  },
                },
              ],
            },
            {
              navGroup: "navGroup_two",
              categories: [
                {
                  header: {
                    label: "Personal Care",
                    url: "",
                  },
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
                    label: "Kids Accessories",
                    url: "",
                  },
                  menuItems: [
                    {
                      label: "Bags & Backpacks",
                      url: "",
                    },
                    {
                      label: "Watches",
                      url: "",
                    },
                    {
                      label: "Jewellery & Hair accessory",
                      url: "",
                    },
                    {
                      label: "Sunglasses",
                      url: "",
                    },
                    {
                      label: "Masks & Protective Gears",
                      url: "",
                    },
                    {
                      label: "Caps & Hats",
                      url: "",
                    },
                    {
                      label: "T-Shirts",
                      url: "",
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
                    label: "Brands",
                    url: "",
                  },
                  menuItems: [
                    {
                      label: "H&M",
                      url: "",
                    },
                    {
                      label: "Max Kids",
                      url: "",
                    },
                    {
                      label: "Pantaloons",
                      url: "",
                    },
                    {
                      label: "United Colors Of Benetton Kids",
                      url: "",
                    },
                    {
                      label: "YK",
                      url: "",
                    },
                    {
                      label: "U.S. Polo Assn. Kids",
                      url: "",
                    },
                    {
                      label: "Mothercare",
                      url: "",
                    },
                    {
                      label: "HRX",
                      url: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    // TODO: data to be changed
    // home_and_living
    {
      header: {
        id: "home_and_living",
        label: "HOME & LIVING",
        url: "/home_and_living",
        color: "#f2c210",
      },
      navColumns: [
        {
          column: "column_one",
          categories: [
            {
              navGroup: "navGroup_one",
              categories: [
                {
                  header: {
                    label: "Bed Linen & Furnishing",
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
                    label: "Bath",
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
                    label: "Home Décor",
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
    },
    // TODO: data to be changed
    // beauty
    {
      header: {
        id: "beauty",
        label: "BEAUTY",
        url: "/beauty",
        color: "#0db7af",
      },
      navColumns: [
        {
          column: "column_one",
          categories: [
            {
              navGroup: "navGroup_one",
              categories: [
                {
                  header: {
                    label: "Makeup",
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
                    label: "Skincare, Bath & Body",
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
                      label: "Haircare",
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
                    label: "Appliances",
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
                    label: "Top Brands",
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
    },
  ],
};
