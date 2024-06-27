import vehiclesStore from "../stores/vehiclesStore";
import Vehicle from "./Vehicle";

export default function Vehicles() {
    const store = vehiclesStore();
  
    return (
      <div>
        <h2>Vehicles:</h2>
        {store.vehicles &&
          store.vehicles.map((vehicle) => {
            return <Vehicle vehicle={vehicle} key={vehicle._id} />;
          })}
      </div>
    );
  }