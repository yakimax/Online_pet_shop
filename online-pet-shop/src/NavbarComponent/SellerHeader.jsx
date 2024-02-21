import { Link, useNavigate } from "react-router-dom" ;
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-seller"));
  console.log(user);

  const sellerLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-seller");
    sessionStorage.removeItem("seller-jwtToken");
    setTimeout(() => {
      navigate("/home");
      window.location.reload(true);
    }, 2000); // Redirect after 3 seconds
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b className="text-color">Seller Menu</b>
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <Link
              to="/seller/order/all"
              className="dropdown-item"
              aria-current="page"
            >
              Seller Orders
            </Link>
          </li>
          <li>
            <Link
              to="/seller/delivery/register"
              className="dropdown-item"
              aria-current="page"
            >
              Register Delivery
            </Link>
          </li>
          <li>
            <Link
              to="/seller/delivery-person/all"
              className="dropdown-item"
              aria-current="page"
            >
              View Delivery Persons
            </Link>
          </li>
          <li>
            <Link
              to="/product/add"
              className="dropdown-item"
              aria-current="page"
            >
              Add Product
            </Link>
          </li>
          <li>
            <Link
              to="/seller/product/all"
              className="dropdown-item"
              aria-current="page"
            >
              View My Products
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link
          to=""
          className="nav-link active"
          aria-current="page"
          onClick={sellerLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default SellerHeader;