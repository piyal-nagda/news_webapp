const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-lightblue" data-bs-theme="dark">
      <style>
        {`
          .navbar-light .navbar-nav .nav-link {
            color: #000; 
          }

          .navbar-light .navbar-nav .nav-link:hover {
            color: #000;
            background-color: #a6e4e7 
          }
        `}
      </style>
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NEWSapp</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link btn btn-lightblue text-black me-2" onClick={() => setCategory("technology")}>Technology</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-lightblue text-black me-2" onClick={() => setCategory("business")}>Business</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-lightblue text-black me-2" onClick={() => setCategory("health")}>Health</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-lightblue text-black me-2" onClick={() => setCategory("sports")}>Sports</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-lightblue text-black me-2" onClick={() => setCategory("science")}>Science</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-lightblue text-black me-2" onClick={() => setCategory("entertainment")}>Entertainment</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
