import { ButtonGreen, CoverOrganicFood, FontSize } from "./style";

const OrganicFood = () => (
    <CoverOrganicFood>
        <h5 className="text-white text-center pt-5 pb-3">Organic Food</h5>
        <FontSize className="text-white text-center pb-5">Healthy - Fresh - Delicious.</FontSize>
        <div className="d-flex justify-content-center">
            <ButtonGreen type="button" className="btn btn-success rounded-pill mb-5 btn-lg text-cente">VIEW MORE</ButtonGreen>
        </div>
    </CoverOrganicFood>
);

export default OrganicFood;