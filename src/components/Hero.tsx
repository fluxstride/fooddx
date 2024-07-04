import { ChevronRight, ShoppingBasket } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <div className="px-6 py-8 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:items-center lg:mt-10">
      <div className="lg:w-1/2 w-full">
        <h1 className="text-3xl leading-normal">
          Order food from favourite restaurants near you.
        </h1>
        <p className="mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum amet leo.{' '}
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="flex text-white bg-orange-500 w-fit px-4 py-3 gap-2 items-center"
          >
            <span>Order Now</span>
            <ShoppingBasket />
          </a>
          <a href="#" className="flex gap-1 w-fit px-4 py-3 shadow-md">
            <span>Learn More</span>
            <ChevronRight />
          </a>
        </div>
      </div>

      <img
        src={heroImage}
        alt="Food"
        className="h-[300px] w-full object-cover lg:w-1/2 lg:h-[400px] lg:object-cover rounded-xl"
      />
    </div>
  );
};

export default Hero;
