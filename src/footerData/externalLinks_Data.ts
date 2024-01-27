import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const externalLinks_Data = {
  images: [
    {
      label: "Google Play",
      link: "/",
      imageSrc:
        "https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png",
    },
    {
      label: "App Store",
      link: "/",
      imageSrc:
        "https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png",
    },
  ],
  iconButtons: [
    {
      label: "facebook",
      link: "/",
      icon: FaFacebookSquare,
    },
    {
      label: "twitter",
      link: "/",
      icon: FaTwitter,
    },
    {
      label: "youtube",
      link: "/",
      icon: FaYoutube,
    },
    {
      label: "instagram",
      link: "/",
      icon: ImInstagram,
    },
  ],
};

export default externalLinks_Data;
