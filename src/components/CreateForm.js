import React from 'react';
import vehiclesStore from "../stores/vehiclesStore";
import './CreateForm.css'; // Assuming you have a CSS file for styling
import { useEffect,useState } from 'react';
import axios from 'axios';
import logo from '../images/icon.jpg'
export default function CreateForm() {
  const [uploading, setUploading] = useState(false);
  const [upload, setUpload] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(logo);
  const store = vehiclesStore();

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file)
    setFileToBase(file);
    setUpload(true);
  }

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }

  }

  const handleUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
    try {
      const res = await axios.post(`http://localhost:3000/vehicles`, {title,body, image});
      const data = await res.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    finally {
      setUploading(false);
      setBody("")
      setImage("")
      setTitle("")
    }
  };

  const cancel = (e)=>{
    e.preventDefault();
    setImage(logo);
    setBody("")
    setTitle("");

  }

  // useEffect(() => {
  //   if (!upload) return;
  //   uploadImage(image);
  //   setUpload(false);
  // }
  //   , [image])

  if (store.updateForm._id) return <></>;

  return (
    <div className="create-form-wrapper">
      <h2>Create Vehicle</h2>
      <form onSubmit={store.createVehicle}>
        <input
          className="input-field"
          onChange={(e)=> setTitle(e.target.value)}
          value={title}
          name="title"
          placeholder="Vehicle Model"
          type="text"
        />
        <textarea
          className="textarea-field"
          onChange={(e)=> setBody(e.target.value)}
          value={body}
          name="body"
          placeholder="Vehicle Price "
        />
        {/* <input
          className="file-input"
          onChange={store.updateCreateFormField}
          name="image"
          type="file"
          accept="image/*"
        /> */}
          <div className="relative overflow-hidden">
              <input onChange={handleImage} type="file" id="formupload" name="image" />
              <label htmlFor="formupload">
                <img
                  src={image}
              
                  alt="vehicle image"
                  className="shadow-xl rounded-full align-middle border-none object-cover w-32 h-32 cursor-pointer"
                />
              </label>

            </div>
          <div>
          <button className="submit-button" type="submit" onClick={handleUpload}>
          Create Vehicle
        </button>
        <button className="submit-button"  onClick={cancel}>
          Cancel
        </button>
        </div>
       
          
  
      </form>
    </div>
  );
}
