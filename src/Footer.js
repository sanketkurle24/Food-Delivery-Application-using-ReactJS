import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
        <p className='h1'>MERN TEA</p>
        <br/>
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Report Fraud</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Investors Relations</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Code of Conduct</a>
                    </li>
                    <li>
                      <a href="#">Tea Bloggers</a>
                    </li>
                    <li>
                      <a href="#">Mobile Apps</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>For Shops</h2>
                  <ul>
                    <li>
                      <a href="#">Add Tea Shop</a>
                    </li>
                    
                  </ul>
                  <h2>For Enterprises</h2>
                  <ul>
                    <li>
                      <a href="#">MERN TEA for work</a>
                    </li>
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <img src="https://img.icons8.com/fluency/40/000000/facebook-new.png"/>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="#">
                        <img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <img src="https://img.icons8.com/color/40/000000/youtube-play.png"/>
                    </div>
                    <div className="col-3 mx-auto">
                    <img src="https://img.icons8.com/color/40/000000/twitter--v1.png"/>
                    </div>
                  </div>
                  <br/>
                  <h2>Download App</h2>
                  <div className="col">
                    <div className="col-3 mx-auto">
                      <img src="https://img.icons8.com/color/40/000000/google-play.png"/>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="#">
                        <img src="https://img.icons8.com/color/40/000000/apple-app-store--v3.png"/>
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="h5 text-center ">
                  Copyright @ 2021 MERN TEA. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
