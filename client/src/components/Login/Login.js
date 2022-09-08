import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../images/login.png";
import "./Login.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    function handleClick() {

        const bearerToken = "Bearer " + localStorage.getItem("Token")

        let options = {
            method: 'POST',
            url: 'http://localhost:9002/list',
            headers: {
                'authorization': bearerToken
            },
            body: user

        }
        // console.log(options)
        axios.post("/login", options)
            .then(res => {
                // alert(res.data.message);


                if (res.data.message === "login Successfull") {
                    // localStorage.Token = res.data.token;
                    localStorage.setItem('Token', res.data.token);
                    console.log("toek is ", res.data.token)

                    toast.success('login Successfull', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000
                    });
                    navigate("/search", { state: { username: user.username } });

                    // setTimeout(() => {

                    //     navigate("/search", { state: { username: user.username } });
                    // }, 2000)


                    // navigate("/search", {state: {username: user.username}});
                }
                else if (res.data.message === "User is Not verified") {
                    toast.error('User is Not verified', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000
                    });
                }
                else {
                    toast.error('Invalid Username / Password', {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 1000
                    });
                }
            });
    }

    return (
        <div className="p-3 mb-2  ">
            {/* <ToastContainer /> */}

            <div className="container">

                <div className="row  py-5 m-2 justify-content-md-center ">
                    <div className="col-sm-8">
                        <div className="row bxshdow rounded-3">
                            <div className="col-sm-6 p-5">
                                <img className="img-fluid" src={login} alt="" />

                            </div>
                            <div className="col-sm-6  d-flex flex-column justify-content-center ">

                                <div className="justify-content-center align-items-center">
                                    <h2 className="fw-bold py-2 m-2 text-center">Login</h2>
                                    <form role="form">
                                        <div className="form-group m-3">
                                            <input type="text" name="username" id="username"
                                                className="form-control input-lg" placeholder="username" onChange={handleChange} value={user.username} />
                                        </div>

                                        <div className="form-group m-3">
                                            <input type="password" name="password" id="password"
                                                className="form-control input-lg" placeholder="Password" onChange={handleChange} value={user.password} />
                                        </div>

                                        <div className="d-flex justify-content-center m-3">
                                            <button type="button" className="btn btn-primary rmdbut rounded-3 grnbtn shadow" onClick={handleClick}> Login </button>
                                        </div>

                                        <div className="text-center">
                                            <p> <a className="blulink" onClick={() => navigate("/forgetpassword")}>Forget Password</a></p>
                                        </div>

                                        <div className="text-center">
                                            <p>New User ? <a className="blulink" onClick={() => navigate("/register")}>Sign Up</a></p>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>

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

export default Login;