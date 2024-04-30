import { useEffect, useState } from "react";
import axios from "axios";

function Userlogin() {
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [contect, setcontect] = useState();

  const btnhand = () => {
    axios
      .post("http://localhost:2000/insert", {
        name: name,
        email: email,
        password: password,
        contect: contect
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <>
      <div className="main d-flex align-items-center justify-content-center">
        <div className="main-2 p-5">
          <div className="mtb mb-4">
            <h5>Name:</h5>
            <input type="text" onChange={(e) => setname(e.target.value)} />
          </div>
          <div className="mtb mb-4">
            <h5>Email:</h5>
            <input type="email" onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="mtb">
            <h5>Password:</h5>
            <input
              type="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="mtb mb-4">
            <h5>Contect:</h5>
            <input type="text" onChange={(e) => setcontect(e.target.value)} />
          </div>
          <div className="mtb2">
            <input type="button" value="Submit" onClick={btnhand} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlogin;
