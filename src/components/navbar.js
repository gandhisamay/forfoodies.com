import React from 'react';
import '../Styles/app.css';
import cooking from  '../Images/cooking.png';


const Navbar = ()=>{



    return (
        <div className="navbar">
            <div className="icon">
                <img src={cooking} alt=""/>
            </div>
            <div className="title">
                ForFoodies.com
            </div>
        </div>

    );
}

export default Navbar;