import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../images/arrow.png";
import call from "../../images/call.png";
import linkedin from "../../images/linkedin.png";
import location from "../../images/location.png";
import mail from "../../images/mail.png";
import intro from "../../images/intro.png";
import whoweare from "../../images/whoweare.png";
import uniqueidea from "../../images/uniqueidea.png";
import basic from "../../images/basicpreve.png";
import timesaving from "../../images/timesaving.png";
import newsimg from "../../images/newsimg.png";
import mayank from "../../images/mayank.jpg";
import suraj from "../../images/suraj.jpg";
import pratik from "../../images/pratik.jpg";
import prajwal from "../../images/prajwal.jpg";
import saurabh from "../../images/saurabh.jpg";



import "./Home.css";


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="p-3 mb-2  ">

            <div className="container">


                {/* <!-- into start --> */}
                <div className="row  py-5 valuecard" style={{ backgroundColor: 'rgba(243, 243, 243, 0.3)' }}>
                    <div className="col-sm-6  d-flex flex-column justify-content-center ">


                        <h1 className="fw-bold py-2 m-2">Web Squad'5' Presents</h1>
                        <h3 className="fw-normal m-2">Want to understand the fundamental of good nutrition & How food Fuels
                            your body then
                            <br />
                            Don't worry, We are here with Nutr-fit
                        </h3>

                        <span className="py-3 m-2"  >
                            <button onClick={() => navigate("/about")} type="button" className="btn btn-primary rmdbut rounded-1 grnbtn shadow ">Read More  </button>
                            <button onClick={() => navigate("/login")} type="button" className="btn btn-primary rmdbut rounded-1 difbtn mx-3 shadow-lg">Get Started </button>
                        </span>


                    </div>
                    <div className="col-sm-6">
                        <img className="img-fluid" src={intro} alt="" />
                    </div>
                </div>
                {/* <!-- intro end --> */}

                <hr className="m-5" />

                {/* <!-- who we are start --> */}
                <div className="row  py-5 valuecard " style={{ backgroundColor: 'rgba(243, 243, 243, 0.3)' }}>
                    <div className="col-sm-6">
                        <img className="img-fluid" src={whoweare} alt="" />
                    </div>
                    <div className="col-sm-5  d-flex flex-column justify-content-center">
                        <h6 className="fw-bold">WHO WE ARE</h6>

                        <h4 className="fw-bold py-2">We are Third year enthusiast Engineering Students having ignited minds
                            creating our first ever site that will help alot of people</h4>
                        <p>Hola peeps ! you are at right place.Nutri-Fit provides you all nutrition facts. from fruits and vegetables to whole grains, understanding different nutritional values helps you make educated nutrition choices</p>

                    </div>
                </div>
                {/* <!-- who we are end --> */}

                <hr className="m-5" />

                {/* try us start */}
                <div className="row  py-5 valuecard " style={{ backgroundColor: 'rgba(243, 243, 243, 0.3)' }}>
                    <div className="col-sm-12  d-flex flex-column justify-content-center text-center">
                        <h6 className="fw-bold">Try Us</h6>

                        <h4 className="fw-bold py-2">Get Nutrishnal value by seraching food</h4>
                        <div className="row">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">
                                Nutri-Fit’s Food Nutrition Calculator allows you to choose from thousands of foods and
                                brands, and see nutrition facts such as calories, fat, protein, carbohydrates, fiber and
                                sugar. Get started by entering your food and.
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

                        <div>
                            <a className="nav-link scrbtn" onClick={() => navigate("/search")}>
                                <div className=" col-md-6 mx-auto ">
                                    <div className="row no-gutters mt-3 align-items-center mx-auto">
                                        <div className="col col-md-10">
                                            <input className="form-control border-secondary rounded-pill pr-5" type="search"
                                                placeholder="search" id="example-search-input2" name="search" />
                                        </div>
                                        <div className="col-auto">
                                            <button className="btn btn-outline-light text-dark border-0 rounded-pill ml-n5 "
                                                type="button" >
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>


                    </div>
                </div>
                {/* try us emd */}

                <hr className="m-5" />

                {/* <!-- our VALUES start --> */}
                <div className="container text-center m-1">
                    <div className="row">
                        <div className="col-md-12 my-4">
                            <h6 className="fw-bold">OUR VALUES</h6>
                            <h3 className="fw-bold">So ! What Problems does it solve and what makes it different ? </h3>
                        </div>
                    </div>


                    {/* <!-- our value card start --> */}
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col ">
                            <div className="card h-100 border-0 shadow valuecard">
                                <img src={basic} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Provides Fundamentals of Good Nutrition</h5>
                                    <p className="card-text">We provides  fundamentals of good nutrition that can help you make smarter decisions and build meals that nourish your day..</p>
                                </div>
                            </div>
                        </div>

                        <div className="col ">
                            <div className="card h-100 border-0 shadow valuecard">

                                <div className="card-body">
                                    <img src={timesaving} className="card-img-top p-3" alt="..." />
                                    <h5 className="card-title">Time saving</h5>
                                    <p className="card-text">Technology has evolved so far inorder to solve this problem so does this site does .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card h-100 border-0 shadow valuecard">

                                <div className="card-body">
                                    <img src={newsimg} className="card-img-top" alt="..." />
                                    <h5 className="card-title">All Health News at One Place</h5>
                                    <p className="card-text">No need to scroll on different websites for health news , we provide evidence based news at one place</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- our value card end --> */}

                </div>
                {/* <!-- our value end --> */}

                <hr className="m-5" />

                <div>
                    {/* team */}
                    {/* <!-- our VALUES start --> */}
                    <div className="container text-center m-1">
                        <div className="row">
                            <div className="col-md-12 my-4">
                                <h6 className="fw-bold">TEAM</h6>
                                <h3 className="fw-bold">Our hard working team </h3>
                            </div>
                        </div>


                        {/* <!-- our value card start --> */}
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            <div className="col ">
                                <div className="card h-100 border-0 shadow valuecard">

                                    <div className="card-body">
                                        <img src={mayank} className="card-img-top mb-2" alt="..." />
                                        <h5 className="card-title">Mayank Ashtekar</h5>
                                        <p className="card-text">Frontend | Content </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col ">
                                <div className="card h-100 border-0 shadow valuecard">

                                    <div className="card-body">
                                        <img src={suraj} className="card-img-top mb-2" alt="..." />
                                        <h5 className="card-title">Suraj Dhanorkar</h5>
                                        <p className="card-text">Backend</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col ">
                                <div className="card h-100 border-0 shadow valuecard">

                                    <div className="card-body">
                                        <img src={pratik} className="card-img-top mb-2" alt="..." />
                                        <h5 className="card-title">Pratik Dibbe</h5>
                                        <p className="card-text">Backend</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col ">
                                <div className="card h-100 border-0 shadow valuecard">

                                    <div className="card-body">
                                        <img src={prajwal} className="card-img-top mb-2" alt="..." />
                                        <h5 className="card-title">Prajwal Shette</h5>
                                        <p className="card-text">Frontend</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col ">
                                <div className="card h-100 border-0 shadow valuecard">

                                    <div className="card-body">
                                        <img src={saurabh} className="card-img-top mb-2" alt="..." />
                                        <h5 className="card-title">Saurabh Khadsang</h5>
                                        <p className="card-text">Frontend | Backend</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!-- our value card end --> */}

                    </div>
                    {/* <!-- our value end --> */}

                    <hr className="m-5" />
                </div>



                {/* <!-- Contact start --> */}
                <div className="container mb-1">

                    <div className="text-center ">
                        <div className="row">
                            <div className="col-md-12 m2-4">
                                <h6 className="fw-bold">CONTACT</h6>
                                <h1 className="fw-bold">Contact Us</h1>
                            </div>
                        </div>
                    </div>


                    {/* <!-- Contact Card Start --> */}

                    <div className="row row-cols-1 row-cols-md-4 mb-3 text-center">

                        <div className="col">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img src={location} className="my-3" alt="" />
                                    <h5 className="card-title fw-bold">Address</h5>
                                    <p className="card-text">................ <br /> ........................................
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img src={call} className="my-3" alt="" />
                                    <h5 className="card-title fw-bold">Call Us</h5>
                                    <p className="card-text">+91 1234567890 <br /> +91 0987654321 </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img src={mail} className="my-3" alt="" />
                                    <h5 className="card-title fw-bold">Email Us</h5>
                                    <p className="card-text">help@nutrifit.com<br /> nutrifithelp@nutrifit.com </p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card border-0">
                                <div className="card-body">
                                    <img src={linkedin} className="my-3" alt="" />
                                    <h5 className="card-title fw-bold">LinkedIn</h5>
                                    <p className="card-text">................ <br /> ........................................
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* <!-- Contact Start end --> */}
                </div>
                {/* <!-- Contact end --> */}


                {/* <!-- footer start --> */}
                <div className="container">
                    <div className="text-center mt-5 ">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Web Squad'5'</span></strong>. All Rights Reserved | <a className="blulink" onClick={() => navigate("/help")}>Help</a>
                        </div>
                    </div>
                </div>
                {/* <!-- footer end --> */}


            </div>

        </div>
    );
}

export default Home;