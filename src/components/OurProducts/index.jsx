import BorderCard from "../BorderCard";
import broccoli from "../../assets/broccoli.jpeg";
import spinach from "../../assets/spinach.jpeg";
import lemon from "../../assets/lemon.jpeg";
import bean from "../../assets/bean.jpeg";
import onion from "../../assets/onion.jpeg";
import apple from "../../assets/apple.jpeg";

const OurProducts = () => (
    <section className="container pb-5">
        <h1 className="d-flex justify-content-center pt-5 pb-5">Our Products</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div className="col d-flex pb-3 ">
                <BorderCard
                    image={broccoli}
                    alt="broccoli"
                    title="Broccoli"
                    price="$2.00"
                />
            </div>
            <div className="col d-flex pb-3 ">
                <BorderCard
                    image={apple}
                    alt="apple"
                    title="Apple"
                    price="$2.00"
                />
            </div>
            <div className="col d-flex pb-3">
                <BorderCard
                    image={spinach}
                    alt="spinach"
                    title="Spinach"
                    price="$2.00"
                />
        </div>
        <div className="col d-flex pb-3">
            <BorderCard
                image={lemon}
                alt="lemon"
                title="Lemon"
                price="$1.10"
            />
            </div>
            <div className="col d-flex pb-3">
                <BorderCard
                    image={bean}
                    alt="bean"
                    title="Bean"
                    price="$3.20"
                />
            </div>
            <div className="col d-flex pb-3">
                <BorderCard
                    image={onion}
                    alt="onion"
                    title="Onioni"
                    price="$3.10"
                />
                </div>
            </div>
    </section>
);

export default OurProducts;