export interface profileMenuType {
  menuItems: {
    row: string;
    category: {
      id: string;
      label: string;
    }[];
  }[];
}

export const profileMenu: profileMenuType = {
  menuItems: [
    {
      row: "row_one",
      category: [
        {
          id: "Hello Myntra User",
          label: "Hello Myntra User",
        },
      ],
    },
    {
      row: "row_two",
      category: [
        {
          id: "Orders",
          label: "Orders",
        },
        {
          id: "Wishlist",
          label: "Wishlist",
        },
        {
          id: "Gift Cards",
          label: "Gift Cards",
        },
        {
          id: "Contact Us",
          label: "Contact Us",
        },
        {
          id: "Myntra InsiderNew",
          label: "Myntra InsiderNew",
        },
      ],
    },
    {
      row: "row_three",
      category: [
        {
          id: "Myntra Credit",
          label: "Myntra Credit",
        },
        {
          id: "Coupons",
          label: "Coupons",
        },
        {
          id: "Saved Cards",
          label: "Saved Cards",
        },
        {
          id: "Saved VPA",
          label: "Saved VPA",
        },
        {
          id: "Saved Addresses",
          label: "Saved Addresses",
        },
        {
          id: "Edit Profile",
          label: "Edit Profile",
        },
        {
          id: "Logout",
          label: "Logout",
        },
      ],
    },
  ],
};
