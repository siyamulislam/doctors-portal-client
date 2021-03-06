import React from 'react';

const Navbar = (props) => {
    const headerMain = props.headerMain;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto pr-5">
                        <li className="nav-item active">
                            <a className="nav-link mr-5" href="/#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5" href="/#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5" href="/#">Dental Services</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mr-5 ${headerMain ? "text-white" : ""}`} href="/#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mr-5 ${headerMain ? "text-white" : ""} `} href="/#">Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link mr-5 ${headerMain ? "text-white" : ""} `} href="/#">Contact Us</a>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;