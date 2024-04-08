import React from "react";
import helados from "./Images/ice-cream-cone.png";
import * as stylesMM from "../stylesMM";

const Delivery = () => {
  return (
    <div>
      <div className="grid h-auto max-w-full py-5 md:px-5 grid-row-2 lg:grid lg:grid-cols-2 lg:gap-x-5">
        <div className="">
          <img
            className="object-cover object-center w-11/12 h-full"
            src={helados}
            alt="Hace tu pedido ONLINE"
          />
        </div>

        <div className="flex flex-col font-sans:'Roboto'content-center pt-6 mx-2 container-text lg:mx-0 gap-y-5 lg:gap-y-8">
          <div className="text-xl font-semibold container-title md:text-2xl xl:text-3xl">
            <p className="text-green-700">Place your order online!</p>
            <p className="pb-3">Delivery Gratis!</p>
          </div>

          <div className="container-p md:text-lg">
            <p className="text-justify">
            Surprise someone who is doing Homeoffice
            </p>
            <br />

            <p className="text-justify">
            You imagine you are working from home, you pause to
            having lunch, the doorbell rings and when you open it you find
            our special home box?
            </p>
            <br />

            <p className="text-justify">
            You can order the weight and flavors you want, we will
            We will accompany it with some delicious cones, chocolates, sauces and
            other toppings. You can also send a personalized message to
            give a better impact to the surprise.
            </p>
            <br />
          </div>

          <div>
            <button className={stylesMM.CARD_BUTTON}>
            Place Order Online
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;