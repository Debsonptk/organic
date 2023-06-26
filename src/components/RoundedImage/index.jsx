import { ImageSize } from "./style";

// eslint-disable-next-line react/prop-types
const RoundedImage = ({ image, name, description }) => (
    <>
        <div className="pt-5 pb-5">
            <div>
                <ImageSize src={image} alt="..." className="rounded-circle image-fluid"/>
            </div>
            <h4 className="text-center pt-3">{ name }</h4>
            <p className="text-center pt-1 pb-5">{description}</p>
        </div>
    </>
);

export default RoundedImage;