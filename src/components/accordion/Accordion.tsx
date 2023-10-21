"use client";

import { useState } from "react";
import Image from "next/image";
import "./accordion.scss";
import downArrow from "@/assets/images/icon-arrow-down.svg";

export default function Accordion(props: { title: string; content: string }) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div id="accordion">
      <button
        className={`accordion-btn ${isShowing ? "accordion-expanded" : ""}`}
        onClick={toggle}
        type="button"
      >
        <p className="accordion-title">{props.title}</p>
        <Image className="down-arrow" src={downArrow} alt="" />
      </button>
      <div
        className="accordion-content"
        style={{
          display: isShowing ? "block" : "none",
        }}
        dangerouslySetInnerHTML={{
          __html: props.content,
        }}
      />
    </div>
  );
}
