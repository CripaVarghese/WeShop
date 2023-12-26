export interface imageItemsType {
  dataItems: {
    id: number;
    url?: string | undefined;
    data: {
      id: number;
      url?: string | number | undefined;
    }[];
  }[];
}
export const imageItems: imageItemsType = {
  dataItems: [
    {
      id: 1,
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg",
      data: [
        {
          id: 1,
          url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg",
        },
        {
          id: 2,
          url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/b986f96f-c6ce-4ce7-a999-4dbb4cc9ccec1599798741760UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt2.jpg",
        },
        {
          id: 3,
          url: "https://cf-images.ap-southeast-1.prod.boltdns.net/v1/jit/5745608584001/262ae93c-443f-4bdc-a11d-71f9fb5b4eb6/main/1280x720/17s514ms/match/image.jpg",
        },
        {
          id: 4,
          url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/30708cc5-d6f5-4343-b3b2-3cbcc618a2401599798741824UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt3.jpg",
        },
        {
          id: 5,
          url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/2e8c15be-cdd8-4636-9b4b-594bccfb7d7e1599798741882UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt4.jpg",
        },
        {
          id: 6,
          url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/0f4dbad9-e8ee-480a-8e08-743af87157171599798741947UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt5.jpg",
        },
      ],
    },
    {
      id: 2,
      url: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24014310/2023/7/14/e0d643e5-05bc-4249-833b-0ddf80440f851689274793057BULLMERMenBeigePrintedV-NeckPocketsT-shirt1.jpg",
      data: [
        {
          id: 1,
          url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24014310/2023/7/14/e0d643e5-05bc-4249-833b-0ddf80440f851689274793057BULLMERMenBeigePrintedV-NeckPocketsT-shirt1.jpg",
        },
        {
          id: 2,
          url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24014310/2023/7/14/65bc0c49-3584-4558-8bc8-8897ce6817801689274793024BULLMERMenBeigePrintedV-NeckPocketsT-shirt2.jpg",
        },
        {
          id: 3,
          url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24014310/2023/7/14/d94891fe-b26a-4190-a7cd-e74fbd68d6071689274793042BULLMERMenBeigePrintedV-NeckPocketsT-shirt3.jpg",
        },
        {
          id: 4,
          url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/24014310/2023/7/14/c31b2aa6-ab68-43f5-8008-28ace6afcb3a1689274792992BULLMERMenBeigePrintedV-NeckPocketsT-shirt4.jpg",
        },
      ],
    },
  ],
};

// export const imageItems = {
//   data: [
//     {
//       id: "1",
//       url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg",
//     },
//     {
//       id: "2",
//       url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/b986f96f-c6ce-4ce7-a999-4dbb4cc9ccec1599798741760UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt2.jpg",
//     },
//     {
//       id: "3",
//       url: "https://cf-images.ap-southeast-1.prod.boltdns.net/v1/jit/5745608584001/262ae93c-443f-4bdc-a11d-71f9fb5b4eb6/main/1280x720/17s514ms/match/image.jpg",
//     },
//     {
//       id: "4",
//       url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/30708cc5-d6f5-4343-b3b2-3cbcc618a2401599798741824UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt3.jpg",
//     },
//     {
//       id: "5",
//       url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/2e8c15be-cdd8-4636-9b4b-594bccfb7d7e1599798741882UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt4.jpg",
//     },
//     {
//       id: "6",
//       url: "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/0f4dbad9-e8ee-480a-8e08-743af87157171599798741947UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt5.jpg",
//     },
//   ],
// };
