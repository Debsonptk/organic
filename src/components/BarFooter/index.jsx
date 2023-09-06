import discover from "../../assets/discover.png";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import master from "../../assets/master.png";
import { CoverBarFooter } from "./style";

const BarFooter = () => (
    <CoverBarFooter>
        <div className="container">
            <div className="row justify-content-between">
                <div className="col d-flex align-items-center">
                    <p className="d-none d-sm-block">Copyright © 2023 Designed by AuThemes. All rights reserved.</p>
                </div>
                <div className="col d-flex justify-content-end pt-4 pb-4">
                    <img src={discover} alt="discover" className="px-2 img-fluid"/>
                    <img src={paypal} alt="paypal" className="px-2 img-fluid"/>
                    <img src={visa} alt="visa" className="px-2 img-fluid"/>
                    <img src={master} alt="master" className="px-2 img-fluid"/>
                </div>
            </div>
            <div className="col d-flex align-items-center">
                <p className="d-sm-none text-center">Copyright © 2023 Designed by AuThemes. All rights reserved.</p>
            </div>
        </div>
    </CoverBarFooter>
);

export default BarFooter;