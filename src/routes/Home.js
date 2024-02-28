import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="box">
            <h1>Home</h1>
            <Link to="/registry">Click to head to registry</Link>
        </div>
    )
}

export default Home;