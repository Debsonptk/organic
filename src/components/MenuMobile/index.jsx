import { MenuMb, MenuOverlay, NavSection } from './style';
import { Link } from "react-router-dom";
import {  AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import logo from '../../assets/logo.png';

const MenuMobile = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
        <>
            <MenuOverlay isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)} className="d-flex d-lg-none position-fixed h-100 w-100" />
            <div className="d-flex align-items-center justify-content-between w-100 d-block d-lg-none">
                <div className="d-flex align-items-end  mx-3">
                    <GiHamburgerMenu type="button" onClick={() => setIsMenuOpened(true)} size={25}  />
                </div>
            </div>
            <MenuMb isMenuOpened={isMenuOpened} className="d-flex flex-column d-lg-none position-fixed bg-white">
                <NavSection className=" w-100">
                    <div className=" d-flex flex-column justify-content-center mb-3">
                            <AiOutlineClose type="button" onClick={() => setIsMenuOpened(false)} className="align-self-end"/>
                    </div>
                    <div className="d-flex flex-column w-100 ">
                        <img src={logo} alt='logo' className='pb-2'/>
                        <h3 className='pb-4 border-bottom'>MENU</h3>
                        <Link to="/" className="pb-3 pt-2 text-decoration-none text-black">HOME</Link>
                        <Link to="/about" className="pb-3 text-decoration-none text-black">ABOUT</Link>
                        <Link to="/shop" className="pb-3 text-decoration-none text-black">SHOP</Link>
                        <Link to="/blog" className="pb-3 text-decoration-none text-black">THE BLOG</Link>
                        <Link to="/contact" className="pb-3 text-decoration-none text-black">CONTACT</Link>
                        <Link to="/cart" className="text-decoration-none text-black">CART</Link>
                    </div>
                </NavSection>
            </MenuMb>
        </>
    )
};

export default MenuMobile;

