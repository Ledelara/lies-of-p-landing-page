import Header from "@/components/Header/Header";
import Overture from "@/components/Overture/Overture";
import Synopsis from "@/components/Synopsis/Synopsis";
import "../styles/components/_sections.scss";
import React from "react";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <Overture />
      </section>
      <section className="section__synopsis">
        <Synopsis />
      </section>
    </>
  );
}
