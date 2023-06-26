import logo from '../../assets/logo.png';

import { BsCart3 } from 'react-icons/bs';
import MenuMobile from '../MenuMobile';



const Menu = () => (
    <>
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg col">
                    <div className='col d-flex justify-content-between'>
                        <img src={logo} alt='logo' />
                        <MenuMobile className="d-flex  d-sm-none "/>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav row d-flex justify-content-center">
                            <li className="nav-item col">
                                <a className="nav-link active text-secondary"
                                    aria-current="page"
                                    href="/">
                                    HOME
                                </a>
                            </li>
                            <li className="nav-item col">
                                <a className="nav-link active text-secondary"
                                    aria-current="page"
                                    href="/shop">
                                    SHOP
                                </a>
                            </li>
                            <li className="nav-item col">
                                <a className="nav-link active text-secondary"
                                    aria-current="page"
                                    href="/about">
                                    ABOUT
                                </a>
                            </li>
                            <li className="nav-item col">
                                <a className="nav-link active text-secondary"
                                    aria-current="page"
                                    href="/blog">
                                    BLOG
                                </a>
                            </li>
                            <li className="nav-item col">
                                <a className="nav-link active text-secondary"
                                    aria-current="page"
                                    href="/contact">
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex px-5'>
                        <div>
                            <a className="nav-link active text-secondary d-none d-lg-block"
                                aria-current="page"
                                href="/cart">
                                <BsCart3 size={20} />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>

);

export default Menu