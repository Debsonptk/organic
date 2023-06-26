import { ColorButtonWhite } from "./style";

// eslint-disable-next-line react/prop-types
const ButtonWhite = ({name}) => (
    <ColorButtonWhite type="button" className="btn  btn-lg rounded-pill">{name}</ColorButtonWhite>
);

export default ButtonWhite;