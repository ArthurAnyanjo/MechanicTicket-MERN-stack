import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";
 

const CreateCarTicket = () => {
  const [ownerName, setOwnerName] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [numberPlate, setCarNumberPlate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setCarDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const {enqueueSnackbar} = useSnackbar();

  const navigate = useNavigate();

  const handleSaveCar = () => {
    const data = {
      ownerName,
      carBrand,
      numberPlate,
      description,
      phoneNumber,
      fixed: "false",
    };

    setLoading(true);
    axios

      .post("http://localhost:5555/cars", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created Successfully', {variant:'success'})
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', {variant:'error'});
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />

      <h1 className="text-3xl my-4"> Create Car Ticket</h1>

      {loading ? <Spinner /> : ""}

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Owner Name</label>
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Car Brand</label>
          <input
            type="text"
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Number Plate</label>
          <input
            type="text"
            value={numberPlate}
            onChange={(e) => setCarNumberPlate(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">
            Ticket Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setCarDescription(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveCar}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateCarTicket;
