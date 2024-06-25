import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const ShowCarTicket = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/cars/${id}`)
      .then((response) => {
        setCar(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />

      <h1 className="text 3xl my-4">Show Car</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">ID</span>
            <span>{car._id}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Owner Name</span>
            <span>{car.ownerName}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Car Brand</span>
            <span>{car.carBrand}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Number Plate</span>
            <span>{car.numberPlate}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Fix Description</span>
            <span>{car.description}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Phone Number</span>
            <span>{car.phoneNumber}</span>
          </div>

          <div className="my-4 flex align-middle">
            <span className="text-xl mr-4 text-gray-500">Fixed</span>
            <span>
              {car.fixed ? (
                <TiTick className="mx-auto" />
              ) : (
                <ImCross className="mx-auto" />
              )}
            </span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(car.createdAt).toString()}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Modified</span>
            <span>{new Date(car.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCarTicket;
