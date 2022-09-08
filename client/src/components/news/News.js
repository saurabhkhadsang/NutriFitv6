
import axios from "axios";
import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

const News = () => {
    const navigate = useNavigate();

    const [users, setUsers] = useState([])

    const fetchData = () => {
        axios({
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: { q: 'Health', lang: 'en', sort_by: 'relevancy', page: '1' },
            headers: {
                'x-api-key': 'nTkmNWIQIiXT-tTnx2q6RcXHkhGpqe5dMscsmRo0EJw'
            }
            // configuration
        })
            .then(response => {
                // console.log(response.data)

                setUsers(response.data.articles)
                // do something with JSON response data
            })
    }


    useEffect(() => {
        fetchData()
    }, [])

    return (

        <>

            <div className="p-3 mb-2  ">

                <div className="container">

                    <div>
                        <h1 className="text-center m-3" >News</h1>


                        {users.map(user => (

                            <div key={user._id}>

                                <div className="my-3 aboutjust" style={{ backgroundColor: 'rgba(228, 227, 227, 0.3)' }}>

                                    <div className="p-4">

                                        <h5 className="fw-bold mb-4" >{user.title}</h5>
                                        <h6>{user.author} : {user.published_date} </h6>


                                        <p className="aboutjust">{user.summary}</p>

                                    </div>
                                </div>


                            </div>


                            // <li >{user.title}</li>
                        ))}







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

        </>


        // <div>
        //     <div>
        //         <h3>googel</h3>
        //     </div>
        //     {users.map(user => (
        //         <li >{user.title}</li>
        //     ))}
        // </div>
    )
}

export default News
