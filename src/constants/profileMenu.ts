export interface profileMenuType {
  menuItems: { row: string; category: { label: string }[] }[];
}

export const profileMenu: profileMenuType = {
  menuItems: [
    {
      row: "row_one",
      category: [
        {
          label: "Hello Myntra User",
        },
      ],
    },
    {
      row: "row_two",
      category: [
        {
          label: "Orders",
        },
        {
          label: "Wishlist",
        },
        {
          label: "Gift Cards",
        },
        {
          label: "Contact Us",
        },
        {
          label: "Myntra InsiderNew",
        },
      ],
    },
    {
      row: "row_three",
      category: [
        {
          label: "Myntra Credit",
        },
        {
          label: "Coupons",
        },
        {
          label: "Saved Cards",
        },
        {
          label: "Saved VPA",
        },
        {
          label: "Saved Addresses",
        },
        {
          label: "Edit Profile",
        },
        {
          label: "Logout",
        },
      ],
    },
  ],
};
