import { Link } from "react-router-dom" ;

 const Footer = () => { 
  const backgroundColorValue = '#fcf4f5' ;
  return ( 
    <div class="whole" style={{ backgroundColor: backgroundColorValue }} >
       <div class="container my-5">
        <footer class="text-center text-lg-start text-color" >
           <div class="container-fluid p-4 pb-0">
          <hr class="mb-4" />
            <section class="" >
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color">Online Pet Shop</h5>
                  <p>
                    Welcome to Our Online Pet Haven! Discover joy, love, and a
                    tail-wagging paradise for your furry friends. Dive in now!
                  </p>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Page Link</h5>
                  <ul class="list-unstyled mb-0">
                  <li>
                      <Link to="/" className="text-color">
                        HomePage
                      </Link>
                    </li>
                  <li>
                      <Link to="/aboutus" className="text-color">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/contactus" className="text-color">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <hr class="mb-4" />
           </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer ;