import React from "react";
import { useNavigate } from "react-router-dom";


// image
import logo from "../../images/logo_pu.png";
import jwt_decode from 'jwt-decode';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const navigate = useNavigate();
    let currentUsername;

    if (localStorage.getItem("Token")) {
        var decoded = jwt_decode(localStorage.getItem("Token"));
        currentUsername = decoded.username
    }

    function handleClick() {
        localStorage.removeItem("Token")

        toast.success('User Logout', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000
        });

        navigate("/", );

        setTimeout(() => {

            window.location.reload(); 
        }, 3000)


    }



    return (
        <nav className="navbar navbar-expand-lg  bg-light sticky-top shadow " id="mainNav">
            <ToastContainer/>
            <div className="container px-4 py-1">

                <a className="m-1" href="/"><img src={logo} alt="" /></a>

                <a className="navbar-brand fw-bold fs-3" style={{ letterSpacing: 2 }} onClick={() => navigate("/")}> <span
                    style={{ color: "#44bb11" }}>Nutri</span>-Fit</a>

                <button className="navbar-toggler border border-white " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse fw-semibold" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" onClick={() => navigate("/search")}>Nutrients</a></li>
                        <li className="nav-item"><a className="nav-link " onClick={() => navigate("/about")} >About</a></li>
                        <li className="nav-item"><a className="nav-link " onClick={() => navigate("/news")} >News</a></li>

                        {localStorage.getItem("Token") ? (
                            <>
                                <li className="nav-item"><a className="nav-link" onClick={() => navigate("/account")}>{currentUsername} |</a>  </li>
                                <li className="nav-item ps-0 "><a className="nav-link" onClick={handleClick}>Logout</a>  </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item"><a className="nav-link" onClick={() => navigate("/login")}>Login |</a>  </li>
                                <li className="nav-item ps-0 "><a className="nav-link" onClick={() => navigate("/register")}>Signup</a>  </li>
                            </>
                        )}


                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;