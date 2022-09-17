import React, { useState } from 'react';
import { BsSearch, BsPerson } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './Navbar.css'
import { Link } from 'react-scroll';

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>BEACHES.</h2>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500}>
                    <li>Home</li>
                </Link>
                <Link to='destinations' smooth={true} duration={500}>
                    <li>Destinations</li>
                </Link>
                <Link to='carousel' smooth={true} duration={500}>
                    <li>Travel</li>
                </Link>
                <Link to='search' smooth={true} duration={500}>
                    <li>Book</li>
                </Link>
                <Link to='views' smooth={true} duration={500}>
                    <li>Views</li>
                </Link>
            </ul>
            <div className="nav-icons">
                <BsSearch className='icon' />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? <HiOutlineMenuAlt4 className='icon' /> : <AiOutlineClose className='icon' style={{ color: '#000' }} />}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500}>
                        <li>Home</li>
                    </Link>
                    <Link to='destinations' smooth={true} duration={500}>
                        <li>Destinations</li>
                    </Link>
                    <Link to='carousel' smooth={true} duration={500}>
                        <li>Travel</li>
                    </Link>
                    <Link to='search' smooth={true} duration={500}>
                        <li>Book</li>
                    </Link>
                    <Link to='views' smooth={true} duration={500}>
                        <li>Views</li>
                    </Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className="icon" />
                        <FaInstagram className="icon" />
                        <FaTwitter className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar