import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import logo from '../../images/icon.jpg'
import axios from 'axios'

export default function VehicleDeatils() {
    const [vehicle,setVehicle] = useState(null)
    const [image,setImage] = useState(logo)

    const {id} = useParams();

    useEffect(()=>{
        if(id){
           
            fetchVehicle(id)
        }
    },[id])

    const fetchVehicle = async (id)=>{
        try{
            const response = await axios.get(`http://localhost:3000/vehicles/${id}`)
            console.log(response.data)
            setImage(response.data.image.url);
            setVehicle(response.data.vehicle)

        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div>
      {vehicle && <div>
        
            <h1>
                Title : {vehicle.title}
            </h1>
            <h1>
                Body : {vehicle.body}
            </h1>

            <img src = {image}/>
                
        </div>
        }
    </div>
  )
}
