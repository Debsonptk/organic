import { ColorButtonGreen } from "./style";

// eslint-disable-next-line react/prop-types
const ButtonGreen = ({title}) => (
    <ColorButtonGreen type="button" className="btn  btn-lg rounded-pill text-white">{title}</ColorButtonGreen>
);

export default ButtonGreen;