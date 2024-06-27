import {create} from "zustand";
import axios from "axios";

const vehiclesStore = create((set) => ({
    vehicles: null,
    createForm: {
      title: "",
      body: "",
    },
    updateForm: {
        _id: null,
        title: "",
        body: "",
      },

fetchVehicles: async () => {
    // Fetch the vehicles
    const res = await axios.get("/vehicles");
    
    // Set to state
    set({ vehicles: res.data.vehicles });
    },
    
updateCreateFormField: (e) => {
    const { name, value } = e.target;
    
    set((state) => {
        return {
        createForm: {
        ...state.createForm,
        [name]: value,
        },
    };
    });
    },

createVehicle: async (e) => {
    e.preventDefault();
    
    const { createForm, vehicles } = vehiclesStore.getState();
    const res = await axios.post("/vehicles", createForm);
    
    set({
        vehicles: [...vehicles, res.data.vehicle],
        createForm: {
        title: "",
        body: "",
        },
    });
    },    
deleteVehicle: async (_id) => {
    // Delete the vehicle
    const res = await axios.delete(`/vehicles/${_id}`);
    const { vehicles } = vehiclesStore.getState();
    
    // Update state
    const newVehicles = vehicles.filter((vehicle) => {
        return vehicle._id !== _id;
    });
    
        set({ vehicles: newVehicles });
    },
handleUpdateFieldChange: (e) => {
    const { value, name } = e.target;
    
    set((state) => {
        return {
            updateForm: {
              ...state.updateForm,
              [name]: value,
            },
          };
        });
      },
    
toggleUpdate: ({ _id, title, body }) => {
    set({
        updateForm: {
        title,
        body,
        _id,
        },
    });
    },
    
updateVehicle: async (e) => {
    e.preventDefault();
    
    const {
        updateForm: { title, body, _id },
        vehicles,
    } = vehiclesStore.getState();
    
    // Send the update request
    const res = await axios.put(`/vehicles/${_id}`, {
        title,
        body,
    });        
 // Update state
 const newVehicles = [...vehicles];
 const vehicleIndex = vehicles.findIndex((vehicle) => {
   return vehicle._id === _id;
 });
 newVehicles[vehicleIndex] = res.data.vehicle;

 set({
    vehicles: newVehicles,
    updateForm: {
     _id: null,
     title: "",
     body: "",
   },
 });
},

uploadImage: async (id, formData) => {
    try {
      const res = await axios.post(`/vehicles/${id}/upload-image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Update state if necessary
      const { vehicles } = vehiclesStore.getState();
      const updatedVehicle = res.data.vehicle;
      const newVehicles = vehicles.map((vehicle) =>
        vehicle._id === id ? updatedVehicle : vehicle
      );

      set({ vehicles: newVehicles });
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  },

}));

export default vehiclesStore;    