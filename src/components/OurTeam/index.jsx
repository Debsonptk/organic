import RoundedImage from "../RoundedImage";
import leader from "../../assets/leader.jpeg";
import farmer1 from "../../assets/farmer1.jpeg";
import farmer2 from "../../assets/farmer2.jpeg";

const OurTeam = () => (
    <div className="container">
        <h1 className="text-center pt-5">Our Team</h1>
        <div className="row row-cols-1 row-cols-lg-3">
            <div className="col d-flex justify-content-center">
                <RoundedImage
                    image={leader}
                    name="Billy Ray"
                    description="Leader"
                    alt="vLeader"
                />
            </div>
            <div className="col d-flex justify-content-center">
                <RoundedImage
                    image={farmer1}
                    name="Danielle Ray"
                    description="Farmer"
                    alt="Farmer woman"
                />
            </div>
            <div className="col d-flex justify-content-center">
                <RoundedImage
                    image={farmer2}
                    name="Peter Castro"
                    description="Farmer"
                    alt="Farmer man"
                />
            </div>
        </div>
    </div>
);

export default OurTeam;