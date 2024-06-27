import React, { useState } from 'react';
import vehiclesStore from "../stores/vehiclesStore";

export default function Vehicle({ vehicle }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const store = vehiclesStore((store) => ({
    deleteVehicle: store.deleteVehicle,
    toggleUpdate: store.toggleUpdate,
    uploadImage: store.uploadImage,
  }));

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      store.uploadImage(vehicle._id, formData).then(() => {
        alert('Image uploaded successfully!');
        setSelectedFile(null); // Clear the file input after upload
      }).catch((error) => {
        console.error('Error uploading image:', error);
      });
    } else {
      alert('Please select a file first.');
    }
  };

  const handleDeleteVehicle = () => {
    console.log(`Deleting vehicle with ID: ${vehicle._id}`); // Debug log
    store.deleteVehicle(vehicle._id);

  };

  return (
    <div key={vehicle._id}>
      <h3>{vehicle.title}</h3>
      <h4>{vehicle.body}</h4>
      <div className='vehicle-image'>
          {vehicle.image &&  <img src = {vehicle.image.url}/>}
          </div>
      <button onClick={handleDeleteVehicle}>Delete</button>
      <button onClick={() => store.toggleUpdate(vehicle)}>Update</button>
    </div>
  );
}
