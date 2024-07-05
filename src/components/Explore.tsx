import { ShoppingBasket } from 'lucide-react';
import food_1 from '../assets/food_1.png';
import food_2 from '../assets/food_2.png';
import food_3 from '../assets/food_3.png';

const foodItems = [
  {
    id: 1,
    image: food_1,
    name: 'Rainbow Vegetable Sandwich',
    time: 'Time: 15 - 20 Minutes | Serves: 1',
    price: { discounted: '10.50', normal: '11.70' },
  },
  {
    id: 2,
    image: food_2,
    name: 'Rainbow Vegetable Sandwich',
    time: 'Time: 15 - 20 Minutes | Serves: 1',
    price: { discounted: '9.20', normal: '11.70' },
  },
  {
    id: 3,
    image: food_3,
    name: 'Rainbow Vegetable Sandwich',
    time: 'Time: 15 - 20 Minutes | Serves: 1',
    price: { discounted: '12.50', normal: '15.70' },
  },
];

const FoodItem = ({
  image,
  name,
  time,
  price,
}: {
  image: string;
  name: string;
  time: string;
  price: { normal: string; discounted: string };
}) => (
  <div>
    <img src={image} alt="Spagetti" />
    <h3 className="mt-6 font-bold">{name}</h3>
    <p className="mt-1 text-black/70">{time}</p>

    <div className="mt-4 text-2xl space-x-4">
      <span className="text-orange-500">{price.discounted}</span>
      <span className="text-black/30 line-through">{price.normal}</span>
    </div>

    <hr className="my-6" />

    <a
      href="#"
      className="flex text-white bg-orange-500 w-fit px-4 py-3 gap-2 items-center"
    >
      <span>Order Now</span>
      <ShoppingBasket />
    </a>
  </div>
);

const FoodItemList = () => (
  <div className="mt-20 grid grid-cols-[repeat(auto-fit,minmax(250px,_1fr))] gap-y-16 lg:gap">
    {foodItems.map(({ id, image, name, time, price }) => (
      <FoodItem {...{ image, name, time, price }} key={id} />
    ))}
  </div>
);

const Explore = () => {
  return (
    <div className="px-6 py-20 lg:py-24 max-w-7xl mx-auto" id="explore">
      <div className="text-center">
        <h2 className="text-3xl leading-normal">Explore Our Foods </h2>
        <p className="mt-5 lg:w-[50%] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus. Far far away, behind the word mountains, far from the
          countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove.
        </p>
      </div>

      <FoodItemList />
    </div>
  );
};

export default Explore;
