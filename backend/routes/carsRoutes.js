import express from "express";
import { Car } from "../models/carModel.js";

const router = express.Router();

//Route to save a new car entered
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.carBrand ||
      !request.body.ownerName ||
      !request.body.numberPlate||
      !request.body.description ||
      !request.body.fixed ||
      !request.body.phoneNumber 
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: Car Brand, Owner Name , numberPlate, Phone Number , Description, Fixed"
      });
    }

    const newCar = {
      carBrand: request.body.carBrand,
      ownerName: request.body.ownerName,
      numberPlate: request.body.numberPlate,
      description: request.body.description,
      fixed: request.body.fixed,
      phoneNumber: request.body.phoneNumber,

    };

    const carItem = await Car.create(newCar);

    return response.status(201).send(carItem);
  } catch (error) {
    console.log(`Error when due to: ${error}`);
    response.status(500).send({ message: error.message });
  }
});

//Route to Get All Cars from Database
router.get("/", async (request, response) => {
  try {
    const cars = await Car.find({});
    return response.status(200).json({
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    console.log(`Error due to: ${error}`);
    response.status(500).send({ message: error.message });
  }
});

//Route to Get Single Car from Database with ID
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const car = await Car.findById(id);

    return response.status(200).json(car);
  } catch (error) {
    console.log(`Error router due to: ${error}`);
    response.status(500).send({ message: error.message });
  }
});

//Route to update a car
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.carBrand ||
      !request.body.ownerName ||
      !request.body.numberPlate ||
      !request.body.description ||
      !request.body.phoneNumber ||
      !request.body.fixed
    ) {
      return response.status(400).send({
        message:
        "Send all required fields: Car Brand, Owner Name , numberPlate, Phone Number , Description,Fixed"
      });
    }

    const { id } = request.params;

    const result = await Car.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({
        message: "Car not found!",
      });
    }

    return response.status(200).send({
      message: "Car Record Successfully Updated!",
    });
  } catch (error) {
    console.log(`Error when when router due to: ${error}`);
    response.status(500).send({ message: error.message });
  }
});

// Route to Delete a single Car in the records
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Car.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({
        message: "Car not found!",
      });
    }

    return response.status(200).send({
      message: "Car Record Successfully Deleted!",
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route to Delete all Cars in the records
router.delete("/", async (request, response) => {
  try {
    const cars = await Car.deleteMany({});
    return response.status(200).json({
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    console.log(`Error when when router due to: ${error}`);
    response.status(500).send({ message: error.message });
  }
});

export default router;
