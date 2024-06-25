import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BsInfoCircle } from "react-icons/bs";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import CarModal from "./CarModal";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const CarSingleCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
      key={car._id}
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
      {car.fixed ? <TiTick className="mx-auto" />  : <ImCross className="mx-auto"  /> }
      </h2>

      <h4 className="my-2 text-gray-500">{car._id}</h4>

      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{car.ownerName}</h2>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{car.numberPlate}</h2>
      </div>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{car.carBrand}</h2>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-500 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />

        <Link to={`/cars/details/${car._id}`}>
          <BsInfoCircle className="text-2xl text-teal-800 hover:text-black" />
        </Link>
        <Link to={`/cars/edit/${car._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-800 hover:text-black" />
        </Link>
        <Link to={`/cars/delete/${car._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {
      
      showModal && (
      
      <CarModal car={car} onClose={() => setShowModal(false)} />
      
    )}
    </div>
  );
};

export default CarSingleCard;
