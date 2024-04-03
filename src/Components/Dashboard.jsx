import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { API_URL } from "../App";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  const getData = async () => {
    try {
      let res = await axios(API_URL);
      // console.log(res.data)
      if (res.status === 200) {
        //toast.success('Data geting Sucessfull')
        setData(res.data);
      }
    } catch (error) {
      toast.error("Internal server Error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let res = await axios.delete(`${API_URL}/${id}`);
      if (res.status === 200) {
        toast.warn("Data Deleted");
        getData();
      }
    } catch (error) {
      toast.error("Internal server Error");
    }
  };

  return (
    <>
      <div className="container">
        <NavBar />

        <Table
          striped
          bordered
          hover
          className="p-3"
          style={{ border: "1px solid black" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Mobile Number</th>
              <th>Website</th>
              <th>Company Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td style={{ width: "auto" }}>{e.username}</td>
                  <td style={{ width: "auto" }}>{e.email}</td>
                  <td style={{ width: "auto" }}>{e.address}</td>
                  <td style={{ width: "auto" }}>{e.mobile}</td>
                  <td style={{ width: "auto" }}>{e.website}</td>
                  <td style={{ width: "auto" }}>{e.company}</td>

                  <td>
                    <div
                      className="d-flex p-1"
                      style={{ justifyContent: "space-between" }}
                    >
                      <Button
                        variant="primary"
                        onClick={() => {
                          navigate(`/edit/${e.id}`);
                        }}
                      >
                        Edit
                      </Button>
                      {/* &nbsp; */}
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleDelete(e.id);
                        }}
                      >
                        Delete{" "}
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Dashboard;
