import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import carRouter from "./routes/carsRoutes.js";
import cors from "cors";

const app = express();


app.use(express.json());


//Middleware for handling CORS POLICY
app.use(cors({
  origin: true
}));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Hello from the MERN STACK");
});


app.use("/cars", carRouter);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App is successfully connected");
    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database Connected failed due to: " + error);
  });
