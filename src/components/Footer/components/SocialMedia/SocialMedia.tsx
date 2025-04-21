import Image from "next/image";
import SocialMediaContainer from "./components/SocialContainer/SocialMediaContainer";
import '../styles/_SocialMedia.scss'
import IndicativeContainer from "./components/IndicativeContainer/IndicativeContainer";

export default function SocialMedia() {
  return (
    <div className="social-media__container">
      <Image 
        src="/images/lies-of-p-logo.webp" 
        alt="logo" 
        width={145} 
        height={145}
      />
      <SocialMediaContainer />
      <IndicativeContainer />
    </div>
  )
}