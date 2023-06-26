// eslint-disable-next-line react/prop-types
const BorderCard = ({image, title, price}) => (
    <div className="card border">
        <div>
            <img src={image} alt="..." className="img-fluid"/>
        </div>
        <div className="px-2">
            <h4>{title}</h4>
            <p>{price}</p>
        </div>
    </div>
);

export default BorderCard