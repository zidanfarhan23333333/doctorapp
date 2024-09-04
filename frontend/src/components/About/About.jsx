import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutImg} alt="About" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[75px] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>

          {/* about content */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">Pround to be one of the nations best</h2>
            <p className="text__para mt-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus praesentium sed fugit reiciendis molestias, cumque
              veniam ad necessitatibus, neque rem quas blanditiis. Eaque,
              accusamus impedit aspernatur eveniet corporis aliquid explicabo.
            </p>
            <p className="text__para mt-[30px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              odit, magni repellat ex obcaecati illum nesciunt placeat
              reiciendis nostrum deleniti, dolor corporis in suscipit iste.
              Quaerat asperiores voluptate iusto repellat.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
