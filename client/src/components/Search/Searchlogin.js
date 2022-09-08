import React from "react";
import { useNavigate } from "react-router-dom";


const Searchlogin = () => {
    const navigate = useNavigate();
    return (
        <div className="p-3 mb-2  ">

            <div className="container">

                {/* <h2 className="text-center" >Please <a onClick={() => navigate("/Searchlogin")}> Login </a> First</h2> */}

                <div className="text-center m-5">
                    <h3>Please <a className="blulink" onClick={() => navigate("/login")}>Login </a> First </h3>
                </div>



            </div>

        </div>
    );
}

export default Searchlogin;