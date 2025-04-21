import Image from "next/image";
import './styles/__studioList.scss';

export default function StudioList() {
  return (
    <div className="studio-list__container">
      <ul className="studio-list__list">
        <li className="studio-list__item">
          <a className="studio-list__link" href="#">
            <Image 
              src="/images/assets/studios/1738168850-neowiz_ci_fullcolor-horizontal-1.webp"
              alt="Studio 1"
              width={172}
              height={39}
              className="studio-list__image"
            />
          </a>
        </li>
        <li className="studio-list__item">
          <a className="studio-list__link" href="#">
            <Image 
              src="/images/assets/studios/1738168850-round8-studio.webp"
              alt="Studio 1"
              width={112}
              height={50}
              className="studio-list__image"
            />
          </a>
        </li>
        <li className="studio-list__item">
          <a className="studio-list__link" href="#">
            <Image 
              src="/images/assets/studios/1738168850-nough.webp"
              alt="Studio 1"
              width={153}
              height={29}
              className="studio-list__image"
            />
          </a>
        </li>
        <li className="studio-list__item">
          <a className="studio-list__link" href="#">
            <Image
              src="/images/assets/studios/1738168850-amd.webp"
              alt="Studio 1"
              width={67}
              height={17}
              className="studio-list__image"
            />
          </a>
        </li>
        <li className="studio-list__item">
          <a className="studio-list__link" href="#">
            <Image 
              src="/images/assets/studios/1738168850-shinsegae.webp"
              alt="Studio 1"
              width={178}
              height={27}
              className="studio-list__image"
            />
          </a>
        </li>
        <li className="studio-list__item">
          <a className="studio-list__link" href="#">
            <Image 
              src="/images/assets/studios/1738168850-fireshine-games.webp"
              alt="Studio 1"
              width={90}
              height={31}
              className="studio-list__image"
            />
          </a>
        </li>
        <li className="studio-list__item">
          <a className="studio-list__link" href="#">
            <Image 
              src="/images/assets/studios/1738168850-quasar-zone.webp"
              alt="Studio 1"
              width={165}
              height={32}
              className="studio-list__image"
            />
          </a>
        </li>
        <li className="studio-list__item">
          <a className="studio-list__link" href="#">
            <Image 
              src="/images/assets/studios/1738168850-sk-hynix.webp"
              alt="Studio 1"
              width={67}
              height={24}
              className="studio-list__image"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}