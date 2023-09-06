import logo from '../../assets/logo.png';

import { BsCart3 } from 'react-icons/bs';
import MenuMobile from '../MenuMobile';
import { Link } from 'react-router-dom';



const Menu = () => (
    <>
        <div className="container">
            <div className="row">
                <nav className="col d-flex pt-2">
                    <div className='d-flex w-100 justify-content-between'>
                        <img src={logo} className='img-fluid me-2 py-4' alt='logo' />
                        <MenuMobile />
                    </div>
                    <div className='align-items-center d-flex px-1 d-none d-sm-flex col'>
                        <Link className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            to="/">
                            HOME
                        </Link>
                        <Link className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            to="/shop">
                            SHOP
                        </Link>
                        <Link className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            to="/about">
                            ABOUT
                        </Link>
                        <Link className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            to="/blog">
                            BLOG
                        </Link>
                        <Link className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            to="/contact">
                            CONTACT
                        </Link>
                    </div>
                    <div className='px-5 align-items-center d-none d-sm-flex'>
                        <Link className="nav-link me-3 active text-secondary d-none d-md-block"
                            aria-current="page"
                            to="/cart">
                            <BsCart3 size={20} />
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    </>

);

export default Menu