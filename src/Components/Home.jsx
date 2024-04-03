import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import { API_URL } from "../App";
import { toast } from "react-toastify";
import Datacard from "../Common/Datacard";
import CardGroup from "react-bootstrap/CardGroup";

function Home() {
  let [data, setData] = useState([]);

  const getData = async () => {
    try {
      let res = await axios.get(API_URL);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      toast.error("Internal server Error");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <NavBar />
      <div className="container" style={{border:"1px solid black"}}>
        <h1>Total Number of Display Details:{data.length}</h1>
        <CardGroup>
          {data.map((e, i) => {
            return (
              <Datacard
                username={e.username}
                email={e.email}
                address={e.address}
                mobile={e.mobile}
                website={e.website}
                company={e.company}
                key={i}
              />
            );
          })}
        </CardGroup>
      </div>
    </div>
  );
}

export default Home;
