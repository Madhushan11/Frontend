import vehiclesStore from "../stores/vehiclesStore";

export default function UpdateForm() {
    const store = vehiclesStore();
  
    if (!store.updateForm._id) return <></>;
  
    return (
      <div>
        <h2>Update vehicle</h2>
        <form onSubmit={store.updateVehicle}>
          <input
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.title}
            name="title"
          />
          <textarea
            onChange={store.handleUpdateFieldChange}
            value={store.updateForm.body}
            name="body"
          />
          <button type="submit">Update vehicle</button>
        </form>
      </div>
    );
  }