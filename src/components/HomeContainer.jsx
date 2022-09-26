import React from "react";
import Delivery from "../images/delivery.png";
import HeroBg from "../images/heroBg.png";
import { heroData } from "../utils/data";

function HomeContainer() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-blue-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain bg-white"
              alt="Delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in <br />
          <span className="text-orange-500 text-[3rem] md: text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi
          id aliquam quae quam incidunt deserunt, inventore suscipit quaerat
          cupiditate laboriosam tempora quisquam mollitia iste. Fugit quaerat
          porro vel nostrum necessitatibus totam tempore quibusdam harum autem
          praesentium quas consectetur possimus accusamus, veritatis a, modi cum
          dolorum similique recusandae explicabo! Hic, illo. Provident
          repudiandae porro harum. Eius soluta, deleniti illo, voluptatum iusto,
          ex distinctio reprehenderit obcaecati culpa praesentium maiores omnis
          blanditiis commodi tenetur veniam rem laboriosam ab aliquam aliquid
          natus odio. Deleniti obcaecati itaque, ut nemo iure cupiditate placeat
          ipsum neque totam, eos vel! Dicta dolore quos quas quae sint.
          Deleniti.
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-500 to-orange-500 w-full px-4 py-2
          rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 items-center relative">
        <img
          src={HeroBg}
          className="h-420 w-full lg:w-auto lg:h-650 ml-auto"
          alt="hero-bg"
        />
        <div className="w-full h-full absolute top-0 lg:left-26 flex items-center justify-center lg:px-12 lg:py-32 gap-4 flex-wrap lg:bottom-24">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imgSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                  alt="IceCreme"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600"> BDT </span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default HomeContainer;
