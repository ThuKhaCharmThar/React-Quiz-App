import "./Navbar.scss";
const Navbars = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <h1 class="navbar-brand text-light mt-2">
        <span className="colorful-text">EREN's QUIZZ</span>
      </h1>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active Navw">
            <a class="text-light " href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Home
            </a>
          </li>
          <li class="nav-item active Navww mx-5">
            <a class="text-light " href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbars;
