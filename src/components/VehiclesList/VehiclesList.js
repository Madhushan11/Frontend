import React, { useEffect, useState } from 'react';
import useVehiclesStore from '../../stores/vehiclesStore';
import SendVehicle from '../SendVehicle';
import "./VehiclesList.css";

const VehiclesList = () => {
  const store = useVehiclesStore();
  const [showBook,setShowBook] = useState(false);
  const [vehicle,setVehicle] = useState(null);
  useEffect(() => {
    store.fetchVehicles();
  }, [store]);

  // Check if store.vehicles is null or undefined
  if (!store.vehicles) {
    return <div>Loading...</div>;
  }

  const handleBook = (vehicle)=>{
    console.log("veh",vehicle)
    setVehicle(vehicle)

    setShowBook(true);
  }

  if(showBook){
    return <SendVehicle vehicle = {vehicle}/>
  }

  return (
    <div>
      <h2>Vehicles List</h2>
      {store.vehicles.map((vehicle) => (
        <div key={vehicle._id} style={styles.vehicleContainer}>
          <div style={styles.vehicleBlock}>
            <h3>{vehicle.title}</h3>
          </div>
          <div style={styles.vehicleBlock}>
            <p>{vehicle.body}</p>
          </div>
          <div className='vehicle-image'>
          {vehicle.image &&  <img src = {vehicle.image.url}/>}
          </div>
          <hr /> 
          <button onClick={()=>handleBook(vehicle)}>Book</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  vehicleContainer: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  vehicleBlock: {
    marginBottom: '10px',
  },
};

export default VehiclesList;
