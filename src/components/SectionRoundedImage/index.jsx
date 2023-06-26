import RoundedImage from "../RoundedImage";
import vegetable from "../../assets/vegetable.jpeg";
import orange from "../../assets/orange.jpeg";
import meat from "../../assets/meat.jpeg";

const SectionRoundedImage = () => (
    <div className="row border-bottom">
        <div className="col d-flex justify-content-center">
            <RoundedImage
                image={ vegetable }
                name="Vegetable"
                alt="vegetable"
            />
        </div>
        <div className="col d-flex justify-content-center">
            <RoundedImage
                image={ orange }
                name="Fruit"
                alt="orange"
            />
        </div>
        <div className="col d-flex justify-content-center">
            <RoundedImage
                image={ meat }
                name="Meat"
                alt="meat"
            />
        </div>
    </div>
);

export default SectionRoundedImage;