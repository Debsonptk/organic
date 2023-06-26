import { CoverCardImage } from "../BorderCard/style";
import { FaRegComment } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const CardImage = ({image, title, date, description, isReverted}) => (
  <CoverCardImage className={`card rounded-0 border-0 d-flex ${isReverted ? "flex-column-reverse" : "flex-column"}`}>
    <img src={image} className="card-img-top rounded-0" alt="..." />
    <div className="card-body">
      <h5 className="card-title pt-5">{title}</h5>
      <h6 className="card-text pt-3 d-flex justify-content-between">{date}<FaRegComment /></h6>
      <p className="card-text pt-5 pb-5">{description}</p>
    </div>
  </CoverCardImage>
);

export default CardImage;