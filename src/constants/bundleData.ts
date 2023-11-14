export interface bundleDataType {
  menu: {
    id: string | null;
    header: string;
    menuItem: {
      label: string;
      url: string;
    }[];
  }[];
}

export const bundleData: bundleDataType = {
  menu: [
    {
      id: "bundle",
      header: "Bundle",
      menuItem: [
        {
          label: "Bundle Item",
          url: "#",
        },
        {
          label: "Single styles",
          url: "#",
        },
      ],
    },
    {
      id: "country",
      header: "Country of Origin",
      menuItem: [
        {
          label: "All countries",
          url: "#",
        },
        {
          label: "India",
          url: "#",
        },
      ],
    },
    {
      id: "size",
      header: "Size",
      menuItem: [
        {
          label: "3XS",
          url: "",
        },
        {
          label: "XXS",
          url: "",
        },
        {
          label: "XS",
          url: "",
        },
        {
          label: "XS/S",
          url: "",
        },
        {
          label: "S",
          url: "",
        },
        {
          label: "S/M",
          url: "",
        },
        {
          label: "M",
          url: "",
        },
        {
          label: "M/L",
          url: "",
        },
        {
          label: "L",
          url: "",
        },
        {
          label: "L/XL",
          url: "",
        },
        {
          label: "XL",
          url: "",
        },
        {
          label: "XL/XXL",
          url: "",
        },
        {
          label: "XXL",
          url: "",
        },
        {
          label: "3XL",
          url: "",
        },
        {
          label: "4XL",
          url: "",
        },
        {
          label: "5XL",
          url: "",
        },
        {
          label: "6XL",
          url: "",
        },
        {
          label: "7XL",
          url: "",
        },
        {
          label: "8XL",
          url: "",
        },
        {
          label: "9XL",
          url: "",
        },
        {
          label: "10XL",
          url: "",
        },
        {
          label: "11XL",
          url: "",
        },
        {
          label: "Onesize",
          url: "",
        },
        {
          label: "XXXL",
          url: "",
        },
      ],
    },
  ],
};
