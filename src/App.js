import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Movflix - Your Movie App</h1>
        </div>
        <div className="col text-end">
          <a href="#!"><span className="badge bg-success">Login</span></a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <a href="#!" className="list-group-item list-group-item-action">Home</a>
              <a href="#!" className="list-group-item list-group-item-action">Movies</a>
              <a href="#!" className="list-group-item list-group-item-action">Genres</a>
              <a href="#!" className="list-group-item list-group-item-action">Add a movie</a>
              <a href="#!" className="list-group-item list-group-item-action">Manage Movie List</a>
              <a href="#!" className="list-group-item list-group-item-action">GraphQL</a>
            </div>
          </nav>
        </div>
      </div>
      <div className="col-md-10">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
