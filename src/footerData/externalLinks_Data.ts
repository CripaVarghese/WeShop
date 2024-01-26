import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const externalLinks_Data = {
  images: [
    {
      label: "Google Play Myntra",
      link: "https://play.google.com/store/apps/details?id=com.myntra.android",
      imageSrc:
        "https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png",
    },
    {
      label: "App Store Myntra",
      link: "https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059",
      imageSrc:
        "https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png",
    },
  ],
  iconButtons: [
    {
      label: "facebook",
      link: "https://www.facebook.com/myntra",
      icon: FaFacebookSquare,
    },
    {
      label: "twitter",
      link: "https://twitter.com/myntra",
      icon: FaTwitter,
    },
    {
      label: "youtube",
      link: "https://www.youtube.com/user/myntradotcom",
      icon: FaYoutube,
    },
    {
      label: "instagram",
      link: "https://www.instagram.com/myntra",
      icon: ImInstagram,
    },
  ],
};

export default externalLinks_Data;
