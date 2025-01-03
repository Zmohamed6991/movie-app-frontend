import { useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { Alert } from "react-router-dom";

function App() {

  const [jwt, setJwt] = useState("")
  const [alertMessage, setAlertMessage] = useState("");
  const [alertClassName, setAlertClassName] = useState("d-none");

  const logOut = () => {
    setJwt("");
    Navigate("/login");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-5">Movflix - Your Movie App</h1>
        </div>
        <div className="col text-end">
          {jwt === ""
            ? <Link to="/Login"><span className="badge bg-success">Login</span></Link>
            : <a href="#!" className="badge bg-danger">Logout</a>
          }
        </div>
      <hr className="mb-3"></hr>
      </div>

      <div className="">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to="/movies" className="list-group-item list-group-item-action">Movies</Link>
              <Link to="/genres" className="list-group-item list-group-item-action">Genres</Link>

              {jwt !== "" &&
              <>
              <Link to="/admin/movie/0" className="list-group-item list-group-item-action">Add a movie</Link>
              <Link to="/admin" className="list-group-item list-group-item-action">Manage Movie List</Link>
              <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
              </>
              }
            </div>
          </nav>
        </div>
      </div>
      <div className="col-md-10">
        <Alert className={alertClassName} message={alertMessage}
        />
        <Outlet context ={{
          jwt, setJwt,
          setAlertMessage,
          setAlertClassName,
        }}/>
      </div>
    </div>
  );
}

export default App;
