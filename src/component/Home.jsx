import { useState, useEffect } from "react";
import bg from "../assets/apartment1.jpg";
import img from "../assets/bg-image.jpg";
import img2 from "../assets/bg-image2.jpg";
export default function Home() {
  const container = [
    {
      tittle: "Drive for minutes",
      desc: "Book a car, unlock it with your phobne, and pay for the time and distance you drive.",
      img: bg,
    },
    {
      tittle: "Drive for days",
      desc: "Pick daily rentals for longer trips and pay a fixed fee. Fuel and parking not included.",
      img: img,
    },
    {
      tittle: "Park for free",
      desc: "NO fees in designated areas, whether you're taking a break or ending your trip.",
      img: img2,
    },
  ];
  return (
    <div className="bg-black h-full w-full text-white">
      <div className="bgImage w-full h-130 md:h-150 bg-cover bg-center py-35 md:py-50 px-10 md:px-30">
        <div className="max-w-xl">
          <h3 className="text-gray-500 font-bold text-xl md:text-2xl">
            Bolt Drive car rentals
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold py-6">
            A car when you need one
          </h1>
          <p className="text-lg max-w-lg font-semibold">
            No servie checks, insurance forms, fuel prices, or parking fees.
            Drive new cars at low rates with Bolt Drive car rental.
          </p>
          <button className="bg-green-500 cursor-pointer hover:bg-green-700 flex w-full justify-center py-2 rounded-md mt-6 md:w-fit md:px-6">
            Get the app
          </button>
        </div>
      </div>
      <div className="text-center w-full bg-white/3 py-20">
        <h1 className="text-3xl mb-5 font-bold md:text-5xl">
          Car rental on demand
        </h1>
        <p className="max-w-lg mx-auto mb-3 text-gray-400 text-lg font-semibold">
          With Bolt Drive car-sharing, you pay for the time and distance you
          drive. Nothing more.
        </p>
        <p className="text-sm text-gray-400 font-medium">
          see all available services in the app
        </p>
        <div className=" px-10 py-30 w-full flex flex-col">
          <div className="flex flex-col w-full gap-10 flex-wrap">
            {container.map((item, index) => (
              <>
                <div
                  key={index}
                  className=" w-50 mx-auto flex border-green-500 border-4 h-100 rounded-2xl transition duration-500 hover:scale-[1.03] cursor-cell"
                >
                  <div className="border-5 rounded-2xl h-98 border-black">
                    <img
                      src={item.img}
                      alt=""
                      className="w-50 h-full rounded-t-2xl"
                    />
                  </div>
                </div>
                <div className="max-w-75 mx-auto">
                  <h1>{item.tittle}</h1>
                  <p>{item.desc}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
