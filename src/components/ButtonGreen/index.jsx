import { ColorButtonGreen } from "./style";

// eslint-disable-next-line react/prop-types
const ButtonGreen = ({name}) => (
    <ColorButtonGreen type="button" className="btn  btn-lg rounded-pill text-white">{name}</ColorButtonGreen>
);

export default ButtonGreen;