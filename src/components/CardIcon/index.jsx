// eslint-disable-next-line react/prop-types
const CardIcon = ({icon, description}) => (
    <div className="card text-center rounded-0" >
        <div className="card-body">
            <div className="card-title pb-2 pt-4">{icon}</div>
            <p className="card-text pb-4">{description}</p>
        </div>
    </div>
);

export default CardIcon;