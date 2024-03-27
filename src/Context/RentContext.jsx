import {ethers} from 'ethers';
import React, {useContext, useEffect, useState} from 'react';

import ABI from "./CarRenting.json";

const Address = "0xB5FC52E3C8702d097C2cdea1F4305743BCad3040"; 

const RPC = 'https://sepolia.infura.io/v3/0a34a7e280ec4361bc97c6f447f0bd4a';
const provider = new ethers.providers.JsonRpcProvider(RPC);
const privateKey = '53db71af4e639f49519016fee93c96c9c3e241d5ea53d40c42edf8b7b7fc5d79'
const wallet = new ethers.Wallet(privateKey, provider);

const contract = new ethers.Contract(Address, ABI, wallet);

export const RentContext = React.createContext();

export const  RentProvider = ({children}) => {
    const [cars, setCars] = useState([]);

    const getAllCar = async () => {
        try{
            const car = await contract.getAllCarsDetails();
            setCars(car);
            console.log(car);
            return car;
        }
        catch(err){
            console.log(err);
        }

    }

    const addCar = async (_model, _rentalFee) => {
        try{
            await contract.addCar(_model, _rentalFee);
        }
        catch (err){
            console.log(err);
        }
    }

    const modifyCarDetails = async (_carId, _newModel, _newRentalFee) => {
        try {
            // await contract.methods.updateCarDetails(_carId, _newModel, _newRentalFee).send({ from: address });
            await contract.updateCarDetails(_carId, _newModel, _newRentalFee);
            await getAllCar();
          } catch (error) {
            console.error("Error updating car details:", error);
            throw new Error('Failed to update car details. Please try again.');
          }
    }

    const rentCar = async (_carId, _rentalDuration, _renterName) => {
        try {
          await contract.rentCar(_carId, _rentalDuration, _renterName);
          console.log('Car rented successfully');
        } catch (error) {
          console.error("Error renting car:", error);
          throw new Error('Failed to rent car. Please try again.');
        }
      };


    return (
        <RentContext.Provider value={{cars,getAllCar,addCar,modifyCarDetails,rentCar}}>
            {children}
        </RentContext.Provider>
    )
}