interface Navigation {
  label: string;
  url?: string;
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
                    url: "/top_wear",
                  },
                  menuItems: [
                    {
                      label: "T-Shirts",
                      url: "/t_shirts",
                    },
                    {
                      label: "Casual Shirts",
                      url: "/casual_shirts",
                    },
                    {
                      label: "Formal Shirts",
                      url: "/formal_shirts",
                    },
                    {
                      label: "Sweatshirts",
                      url: "/sweatshirts",
                    },
                    {
                      label: "Sweaters",
                      url: "/sweaters",
                    },
                    {
                      label: "Jackets",
                      url: "/jackets",
                    },
                    {
                      label: "Blazers & Coats",
                      url: "/blazers_coats",
                    },
                    {
                      label: "Suits",
                      url: "/suits",
                    },
                    {
                      label: "Rain Jackets",
                      url: "/rain_jackets",
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
                    url: "/indian_festive_wear",
                  },
                  menuItems: [
                    {
                      label: "Kurtas & Kurta Sets",
                      url: "/kurtas_kurta_sets",
                    },
                    {
                      label: "Sherwanis",
                      url: "/sherwanis",
                    },
                    {
                      label: "Nehru Jackets",
                      url: "/nehru_jackets",
                    },
                    {
                      label: "Dhotis",
                      url: "/dhotis",
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
                    url: "/bottomwear",
                  },
                  menuItems: [
                    {
                      label: "Jeans",
                      url: "/jeans",
                    },
                    {
                      label: "Casual Trousers",
                      url: "/casual_trousers",
                    },
                    {
                      label: "Formal Trousers",
                      url: "/formal_trousers",
                    },
                    {
                      label: "Shorts",
                      url: "/shorts",
                    },
                    {
                      label: "Track Pants & Joggers",
                      url: "/track_pants_joggers",
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
                    url: "/innerwear_sleepwear",
                  },
                  menuItems: [
                    {
                      label: "Briefs & Trunks",
                      url: "/briefs_trunks",
                    },
                    {
                      label: "Boxers",
                      url: "/boxers",
                    },
                    {
                      label: "Vests",
                      url: "/vests",
                    },
                    {
                      label: "Sleepwear & Loungewear",
                      url: "/sleepwear_loungewear",
                    },
                    {
                      label: "Thermals",
                      url: "/thermals",
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
                    url: "/plus_size",
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
                    url: "/footwear",
                  },
                  menuItems: [
                    {
                      label: "Casual Shoes",
                      url: "/casual_shoes",
                    },
                    {
                      label: "Sports Shoes",
                      url: "/sports_shoes",
                    },
                    {
                      label: "Formal Shoes",
                      url: "/formal_shoes",
                    },
                    {
                      label: "Sneakers",
                      url: "/sneakers",
                    },
                    {
                      label: "Sandals & Floaters",
                      url: "/sandals_floaters",
                    },
                    {
                      label: "Flip Flops",
                      url: "/flip_flops",
                    },
                    {
                      label: "Socks",
                      url: "/socks",
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
                    url: "/personal_care_grooming",
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
                    url: "/sunglasses_frames",
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
                    url: "/watches",
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
                    url: "/sports_active_wear",
                  },
                  menuItems: [
                    {
                      label: "Sports Shoes",
                      url: "/sports_shoes",
                    },
                    {
                      label: "Sports Sandals",
                      url: "/sports_sandals",
                    },
                    {
                      label: "Active T-Shirts",
                      url: "/active_t_shirts",
                    },
                    {
                      label: "Track Pants & Shorts",
                      url: "/track_pants_shorts",
                    },
                    {
                      label: "Tracksuits",
                      url: "/tracksuits",
                    },
                    {
                      label: "Jackets & Sweatshirts",
                      url: "/jackets_sweatshirts",
                    },
                    {
                      label: "Sports Accessories",
                      url: "/sports_accessories",
                    },
                    {
                      label: "Swimwear",
                      url: "/swimwear",
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
                    url: "/gadgets",
                  },
                  menuItems: [
                    {
                      label: "Smart Wearables",
                      url: "/smart_wearables",
                    },
                    {
                      label: "Fitness Gadgets",
                      url: "/fitness_gadgets",
                    },
                    {
                      label: "Headphones",
                      url: "/headphones",
                    },
                    {
                      label: "Speakers",
                      url: "/speakers",
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
                    url: "/fashion_accessories",
                  },
                  menuItems: [
                    {
                      label: "Wallets",
                      url: "/wallets",
                    },
                    {
                      label: "Belts",
                      url: "/belts",
                    },
                    {
                      label: "Perfumes & Body Mists",
                      url: "/perfumes_body_mists",
                    },
                    {
                      label: "Trimmers",
                      url: "/trimmers",
                    },
                    {
                      label: "Deodorants",
                      url: "/deodorants",
                    },
                    {
                      label: "Ties, Cuffurls & Pocket Squares",
                      url: "/ties_cuffurls_pocket_squares",
                    },
                    {
                      label: "Accessory Gift Sets",
                      url: "/accessory_gift_sets",
                    },
                    {
                      label: "Caps & Hats",
                      url: "/caps_hats",
                    },
                    {
                      label: "Mufflers, Scarves & Gloves",
                      url: "/mufflers_scarves_gloves",
                    },
                    {
                      label: "Phone Cases",
                      url: "/phone_cases",
                    },
                    {
                      label: "Rings & Wristwear",
                      url: "/rings_wristwear",
                    },
                    {
                      label: "Helmets",
                      url: "/helmets",
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
                    url: "/bags_backpacks",
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
                    url: "/luggages_trolleys",
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
                    url: "/indian_fusion_wear",
                  },
                  menuItems: [
                    {
                      label: "Kurtas & Suits",
                      url: "/kurtas_suits",
                    },
                    {
                      label: "Kurtis, Tunics & Tops",
                      url: "/kurtis_tunics_tops",
                    },
                    {
                      label: "Sarees",
                      url: "/sarees",
                    },
                    {
                      label: "Ethnic Wear",
                      url: "/ethnic_wear",
                    },
                    {
                      label: "Leggings, Salwars & Churidars",
                      url: "/leggings_salwars_churidars",
                    },
                    {
                      label: "Skirts & Palazzos",
                      url: "/skirts_palazzos",
                    },
                    {
                      label: "Dress Materials",
                      url: "/dress_materials",
                    },
                    {
                      label: "Lehenga Cholis",
                      url: "/lehenga_cholis",
                    },
                    {
                      label: "Dupattas & Shawls",
                      url: "/dupattas_shawls",
                    },
                    {
                      label: "Jackets",
                      url: "/jackets",
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
                    url: "/belts_scarves_more",
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
                    url: "/watches_wearables",
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
                    url: "/western_wear",
                  },
                  menuItems: [
                    {
                      label: "Tops",
                      url: "/tops",
                    },
                    {
                      label: "Tshirts",
                      url: "/tshirts",
                    },
                    {
                      label: "Jeans",
                      url: "/jeans",
                    },
                    {
                      label: "Trousers & Capris",
                      url: "/trousers_capris",
                    },
                    {
                      label: "Shorts & Skirts",
                      url: "/shorts_skirts",
                    },
                    {
                      label: "Co-ords",
                      url: "/co_ords",
                    },
                    {
                      label: "Playsuits",
                      url: "/playsuits",
                    },
                    {
                      label: "Jumpsuits",
                      url: "/jumpsuits",
                    },
                    {
                      label: "Shrugs",
                      url: "/shrugs",
                    },
                    {
                      label: "Sweaters & Sweatshirts",
                      url: "/sweaters_sweatshirts",
                    },
                    {
                      label: "Jackets & Coats",
                      url: "/jackets_coats",
                    },
                    {
                      label: "Blazers & Waistcoats",
                      url: "/blazers_waistcoats",
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
                    url: "/plus_size",
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
                    url: "/maternity",
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
                    url: "/sunglasses_frames",
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
                    url: "/footwear",
                  },
                  menuItems: [
                    {
                      label: "Flats",
                      url: "/flats",
                    },
                    {
                      label: "Casual Shoes",
                      url: "/casual_shoes",
                    },
                    {
                      label: "Heels",
                      url: "/heels",
                    },
                    {
                      label: "Boots",
                      url: "/boots",
                    },
                    {
                      label: "Sports Shoes & Floaters",
                      url: "/sports_shoes_floaters",
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
                    url: "/sports_active_wear",
                  },
                  menuItems: [
                    {
                      label: "Clothing",
                      url: "/clothing",
                    },
                    {
                      label: "Footwear",
                      url: "/footwear",
                    },
                    {
                      label: "Sports Accessories",
                      url: "/sports_accessories",
                    },
                    {
                      label: "Sports Equipment",
                      url: "/sports_equipment",
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
                    url: "/lingerie_sleepwear",
                  },
                  menuItems: [
                    {
                      label: "Bra",
                      url: "/bra",
                    },
                    {
                      label: "Briefs",
                      url: "/briefs",
                    },
                    {
                      label: "Shapewear",
                      url: "/shapewear",
                    },
                    {
                      label: " Sleepwear & Loungewear",
                      url: "/sleepwear_loungewear",
                    },
                    {
                      label: "Swimwear",
                      url: "/swimwear",
                    },
                    {
                      label: "Camisoles & Thermals",
                      url: "/camisoles_thermals",
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
                    url: "/gadgets",
                  },
                  menuItems: [
                    {
                      label: "Smart Wearables",
                      url: "/smart_wearables",
                    },
                    {
                      label: "Fitness Gadgets",
                      url: "/fitness_gadgets",
                    },
                    {
                      label: "Headphones",
                      url: "/headphones",
                    },
                    {
                      label: "Speakers",
                      url: "/speakers",
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
                    url: "/jewellery",
                  },
                  menuItems: [
                    {
                      label: "Fashion Jewellery",
                      url: "/fashion_jewellery",
                    },
                    {
                      label: "Fine Jewellery",
                      url: "/fine_jewellery",
                    },
                    {
                      label: "Earrings",
                      url: "/earrings",
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
                    url: "/backpacks",
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
                    url: "/handbags_bags_wallets",
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
                    url: "/luggages_trolleys",
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
                    url: "/boys_clothing",
                  },
                  menuItems: [
                    {
                      label: "T-Shirts",
                      url: "/t_shirts",
                    },
                    {
                      label: "Shirts",
                      url: "/shirts",
                    },
                    {
                      label: "Shorts",
                      url: "/shorts",
                    },
                    {
                      label: "Jeans",
                      url: "/jeans",
                    },
                    {
                      label: "Trousers",
                      url: "/trousers",
                    },
                    {
                      label: "Clothing Sets",
                      url: "/clothing_sets",
                    },
                    {
                      label: "Ethnic Wear",
                      url: "/ethnic_wear",
                    },
                    {
                      label: "Track Pants & Pyjamas",
                      url: "/track_pants_pyjamas",
                    },
                    {
                      label: "Jacket, Sweater & Sweatshirts",
                      url: "/jacket_sweater_sweatshirts",
                    },
                    {
                      label: "Party Wear",
                      url: "/party_wear",
                    },
                    {
                      label: "Innerwear & Thermals",
                      url: "/innerwear_thermals",
                    },
                    {
                      label: "Nightwear & Loungewear",
                      url: "/nightwear_loungewear",
                    },
                    {
                      label: "Value Packs",
                      url: "/value_packs",
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
                    url: "/girls_clothing",
                  },
                  menuItems: [
                    {
                      label: "Dresses",
                      url: "/dresses",
                    },
                    {
                      label: "Tops",
                      url: "/tops",
                    },
                    {
                      label: "Tshirts",
                      url: "/tshirts",
                    },
                    {
                      label: "Clothing Sets",
                      url: "/clothing_sets",
                    },
                    {
                      label: "Lehenga choli",
                      url: "/lehenga_choli",
                    },
                    {
                      label: "Kurta Sets",
                      url: "/kurta_sets",
                    },
                    {
                      label: "Party wear",
                      url: "/party_wear",
                    },
                    {
                      label: "Dungarees & Jumpsuits",
                      url: "/dungarees_jumpsuits",
                    },
                    {
                      label: "Skirts & shorts",
                      url: "/skirts_shorts",
                    },
                    {
                      label: "Tights & Leggings",
                      url: "/tights_leggings",
                    },
                    {
                      label: "Jeans, Trousers & Capris",
                      url: "/jeans_trousers_capris",
                    },
                    {
                      label: "Jacket, Sweater & Sweatshirts",
                      url: "/jacket_sweater_sweatshirts",
                    },
                    {
                      label: "Innerwear & Thermals",
                      url: "/innerwear_thermals",
                    },
                    {
                      label: "Nightwear & Loungewear",
                      url: "/nightwear_loungewear",
                    },
                    {
                      label: "Value Packs",
                      url: "/value_packs",
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
                    url: "/footwear",
                  },
                  menuItems: [
                    {
                      label: "Casual Shoes",
                      url: "/casual_shoes",
                    },
                    {
                      label: "Flipflops",
                      url: "/flipflops",
                    },
                    {
                      label: "Sports Shoes",
                      url: "/sports_shoes",
                    },
                    {
                      label: "Flats",
                      url: "/flats",
                    },
                    {
                      label: "Sandals",
                      url: "/sandals",
                    },
                    {
                      label: "Heels",
                      url: "/heels",
                    },
                    {
                      label: "School Shoes",
                      url: "/school_shoes",
                    },
                    {
                      label: "Socks",
                      url: "/socks",
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
                    url: "/toys_games",
                  },
                  menuItems: [
                    {
                      label: "T-Shirts",
                      url: "/t_shirts",
                    },
                    {
                      label: "Learning & Development",
                      url: "/learning_development",
                    },
                    {
                      label: "Activity Toys",
                      url: "/activity_toys",
                    },
                    {
                      label: "Soft Toys",
                      url: "/soft_toys",
                    },
                    {
                      label: "Action Figure / Play set",
                      url: "/action_figure_play_set",
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
                    url: "/infants",
                  },
                  menuItems: [
                    {
                      label: "Bodysuits",
                      url: "/bodysuits",
                    },
                    {
                      label: "Rompers & Sleepsuits",
                      url: "/rompers_sleepsuits",
                    },
                    {
                      label: "Clothing Sets",
                      url: "/clothing_sets",
                    },
                    {
                      label: "Tshirts & Tops",
                      url: "/tshirts_tops",
                    },
                    {
                      label: "Dresses",
                      url: "/dresses",
                    },
                    {
                      label: "Bottom wear",
                      url: "/bottom_wear",
                    },
                    {
                      label: "Winter Wear",
                      url: "/winter_wear",
                    },
                    {
                      label: "Innerwear & Sleepwear",
                      url: "/innerwear_sleepwear",
                    },
                    {
                      label: "Infant Care",
                      url: "/infant_care",
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
                    url: "/home_bath",
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
                    url: "/personal_care",
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
                    url: "/kids_accessories",
                  },
                  menuItems: [
                    {
                      label: "Bags & Backpacks",
                      url: "/bags_backpacks",
                    },
                    {
                      label: "Watches",
                      url: "/watches",
                    },
                    {
                      label: "Jewellery & Hair accessory",
                      url: "/jewellery_hair_accessory",
                    },
                    {
                      label: "Sunglasses",
                      url: "/sunglasses",
                    },
                    {
                      label: "Masks & Protective Gears",
                      url: "/masks_protective_gears",
                    },
                    {
                      label: "Caps & Hats",
                      url: "/caps_hats",
                    },
                    {
                      label: "T-Shirts",
                      url: "/t_shirts",
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
                    url: "/brands",
                  },
                  menuItems: [
                    {
                      label: "H&M",
                      url: "/h_m",
                    },
                    {
                      label: "Max Kids",
                      url: "/max_kids",
                    },
                    {
                      label: "Pantaloons",
                      url: "/pantaloons",
                    },
                    {
                      label: "United Colors Of Benetton Kids",
                      url: "/united_colors_of_benetton_kids",
                    },
                    {
                      label: "YK",
                      url: "/yk",
                    },
                    {
                      label: "U.S. Polo Assn. Kids",
                      url: "/u_s_polo_assn_kids",
                    },
                    {
                      label: "Mothercare",
                      url: "/mothercare",
                    },
                    {
                      label: "HRX",
                      url: "/hrx",
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
        url: "/home_living",
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
                    url: "/bed_linen_furnishing",
                  },
                  menuItems: [
                    {
                      label: "T-Shirts",
                      url: "/t_shirts",
                    },
                    {
                      label: "Casual Shirts",
                      url: "/casual_shirts",
                    },
                    {
                      label: "Formal Shirts",
                      url: "/formal_shirts",
                    },
                    {
                      label: "Sweatshirts",
                      url: "/sweatshirts",
                    },
                    {
                      label: "Sweaters",
                      url: "/sweaters",
                    },
                    {
                      label: "Jackets",
                      url: "/jackets",
                    },
                    {
                      label: "Blazers & Coats",
                      url: "/blazers_coats",
                    },
                    {
                      label: "Suits",
                      url: "/suits",
                    },
                    {
                      label: "Rain Jackets",
                      url: "/rain_jackets",
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
                    url: "/indian_festive_wear",
                  },
                  menuItems: [
                    {
                      label: "Kurtas & Kurta Sets",
                      url: "/kurtas_kurta_sets",
                    },
                    {
                      label: "Sherwanis",
                      url: "/sherwanis",
                    },
                    {
                      label: "Nehru Jackets",
                      url: "/nehru_jackets",
                    },
                    {
                      label: "Dhotis",
                      url: "/dhotis",
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
                    url: "/bath",
                  },
                  menuItems: [
                    {
                      label: "Jeans",
                      url: "/jeans",
                    },
                    {
                      label: "Casual Trousers",
                      url: "/casual_trousers",
                    },
                    {
                      label: "Formal Trousers",
                      url: "/formal_trousers",
                    },
                    {
                      label: "Shorts",
                      url: "/shorts",
                    },
                    {
                      label: "Track Pants & Joggers",
                      url: "/track_pants_joggers",
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
                    url: "/innerwear_sleepwear",
                  },
                  menuItems: [
                    {
                      label: "Briefs & Trunks",
                      url: "/briefs_trunks",
                    },
                    {
                      label: "Boxers",
                      url: "/boxers",
                    },
                    {
                      label: "Vests",
                      url: "/vests",
                    },
                    {
                      label: "Sleepwear & Loungewear",
                      url: "/sleepwear_loungewear",
                    },
                    {
                      label: "Thermals",
                      url: "/thermals",
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
                    url: "/plus_size",
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
                    url: "/home_décor",
                  },
                  menuItems: [
                    {
                      label: "Casual Shoes",
                      url: "/casual_shoes",
                    },
                    {
                      label: "Sports Shoes",
                      url: "/sports_shoes",
                    },
                    {
                      label: "Formal Shoes",
                      url: "/formal_shoes",
                    },
                    {
                      label: "Sneakers",
                      url: "/sneakers",
                    },
                    {
                      label: "Sandals & Floaters",
                      url: "/sandals_floaters",
                    },
                    {
                      label: "Flip Flops",
                      url: "/flip_flops",
                    },
                    {
                      label: "Socks",
                      url: "/socks",
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
                    url: "/personal_care_grooming",
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
                    url: "/sunglasses_frames",
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
                    url: "/watches",
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
                    url: "/sports_active_wear",
                  },
                  menuItems: [
                    {
                      label: "Sports Shoes",
                      url: "/sports_shoes",
                    },
                    {
                      label: "Sports Sandals",
                      url: "/sports_sandals",
                    },
                    {
                      label: "Active T-Shirts",
                      url: "/active_t_shirts",
                    },
                    {
                      label: "Track Pants & Shorts",
                      url: "/track_pants_shorts",
                    },
                    {
                      label: "Tracksuits",
                      url: "/tracksuits",
                    },
                    {
                      label: "Jackets & Sweatshirts",
                      url: "/jackets_sweatshirts",
                    },
                    {
                      label: "Sports Accessories",
                      url: "/sports_accessories",
                    },
                    {
                      label: "Swimwear",
                      url: "/swimwear",
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
                    url: "/gadgets",
                  },
                  menuItems: [
                    {
                      label: "Smart Wearables",
                      url: "/smart_wearables",
                    },
                    {
                      label: "Fitness Gadgets",
                      url: "/fitness_gadgets",
                    },
                    {
                      label: "Headphones",
                      url: "/headphones",
                    },
                    {
                      label: "Speakers",
                      url: "/speakers",
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
                    url: "/fashion_accessories",
                  },
                  menuItems: [
                    {
                      label: "Wallets",
                      url: "/wallets",
                    },
                    {
                      label: "Belts",
                      url: "/belts",
                    },
                    {
                      label: "Perfumes & Body Mists",
                      url: "/perfumes_body_mists",
                    },
                    {
                      label: "Trimmers",
                      url: "/trimmers",
                    },
                    {
                      label: "Deodorants",
                      url: "/deodorants",
                    },
                    {
                      label: "Ties, Cuffurls & Pocket Squares",
                      url: "/ties_cuffurls_pocket_squares",
                    },
                    {
                      label: "Accessory Gift Sets",
                      url: "/accessory_gift_sets",
                    },
                    {
                      label: "Caps & Hats",
                      url: "/caps_hats",
                    },
                    {
                      label: "Mufflers, Scarves & Gloves",
                      url: "/mufflers_scarves_gloves",
                    },
                    {
                      label: "Phone Cases",
                      url: "/phone_cases",
                    },
                    {
                      label: "Rings & Wristwear",
                      url: "/rings_wristwear",
                    },
                    {
                      label: "Helmets",
                      url: "/helmets",
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
                    url: "/bags_backpacks",
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
                    url: "/luggages_trolleys",
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
                    url: "/makeup",
                  },
                  menuItems: [
                    {
                      label: "T-Shirts",
                      url: "/t_shirts",
                    },
                    {
                      label: "Casual Shirts",
                      url: "/casual_shirts",
                    },
                    {
                      label: "Formal Shirts",
                      url: "/formal_shirts",
                    },
                    {
                      label: "Sweatshirts",
                      url: "/sweatshirts",
                    },
                    {
                      label: "Sweaters",
                      url: "/sweaters",
                    },
                    {
                      label: "Jackets",
                      url: "/jackets",
                    },
                    {
                      label: "Blazers & Coats",
                      url: "/blazers_coats",
                    },
                    {
                      label: "Suits",
                      url: "/suits",
                    },
                    {
                      label: "Rain Jackets",
                      url: "/rain_jackets",
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
                    url: "/indian_festive_wear",
                  },
                  menuItems: [
                    {
                      label: "Kurtas & Kurta Sets",
                      url: "/kurtas_kurta_sets",
                    },
                    {
                      label: "Sherwanis",
                      url: "/sherwanis",
                    },
                    {
                      label: "Nehru Jackets",
                      url: "/nehru_jackets",
                    },
                    {
                      label: "Dhotis",
                      url: "/dhotis",
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
                    url: "/skincare_bath_body",
                  },
                  menuItems: [
                    {
                      label: "Jeans",
                      url: "/jeans",
                    },
                    {
                      label: "Casual Trousers",
                      url: "/casual_trousers",
                    },
                    {
                      label: "Formal Trousers",
                      url: "/formal_trousers",
                    },
                    {
                      label: "Shorts",
                      url: "/shorts",
                    },
                    {
                      label: "Track Pants & Joggers",
                      url: "/track_pants_joggers",
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
                    url: "/innerwear_sleepwear",
                  },
                  menuItems: [
                    {
                      label: "Briefs & Trunks",
                      url: "/briefs_trunks",
                    },
                    {
                      label: "Boxers",
                      url: "/boxers",
                    },
                    {
                      label: "Vests",
                      url: "/vests",
                    },
                    {
                      label: "Sleepwear & Loungewear",
                      url: "/sleepwear_loungewear",
                    },
                    {
                      label: "Thermals",
                      url: "/thermals",
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
                    url: "/plus_size",
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
                    url: "/footwear",
                  },
                  menuItems: [
                    {
                      label: "Haircare",
                      url: "/haircare",
                    },
                    {
                      label: "Sports Shoes",
                      url: "/sports_shoes",
                    },
                    {
                      label: "Formal Shoes",
                      url: "/formal_shoes",
                    },
                    {
                      label: "Sneakers",
                      url: "/sneakers",
                    },
                    {
                      label: "Sandals & Floaters",
                      url: "/sandals_floaters",
                    },
                    {
                      label: "Flip Flops",
                      url: "/flip_flops",
                    },
                    {
                      label: "Socks",
                      url: "/socks",
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
                    url: "/personal_care_grooming",
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
                    url: "/sunglasses_frames",
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
                    url: "/watches",
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
                    url: "/appliances",
                  },
                  menuItems: [
                    {
                      label: "Sports Shoes",
                      url: "/sports_shoes",
                    },
                    {
                      label: "Sports Sandals",
                      url: "/sports_sandals",
                    },
                    {
                      label: "Active T-Shirts",
                      url: "/active_t_shirts",
                    },
                    {
                      label: "Track Pants & Shorts",
                      url: "/track_pants_shorts",
                    },
                    {
                      label: "Tracksuits",
                      url: "/tracksuits",
                    },
                    {
                      label: "Jackets & Sweatshirts",
                      url: "/jackets_sweatshirts",
                    },
                    {
                      label: "Sports Accessories",
                      url: "/sports_accessories",
                    },
                    {
                      label: "Swimwear",
                      url: "/swimwear",
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
                    url: "/gadgets",
                  },
                  menuItems: [
                    {
                      label: "Smart Wearables",
                      url: "/smart_wearables",
                    },
                    {
                      label: "Fitness Gadgets",
                      url: "/fitness_gadgets",
                    },
                    {
                      label: "Headphones",
                      url: "/headphones",
                    },
                    {
                      label: "Speakers",
                      url: "/speakers",
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
                    url: "/top_brands",
                  },
                  menuItems: [
                    {
                      label: "Wallets",
                      url: "/wallets",
                    },
                    {
                      label: "Belts",
                      url: "/belts",
                    },
                    {
                      label: "Perfumes & Body Mists",
                      url: "/perfumes_body_mists",
                    },
                    {
                      label: "Trimmers",
                      url: "/trimmers",
                    },
                    {
                      label: "Deodorants",
                      url: "/deodorants",
                    },
                    {
                      label: "Ties, Cuffurls & Pocket Squares",
                      url: "/ties_cuffurls_pocket_squares",
                    },
                    {
                      label: "Accessory Gift Sets",
                      url: "/accessory_gift_sets",
                    },
                    {
                      label: "Caps & Hats",
                      url: "/caps_hats",
                    },
                    {
                      label: "Mufflers, Scarves & Gloves",
                      url: "/mufflers_scarves_gloves",
                    },
                    {
                      label: "Phone Cases",
                      url: "/phone_cases",
                    },
                    {
                      label: "Rings & Wristwear",
                      url: "/rings_wristwear",
                    },
                    {
                      label: "Helmets",
                      url: "/helmets",
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
                    url: "/bags_backpacks",
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
                    url: "/luggages_trolleys",
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
