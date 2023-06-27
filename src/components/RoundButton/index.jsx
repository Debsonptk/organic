import { ButtonContainer } from './style';



// eslint-disable-next-line react/prop-types
const RoundButton = ({title,children}) => (
    <ButtonContainer type="button" className="viewMorebtn">{children}{title}</ButtonContainer>
);


export default RoundButton;