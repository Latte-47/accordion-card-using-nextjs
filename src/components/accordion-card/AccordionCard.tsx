import Image from "next/image";
import "./accordionCard.scss";
import Accordion from "../accordion/Accordion";
import bgImgDesktop from "@/assets/images/bg-pattern-desktop.svg";
import bgImgMobile from "@/assets/images/bg-pattern-mobile.svg";
import womanImgDesktop from "@/assets/images/illustration-woman-online-desktop.svg";
import womanImgMobile from "@/assets/images/illustration-woman-online-mobile.svg";
import boxImg from "@/assets/images/illustration-box-desktop.svg";

export default function AccordionCard() {
  return (
    <section id="card-main">
      <Image className="box-img" src={boxImg} alt="boxImg" />
      <Image
        className="woman-img-mobile"
        src={womanImgMobile}
        alt="womanImgMobile"
      />
      <div className="img-main">
        <Image
          className="bg-img-desktop"
          src={bgImgDesktop}
          alt="bgImgDesktop"
        />
        <Image className="bg-img-mobile" src={bgImgMobile} alt="bgImgMobile" />
        <Image
          className="woman-img-desktop"
          src={womanImgDesktop}
          alt="womanImgDesktop"
        />
      </div>
      <div className="accordion-main">
        <h3>FAQ</h3>
        <div className="accordion-div">
          <Accordion
            title="How many team members can I invite?"
            content="Sed facilisis pulvinar dui, feugiat tristique nibh mattis a. Vivamus eget dui eu erat hendrerit maximus."
          />
          <Accordion
            title="What is the maximum file upload size?"
            content="No more than 2GB. All files in your account must fit your alloted storage space."
          />
          <Accordion
            title="How do I reset my password?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis lorem finibus consequat congue."
          />
          <Accordion
            title="Can I cancel my subscription?"
            content="Suspendisse vitae purus id neque efficitur mollis. Vestibulum congue facilisis lorem et porta."
          />
          <Accordion
            title="Do you provide additional support?"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </div>
      </div>
    </section>
  );
}
