"use client";

import Image from "next/image";
import "../app/page.css";
import React from "react";
import Section1 from "../components/Section1.js";
import Section2 from "../components/Section2.js";
import HomePage from "../components/HomePage.js";

export default function Home() {
  return (
    <div className="Main">
      <div className="page">
        <div className="head">
          <HomePage />
        </div>
      </div>
      <div>
        <main>
          <article>
            <section>
              <Section1 />
            </section>
            <section>
              <Section2 />
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
