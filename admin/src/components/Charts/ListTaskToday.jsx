import React, { useState, useEffect, useContext } from "react";
import TableUser from "../../components/table/table-custom/TableUser";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function ListTaskToday() {
  const { user: currentUser } = useContext(AuthContext);
  const [user, setUser] = useState(currentUser);
  const [dataReceipt, setDataReceipt] = useState([]);

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    const fetchReceipt = async () => {
      try {
        const data = {
          Start: currentDate,
          End: currentDate,
          Staff_Name: user.Name,
        };
        const res = await axios.post(
          "http://localhost:8800/api/receipt/staff-current-day",
          data
        );
        setDataReceipt(res.data.value);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReceipt();
  }, [user.Name]);

  const columnReceipt = [
    {
      field: "Name_Customer",
      headerName: "Name",
      width: 120,
    },
    {
      field: "Telephone",
      headerName: "Telephone",
      width: 100,
    },
    {
      field: "Email",
      headerName: "Email",
      width: 180,
    },
    {
      field: "Staff_Name",
      headerName: "Staff",
      width: 100,
    },
    // {
    //     field: "namePet",
    //     headerName: "Pet",
    //     width: 100,
    // },
    {
      field: "Services",
      headerName: "Services",
      width: 250,
    },
    {
      field: "SumPrice",
      headerName: "Sum Price",
      width: 90,
    },
    {
      field: "Discount",
      headerName: "Discount",
      width: 70,
    },
    {
      field: "Total",
      headerName: "Total",
      width: 90,
    },
  ];

  return (
    <>
      {dataReceipt.length > 0 ? (
        <TableUser
          column={columnReceipt}
          row={dataReceipt}
          rowId={""}
          setRowId={() => {}}
        />
      ) : (
        <div className="check-table">
          You haven't served any customers today
        </div>
      )}
    </>
  );
}
