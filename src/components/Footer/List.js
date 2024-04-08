import React from "react";
import logo from "./Images/logo.png";

const List = () => {
  return (
    <div className="flex flex-col justify-between max-w-full mx-10 my-4 container-footer md:mx-0 lg:mx-10 md:flex-row">
      <div className="h-40 container-logo-footer w-80">
        <img
          className="w-40 h-40 rounded-full xl:flex 2xl:ml-20"
          src={logo}
          alt="Logo"
        />
      </div>
      <br />

      <div className="mr-20 font-semibold font-sans:'Roboto' container-list lg:mt-2 lg:flex gap-x-1 xl:flex xl:gap-x-3 2xl:gap-x-12">
        <div>
          <ul>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              All Categories
              </a>
            </li>
            <br />
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Occasions
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Working from home
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Snack time
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Breakfast
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />

        <div>
          <ul>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-300"
                href="."
              >
              Featured Products
              </a>
            </li>
            <br />

            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Water Ice Cream
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Cream ice cream
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Vegan Ice Cream
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Celiac Ice Cream
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
                Drinks
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />

        <div>
          <ul>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Gifts and Promotions
              </a>
            </li>
            <br />
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
                Gifts cards
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              2x1 Wednesday and Thursday
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Discount Online Orders
              </a>
            </li>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Draws
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />

        <div>
          <ul>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              Our Specializations
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />

        <div>
          <ul>
            <li>
              <a
                className="font-sans:'Roboto' font-semibold hover:bg-slate-400"
                href="."
              >
              About us
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default List;