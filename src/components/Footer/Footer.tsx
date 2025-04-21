import Plataforms from "./components/Plataforms/Plataforms";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Studios from "./components/Studios/Studios";

export default function Footer() {
  return (
    <div className="footer__container">
      <SocialMedia />
      <Studios />
      <Plataforms />
    </div>
  )
}