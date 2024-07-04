import { Check, ChevronRight, Youtube } from 'lucide-react';
import about_1 from '../assets/about_1.png';
import burger from '../assets/burger.png';
import leaf from '../assets/leaf.png';

const AboutUs = () => {
  return (
    <>
      <div
        className="px-6 py-8 max-w-7xl mx-auto lg:mt-10 space-y-28"
        id="about_us"
      >
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          <img
            src={about_1}
            alt="Food"
            className="h-[300px] w-full object-cover lg:w-1/2 lg:h-[400px] lg:object-cover rounded-xl"
          />

          <div className="lg:w-1/2 w-full">
            <h1 className="text-3xl leading-normal">
              We pride ourselves on making real food from the best ingredients.
            </h1>
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="flex text-white bg-orange-500 w-fit px-4 py-3 gap-2 items-center"
              >
                <span>Learn More</span>
                <ChevronRight />
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center ">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-3xl leading-normal">
                We make everything by hand with the best possible ingredients.
              </h1>
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>

              <div className="mt-6">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div className="flex gap-2" key={i}>
                    <span className="text-orange-500">
                      <Check strokeWidth={5} />
                    </span>
                    <p className="text-base">
                      Etiam sed dolor ac diam volutpat.
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="flex text-white bg-orange-500 w-fit px-4 py-3 gap-2 items-center"
                >
                  <span>Learn More</span>
                  <ChevronRight />
                </a>
              </div>
            </div>
            <img
              src={burger}
              alt="Food"
              className="h-[300px] w-full object-cover lg:w-1/2 lg:h-[400px] lg:object-cover rounded-xl"
            />
          </div>
          <img
            src={leaf}
            alt="leave"
            className="absolute -top-40 right-0 w-60 -z-10 lg:z-auto lg:w-80 lg:-top-60"
          />
        </div>
      </div>
      <div className="bg-[url('/src/assets/cruisant.png')] py-28 bg-cover bg-center text-center px-6 mt-8">
        <h2 className="text-orange-500 text-4xl lg:w-[50%] mx-auto">
          When a man's stomach is full it makes no difference whether he is rich
          or poor.
        </h2>
        <p className="text-white mt-5 lg:w-[50%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus.
        </p>

        <a
          href="#"
          className="text-white flex gap-2 items-center mx-auto w-fit mt-8"
        >
          <Youtube />
          <p className="font-bold">Watch Our Story</p>
          <div></div>
        </a>
      </div>
    </>
  );
};

export default AboutUs;
