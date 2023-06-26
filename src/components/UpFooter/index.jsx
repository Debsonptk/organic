import SectionUpFooter from "../SectionUpFooter";
import logo from "../../assets/logo.png"

import { BiMap } from 'react-icons/bi';
import {FiPhone, FiMail} from 'react-icons/fi';
import { BackgroundColor } from "./style";

const UpFooter = () => (
    <BackgroundColor>
        <div className="container pt-5 pb-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 justify-content-between">
                <div className="col pb-4">
                    <img src={logo} alt="logo" className="pb-5 img-fluid"/>
                    <p><BiMap /> 379 5th Ave New York, NYC 10018</p>
                    <p><FiPhone /> (+1) 96 716 6879</p>
                    <p><FiMail /> contact@site.com</p>
                </div>
                <div className="col px-5 pb-4">
                    <SectionUpFooter
                        title="SHOP"
                        p1="Food"
                        p2="Farm"
                        p3="Health"
                        p4="Organic"
                    />
                </div>
                <div className="col px-5 pb-4">
                    <SectionUpFooter
                        title="SUPPORT"
                        p1="Contact Us"
                        p2="FAQ"
                        p3="Privacy Policy"
                    p4="Blog"
                    />
                </div>
                <div className="col px-5 pb-4">
                    <SectionUpFooter
                        title="MY ACCOUNT"
                        p1="Sing In"
                        p2="My Cart"
                        p3="My Wishlist"
                        p4="Check Out"
                    />
                </div>
                <div className="col pb-4">
                    <h5 className="pb-4">NEWSLETTER</h5>
                    <p className="pb-3">Subscribe now to get daily updates</p>
                    <div className="input-group mb-3 input-container">
                        <input type="text"
                            className="form-control rounded-pill border border-3"
                            placeholder="Your Email..." aria-label="Your Email..."
                            aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
        </div>
    </BackgroundColor>
);

export default UpFooter;