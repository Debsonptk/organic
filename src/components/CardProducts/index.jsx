import { ColorCardProduct } from "./style";

// eslint-disable-next-line react/prop-types
const CardProducts = ({image, product, price}) => (
    <div className="card mb-5 rounded-0">
        <img src={image} className="card-img-top img-fluid" alt="..." />
        <ColorCardProduct className="card-body">
            <h5 className="text-center card-text">{product}</h5>
            <p className="text-center card-text">{price}</p>
        </ColorCardProduct>
    </div>
);

export default CardProducts;