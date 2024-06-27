import { useEffect } from "react";
import vehiclesStore from "../stores/vehiclesStore";
import Vehicles from "../components/Vehicles";
import UpdateForm from "../components/UpdateForm";
import CreateForm from "../components/CreateForm";
import NavigationBar from '../components/NavigationBar/Navigation';


export default function VehiclesPage(){
    const store = vehiclesStore();

    // Use effect
    useEffect(() => {
    store.fetchVehicles();
    }, []);

    return(
        <div>
            <Vehicles/>
            <UpdateForm/>
            <CreateForm/>
        </div>
    );
}