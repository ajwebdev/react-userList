import React, { useEffect, useState } from "react";
import axios from "axios";
import * as R from "ramda";
const UserDetails = (props) => {
  const [userData, setUserData] = useState([]);
  const baseURL ="https://api.github.com/"
  useEffect(() => {
    axios
      .get(`${baseURL}"/users"`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(userData);
  const userList = userData.map((user, index) => {
    return (
      <div className="col-md-6" key={index} style={{ paddingBottom: "50px" }}>
        <div class="card text-white grey-light " style={{ width: "30rem" }}>
          <h5 class="card-header">{R.pathOr("John Crews", ["login"], user)}</h5>
          <div class="card-body">
            <img    
              src={R.pathOr(
                "https://avatars.githubusercontent.com/u/1?v=4",
                ["avatar_url"],
                user
              )}
              style={{ width: "30%" }}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  });
  return <>{userList}</>;
};
export default UserDetails;
