import CarouselSlider from "react-carousel-slider";
let data = [
  {
    des: "1",
    imgSrc:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg",
  },
  {
    des: "2",
    imgSrc: "https://i.imgur.com/pgCzueK.jpg",
  },
  {
    des: "3",
    imgSrc: "https://i.imgur.com/7nbAJ0C.jpg",
  },
  {
    des: "4",
    imgSrc: "https://i.imgur.com/L75otV6.jpg",
  },
  {
    des: "5",
    imgSrc: "https://i.imgur.com/qkPMr9D.jpg",
  },
];

let sliderBoxStyle = {
  height: "250px",
  // width: "200px",
  // , background: "tranparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  autoSliding: { interval: "2s" },
  //, duration: "0.3s"
};

export const Slider = () => (
  <CarouselSlider
    slideItems={data}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
    textBoxStyle={textBoxStyle}
  />
);
