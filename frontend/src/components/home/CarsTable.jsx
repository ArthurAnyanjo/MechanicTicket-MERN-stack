import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import {  MdOutlineDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const CarsTable = ({ cars }) => {
  return (
    <table className="w-full border-seperate border-spacing-2">
    <thead>
      <tr>
        <th className="'border border-slate-600 rounded-md">ID</th>
        <th className="'border border-slate-600 rounded-md">Owner Name</th>
        <th className="'border border-slate-600 rounded-md max-md:hidden">
          Car Brand
        </th>
        <th className="'border border-slate-600 rounded-md">
          Number Plate
        </th>
        <th className="'border border-slate-600 rounded-md">
          Description
        </th>
        <th className="'border border-slate-600 rounded-md">
          Fixed
        </th>
      </tr>
    </thead>
    <tbody>
  {cars.map((car, index) => (
    <tr key={car._id} className='h-8'>
      <td className='border border-slate-700 rounded-md text-center'>
        {index + 1}
      </td>
      <td className='border border-slate-700 rounded-md text-center'>
        {car.ownerName}
      </td>
      <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
        {car.carBrand}
      </td>
      <td className='border border-slate-700 rounded-md text-center'>
        {car.numberPlate}
      </td>
      <td className='border border-slate-700 rounded-md text-center'>
        {car.description}
      </td>
      <td className='border border-slate-700 rounded-md text-center'>
        {car.fixed ? <TiTick className="mx-auto" />  : <ImCross className="mx-auto"  /> }
      </td>
      <td className='border border-slate-700 rounded-md text-center'>
        <div className='flex justify-center gap-x-4'>
          <Link to={`/cars/details/${car._id}`}>
            <BsInfoCircle className='text-2xl text-green-800' />
          </Link>
          <Link to={`/cars/edit/${car._id}`}>
            <AiOutlineEdit className='text-2xl text-yellow-600' />
          </Link>
          <Link to={`/cars/delete/${car._id}`}>
            <MdOutlineDelete className='text-2xl text-red-600' />
          </Link>
        </div>
      </td>
    </tr>
  ))}
</tbody>
  </table>
  )
}

export default CarsTable