import CardProducts from "../CardProducts";
import Showing from "../Showing";

import salad from "../../assets/salad.jpeg"
import onion from "../../assets/onion.jpeg"
import bean from "../../assets/bean.jpeg"
import lemon from "../../assets/lemon.jpeg"
import spinach from "../../assets/spinach.jpeg"
import apple from "../../assets/apple.jpeg"
import broccoli from "../../assets/broccoli.jpeg"
import brasil from "../../assets/brasil.jpeg"
import pear from "../../assets/pear.jpeg"
import tomato from "../../assets/tomato.jpeg"
import bmelon from "../../assets/bmelon.jpeg"
import cucumber from "../../assets/cucumber.jpeg"
import Pagination from "../Pagination";
import { BannerShop, Title } from "./style";



const MainShop = () => (
    <>
        <BannerShop>
            <Title className="text-white text-center">Shop</Title>
        </BannerShop>
        <div className="container">
            <Showing />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 pt-5 pb-5">
                <div className="col d-flex ">
                    <CardProducts
                        image={salad}
                        alt="Salad"
                        product="Salad"
                        price="$3.20"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={onion}
                        alt="Onion"
                        product="Onion"
                        price="$3.20"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={bean}
                        alt="Bean"
                        product="Bean"
                        price="$3.50"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={lemon}
                        alt="Lemon"
                        product="Lemon"
                        price="$1.80"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={spinach}
                        alt="SPinach"
                        product="Spinach"
                        price="$2.26"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={apple}
                        alt="Apple"
                        product="Apple"
                        price="$4.05"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={broccoli}
                        alt="Broccoli"
                        product="Broccoli"
                        price="$3.88"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={brasil}
                        alt="Brasil"
                        product="Brasil"
                        price="$1.55"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={pear}
                        alt="Pear"
                        product="Pear"
                        price="$4.80"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={tomato}
                        alt="Tomato"
                        product="Tomato"
                        price="$2.32"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={bmelon}
                        alt="Bitter Melon"
                        product="Bitter Mellon"
                        price="$5.20"
                    />
                </div>
                <div className="col d-flex">
                    <CardProducts
                        image={cucumber}
                        alt="Cucumber"
                        product="Cucumber"
                        price="$3.45"
                    />
                </div>
            </div>
            <Pagination />
        </div>
    </>
);

export default MainShop;