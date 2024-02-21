import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  let navigate = useNavigate();

  const user = JSON.parse(sessionStorage.getItem("active-admin"));
  console.log(user);

  const adminLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-admin");
    sessionStorage.removeItem("admin-jwtToken");
    setTimeout(() => {
      navigate("/home");
      window.location.reload(true);
    }, 2000); // Redirect after 3 seconds
  };
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link
          to="/user/admin/register"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-color">Register Admin</b>
        </Link>
      </li>
      {/* Dropdown Menu */}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <b className="text-color">Admin Menu</b>
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          <li>
            <Link to="/category/add" className="dropdown-item">
              Add Category
            </Link>
          </li>
          <li>
            <Link to="/admin/order/all" className="dropdown-item">
              All Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/product/all" className="dropdown-item">
              All Products
            </Link>
          </li>
          <li>
            <Link to="/admin/category/all" className="dropdown-item">
              All Categories
            </Link>
          </li>
          <li>
            <Link to="/admin/seller/all" className="dropdown-item">
              All Sellers
            </Link>
          </li>
          <li>
            <Link to="/admin/delivery-person/all" className="dropdown-item">
              All Deliveries
            </Link>
          </li>
          <li>
            <Link to="/admin/customer/all" className="dropdown-item">
              View Customers
            </Link>
          </li>
        </ul>
      </li>
      {/* End Dropdown Menu */}
      <li className="nav-item">
        <Link
          to=""
          className="nav-link active"
          aria-current="page"
          onClick={adminLogout}
        >
          <b className="text-color">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default AdminHeader;