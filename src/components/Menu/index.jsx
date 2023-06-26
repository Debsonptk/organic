import logo from '../../assets/logo.png';

import { BsCart3 } from 'react-icons/bs';
import MenuMobile from '../MenuMobile';



const Menu = () => (
    <>
        <div className="container">
            <div className="row container">
                <nav className="col d-flex pt-2">
                    <div className='d-flex w-100 justify-content-between'>
                        <img src={logo} className='img-fluid me-2' alt='logo' />
                        <MenuMobile />
                    </div>
                    <div className='align-items-center d-none d-sm-flex'>
                        <a className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            href="/">
                            HOME
                        </a>
                        <a className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            href="/shop">
                            SHOP
                        </a>
                        <a className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            href="/about">
                            ABOUT
                        </a>
                        <a className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            href="/blog">
                            BLOG
                        </a>
                        <a className="nav-link me-5 active text-secondary"
                            aria-current="page"
                            href="/contact">
                            CONTACT
                        </a>
                    </div>
                    <div className='px-5 align-items-center d-none d-sm-flex'>
                        <a className="nav-link me-3 active text-secondary d-none d-lg-block"
                            aria-current="page"
                            href="/cart">
                            <BsCart3 size={20} />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </>

);

export default Menu