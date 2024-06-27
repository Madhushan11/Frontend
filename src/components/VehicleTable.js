import React from 'react';
import MUIDataTable from 'mui-datatables';

const VehicleTable = ({ vehicles, deleteVehicle, toggleUpdate, handleFileUpload, setSelectedFile }) => {
  const columns = [
    {
      name: "title",
      label: "Vehicle Model",
      options: {
        setCellProps: () => ({ style: { textAlign: 'center' } }),
      },
    },
    {
      name: "body",
      label: "Price",
      options: {
        setCellProps: () => ({ style: { textAlign: 'center' } }),
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value, tableMeta) => {
          const vehicle = vehicles[tableMeta.rowIndex];
          return (
            <div className="action-buttons">
              <button onClick={() => deleteVehicle(vehicle._id)}>Delete</button>
              <button onClick={() => toggleUpdate(vehicle)}>Update</button>
              <input type="file" onChange={(e) => handleFileUpload(vehicle._id, e)} />
            </div>
          );
        },
        setCellProps: () => ({ style: { textAlign: 'center' } }),
      },
    },
  ];

  const options = {
    selectableRows: 'none', // Hide the checkbox column
    responsive: 'standard', // 'standard', 'scrollMaxHeight', 'scrollFullHeight'
    tableBodyMaxHeight: '60vh',
    tableBodyHeight: 'auto',
    setTableProps: () => {
      return {
        style: {
          textAlign: 'center',
        },
      };
    },
  };

  return (
    <MUIDataTable
      title={"Vehicle List"}
      data={vehicles}
      columns={columns}
      options={options}
    />
  );
};

export default VehicleTable;
