import Header from "@/components/Header/Header";
import Overture from "@/components/Overture/Overture";
import Synopsis from "@/components/Synopsis/Synopsis";
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
      <section>
        <Synopsis />
      </section>
    </>
  );
}
