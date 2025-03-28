"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/components/carousel.scss";

const slides = [
  {
    src: "/images/assets/Carousel/1739365120-10_krat2.avif",
    title: "Um mundo sombriamente elegante e cruel",
    description:
      "Descubra os segredos da cidade de Krat, um lugar impregnado do estilo da Belle Époque, que prosperou devido à sua indústria de marionetes e agora vê suas ruas cobertas de sangue.",
  },
  {
    src: "/images/assets/Carousel/1739365120-5_carcass.avif",
    title: "Combate com armas personalizáveis",
    description:
      "Desenvolva um estilo de combate único para enfrentar inimigos e terrenos cruéis, combinando armas dinâmicas, utilizando as Legion Arms e ativando novas habilidades.",
  },
  {
    src: "/images/assets/Carousel/1739365120-4_black_rabbits.avif",
    title: "O que há em uma mentira?",
    description:
      "Haverá momentos em que você será confrontado com escolhas em que você pode dar conforto a outros em tristeza ou desespero mentindo... ou você pode escolher dizer a verdade. Trilhe seu próprio caminho.",
  },
  {
    src: "/images/assets/Carousel/1739365120-6_king_of_doll.avif",
    title: "Um clássico reimaginado",
    description:
      "Experimente o adorado conto de fadas de Pinóquio reinterpretado como uma narrativa sombria e sinistra que permite aos jogadores descobrir os segredos e símbolos ocultos no mundo de Lies of P.",
  },
];

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      /* navigation */
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="carousel"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="carousel__slide">
            <div className="carousel__text">
              <h2 className="carousel__title">{slide.title}</h2>
              <div className="carousel__line">
                <span className="carousel__arrow__span"></span>
                <svg
                  width="54"
                  height="28"
                  viewBox="0 0 54 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.1786 13.5104C44.3701 13.1675 37.9917 12.8584 34.7562 12.8584C31.5207 12.8584 27.0929 12.864 25.7559 12.9371C24.4189 13.0102 19.7075 13.9319 16.362 13.9319C13.0166 13.9319 17.9132 13.9937 2.93969 13.9937C2.93969 13.9937 10.8577 14.2691 14.232 10.4753C17.3402 6.98493 16.7845 3.58453 15.8874 2.35364C14.7819 0.84172 12.0963 0.746171 11.4654 2.35364M53 13.9375C53 13.9375 41.7887 13.0157 40.0523 12.5548C38.3159 12.094 32.1575 12.864 29.1535 11.6331C26.1496 10.4022 25.2061 10.2504 24.1006 10.7113C22.9951 11.1722 19.0535 13.9881 9.26024 13.9881C-0.533023 13.9881 1.07025 13.9881 1.07025 13.9881M48.1786 14.4885C44.3701 14.8313 37.9917 15.1405 34.7562 15.1405C31.5207 15.1405 27.0929 15.1348 25.7559 15.0618C24.4189 14.9887 19.6785 14.067 16.362 14.067C13.0166 14.067 17.9132 14.0051 2.93969 14.0051C2.93969 14.0051 10.8577 13.7295 14.232 17.5234C17.3402 21.0137 16.7845 24.4141 15.8874 25.645C14.7819 27.1569 12.0963 27.2524 11.4654 25.645M53 14.0612C53 14.0612 41.7887 14.983 40.0523 15.4438C38.3159 15.9047 32.1575 15.1347 29.1535 16.3656C26.1496 17.5965 25.2061 17.7483 24.1006 17.2874C22.9951 16.8265 19.0535 14.0106 9.26024 14.0106C-0.533023 14.0106 1.07025 14.0106 1.07025 14.0106"
                    stroke="#796741"
                  ></path>
                </svg>
              </div>
              <p className="carousel__description">{slide.description}</p>
            </div>

            <div className="carousel__image-container">
              <Image
                src={slide.src}
                alt={slide.title}
                width={960}
                height={540}
                className="carousel__image"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
