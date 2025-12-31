import React, { useState } from "react";
import axios from "axios";
import User from "./components/User";
import { useEffect } from "react";

function App() {
  const [alldata, setalldata] = useState([]);
  async function getdata() {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users");

    setalldata(res.data);
   
  }
  useEffect(()=>{
    getdata()
  },[])
  
  return (
    <div>
      {/* <button onClick={getdata} > get data</button> */}

      <div className="all-cards">
        {alldata.map((ele, idx) => {
          return (
            <div key={idx}>
              <User ele={ele} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
