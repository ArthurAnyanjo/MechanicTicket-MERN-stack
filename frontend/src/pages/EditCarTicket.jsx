import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";

const EditCarTicket = () => {
  const [ownerName, setOwnerName] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [numberPlate, setCarNumberPlate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setCarDescription] = useState("");
  const [fixed, setFixedState] = useState(false);

  const {enqueueSnackbar} = useSnackbar();

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/cars/${id}`)
      .then((response) => {
        setOwnerName(response.data.ownerName);
        setCarBrand(response.data.carBrand)
        setCarNumberPlate(response.data.numberPlate)
        setCarDescription(response.data.description)
        setPhoneNumber(response.data.phoneNumber)
        setFixedState(response.data.fixed)
        setLoading(false);
        
      }).catch((error) => {
        setLoading(false);
        alert('An error happened. Please Chack console');
        console.log(error);
      });
  }, [])


  const handleChange = () => {
    setFixedState(!fixed);
  };


  const handleEditCar = () => {

    const fixedString = fixed.toString();

    const data = {
      ownerName,
      carBrand,
      numberPlate,
      description,
      phoneNumber,
      fixed: fixedString,
    };

    setLoading(true);
    axios
      .put(`http://localhost:5555/cars/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited Successfully', {variant: 'success'})
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(data);
        enqueueSnackbar('Error', {variant: 'error'})
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />

      <h1 className="text-3xl my-4"> Edit Car Ticket</h1>

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

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Fixed</label>
          <input
            type="checkbox"
            checked={fixed}
            onChange={handleChange}
            className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>

        <button className="p-2 bg-sky-300 m-8" onClick={handleEditCar}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditCarTicket;
