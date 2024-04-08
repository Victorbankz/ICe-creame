import React from "react";
import { CakeIcon } from "@heroicons/react/outline";
import { PhoneIncomingIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import { EmojiHappyIcon } from "@heroicons/react/outline";

const Columnas = () => {
  return (
    <div className="font-sans:'Roboto' mt-10 ml-10 mr-10">
      <div className="flex content-center justify-center">
        <h1 className="mt-4 mb-4 text-4xl font-semibold">
        Why choose ice cream{" "}
          <span className="font-serif text-4xl font-semibold text-cyan-400">
            Luna Ice
          </span>{" "}
          ?{" "}
        </h1>
      </div>
      <div className="ml-4 mr-4">
        <div className="grid gap-10 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white-200">
            <CakeIcon className="w-8 h-8 mt-4 ml-4 text-gray-600" />
            <h2 className="mt-2 mb-6 font-sans:'Roboto' text-xl font-semibold">
            Discover our flavors!
            </h2>
            <p className="text-justify">
            Discover flavors that you would never have imagined finding in a
            frozen. We will also teach you how and who creates them. Flavors
            traditional and exotic, always with the highest quality.
            </p>
          </div>
          <div className="bg-white-200">
            <PhoneIncomingIcon className="w-8 h-8 mt-4 ml-4 text-gray-600" />
            <h2 className="mt-2 mb-6 font-sans:'Roboto' text-xl font-semibold">
            We can sweeten your holidays
            </h2>
            <p className="text-justify">
            We offer large formats so you can enjoy our
            delicious ice creams at your wedding party or any celebration
            really convenient prices.
            </p>
          </div>
          <div className="bg-white-200">
            <HeartIcon className="w-8 h-8 mt-4 ml-4 text-gray-600" />
            <h2 className="mt-2 mb-6 font-sans:'Roboto' text-xl font-semibold">
            Help your community
            </h2>
            <p className="text-justify">
            Our production is oriented to KM 0, so we buy
            ingredients to nearby producers, and in cases where
            It is possible, to local producers.
            </p>
          </div>
          <div className="bg-white-200">
            <EmojiHappyIcon className="w-8 h-8 mt-4 ml-4 text-gray-600" />
            <h2 className="mt-2 mb-6 font-sans:'Roboto' text-xl font-semibold">
            Enjoy the best quality
            </h2>
            <p className="text-justify">
            We are very strict with our quality controls, which range
            from the water to each of the ingredients, so we can
            guarantee that our ice creams are the best in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Columnas;