import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCarTicket from "./pages/CreateCarTicket";
import DeleteCarTicket from "./pages/DeleteCarTicket";
import EditCarTicket from "./pages/EditCarTicket";
import ShowCarTicket from "./pages/ShowCarTicket";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cars/create' element={<CreateCarTicket />} />
      <Route path='/cars/details/:id' element={<ShowCarTicket />} />
      <Route path='/cars/edit/:id' element={<EditCarTicket />} />
      <Route path='/cars/delete/:id' element={<DeleteCarTicket />} />
    </Routes>
  );
};

export default App;
