import React, { useState } from "react";
import fresas from "./pictures/fresas.jpg";
import linda from "./pictures/linda.jpg";
import crema from "./pictures/crema.jpg";
import mango from "./pictures/mango.jpg";
import * as stylesMM from "./stylesMM";
import { useModalHookState } from "./useModalHookState";
import Modal from "./Modal";

const Tarjetas = () => {
  const [modalIsOpen, openModal, closeModal] = useModalHookState(false);
  const [item, setItem] = useState("prueba");
  const handleModal = (data) => {
    setItem(data);
    openModal(!modalIsOpen);
  };
  const veganos =
    "If you are vegan, be sure to try our delicious fondente chocolate, you won't believe it!!";
  const mascotas =
    "Not only are we a pet-friendly ice cream shop, we also have a flavor for the kings of the house. No added sugars";
  const celiacos =
    "Since we want everyone to be able to enjoy our ice creams, we have gluten-free flavors.";
  const ofertas =
    "Every week we have new offers, we recommend you consult this section before placing your order.";

  return (
    <>
      <div className="mt-4 mb-10 font-sans:'Roboto' text-5xl text-center">
        <h1>For every taste</h1>
      </div>

      <div className={stylesMM.MAIN_CONTAINER}>
        <div className="m-4 bg-white rounded-lg shadow-lg w-72 md-flex">
          <img
            className="object-cover rounded-t-lg h-52 w-72"
            src={fresas}
            alt="strawberries"
          />
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
            For Vegans
            </h5>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(veganos)}
              >
              More info
              </button>
              <a href="http://localhost:3006/ShoppingCart">
                <button type="button" className={stylesMM.CARD_BUTTON}>
                  ¡Buy now!
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="m-4 bg-white rounded-lg shadow-lg w-72 md-flex">
          <img
            className="object-cover rounded-t-lg h-52 w-72"
            src={linda}
            alt="greyhound eating ice cream"
          />

          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
            For pets
            </h5>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(mascotas)}
              >
                More Info
              </button>
              <a href="http://localhost:3006/ShoppingCart">
                <button type="button" className={stylesMM.CARD_BUTTON}>
                  ¡Buy now!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="m-4 bg-white rounded-lg shadow-lg w-72">
          <img
            className="object-cover rounded-t-lg h-52"
            src={crema}
            alt="crema"
          />

          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
            For Celiacs
            </h5>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(celiacos)}
              >
                More Info
              </button>
              <a href="http://localhost:3006/ShoppingCart">
                <button type="button" className={stylesMM.CARD_BUTTON}>
                  ¡Buy now!
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="m-4 bg-white rounded-lg shadow-lg w-72">
          <img
            className="object-cover rounded-t-lg h-52"
            src={mango}
            alt="varios sabores"
          />

          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium text-center text-gray-900">
            Special offers
            </h5>
            <div className="flex justify-between mt-8">
              <button
                type="button"
                className={stylesMM.CARD_BUTTON}
                onClick={() => handleModal(ofertas)}
              >
                More Info
              </button>
              <a href="http://localhost:3006/ShoppingCart">
                <button type="button" className={stylesMM.CARD_BUTTON}>
                  ¡Buy now!
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <div className="object-center">
          <div className="mt-2 ml-12 w-96">
            <h2 className="justify-center mt-2 font-sans text-3xl font-semibold text-black ml-14 w-96">
            What you have{" "}
              <span className="font-serif text-3xl font-semibold text-cyan-600">
                {" "}
                what to know!
              </span>
            </h2>
            <p className="mt-10 ml-20 text-base text-justify text-black h-2/3">{item}</p>
          </div>
          <div>
            <img
              src="https://cdn.pixabay.com/photo/2021/01/18/12/49/ice-cream-5928048__340.jpg"
              alt="base"
              className="w-2/3 mt-32 ml-20 h-2/3"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Tarjetas;