import CarouselSlider from "react-carousel-slider";

export default function Slider() {
  let data = [
    {
      id: "1",
      imgSrc:
        "https://cf-images.ap-southeast-1.prod.boltdns.net/v1/jit/5745608584001/262ae93c-443f-4bdc-a11d-71f9fb5b4eb6/main/1280x720/17s514ms/match/image.jpg",
    },
    {
      id: "2",
      imgSrc:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/16/a4959e60-008e-4296-8118-f25eb689e0511697433850966-Virat-s_Favourite_picks___Min_50_Off-_Wrogn.png",
    },
    {
      id: "3",
      imgSrc:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/0ad75db8-98f7-4197-b70b-feb1251879e91697616839441-image_png_1590114644.png",
    },
    {
      id: "4",
      imgSrc:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/16/a4959e60-008e-4296-8118-f25eb689e0511697433850966-Virat-s_Favourite_picks___Min_50_Off-_Wrogn.png",
    },
    {
      id: "5",
      imgSrc:
        "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/18/0ad75db8-98f7-4197-b70b-feb1251879e91697616839441-image_png_1590114644.png",
    },
  ];
  let sliderBoxStyle = {
    height: "250px",
    width: "200px",
  };

  let itemsStyle = {};

  let textBoxStyle = {};

  let buttonSetting = {
    placeOn: "middle-inside",
  };

  let manner = {
    autoSliding: { interval: "1s" },
  };

  return (
    <div className="CarouselSlider">
      <CarouselSlider
        slideItems={data}
        manner={manner}
        buttonSetting={buttonSetting}
        sliderBoxStyle={sliderBoxStyle}
        itemsStyle={itemsStyle}
        textBoxStyle={textBoxStyle}
      />
    </div>
  );
}
