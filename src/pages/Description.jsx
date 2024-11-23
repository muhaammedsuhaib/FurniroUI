import React from "react";
import description1 from "../assets/products/description1.png";
import description2 from "../assets/products/description2.png";

const Description = () => {
  return (
    <div className="px-4 md:px-8">
      <div className="border-t mt-10 pt-6">
        <div className="flex flex-col sm:flex-row justify-center gap-10 mt-6 text-sm font-medium text-gray-600">
          <p className="text-black cursor-pointer hover:text-gray-800">
            Description
          </p>
          <p className="cursor-pointer hover:text-gray-800">
            Additional Information
          </p>
          <p className="cursor-pointer hover:text-gray-800">Reviews [5]</p>
        </div>

        <div className="mt-6 text-gray-400 text-sm  sm:text-base ">
          <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="mt-4">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage-styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine-tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full sm:w-80 md:w-96 lg:w-1/2">
          <img
            src={description1}
            alt="description1"
            className="w-full h-full object-cover rounded-lg bg-[#F9F1E7] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          />
        </div>
        <div className="w-full sm:w-80 md:w-96 lg:w-1/2">
          <img
            src={description2}
            alt="description2"
            className="w-full h-full object-cover rounded-lg bg-[#F9F1E7] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
