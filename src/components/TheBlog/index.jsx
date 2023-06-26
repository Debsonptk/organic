import CardImage from "../CardImage";
import cactus from "../../assets/cactus.jpeg"
import greenFood from "../../assets/greenfood.jpeg"
import soup from "../../assets/soup.jpeg"

const data = [
    {
        image: cactus,
        alt: "cactus",
        title: "Beauty With Organic Products",
        date: "February 10, 2023",
        description: "Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo. Fusce elementum ligula elit. Duis ultricies ultrices nibh, a tincidunt risus pretium eleifend."
    },
    {
        image: greenFood,
        alt:"cactus",
        title:"Green Vegetables Are Good For Healthy",
        date:"June 02, 2023",
        description:"Vivamus consectetur nulla mattis lorem ultricies, ac congue tellus consectetur. Vivamus sed purus volutpat, varius mauris id, tempus augue. Nuefd ans congue liquam."
    },
    {
        image:soup,
        alt:"cactus",
        title:"Refreshing Green Smoothie Recipe",
        date:"September 05, 2023",
        description:"Praesent efficitur felis eu luctus vestibulum. In hac habitasse platea dictumst. Nam egestas eu nisl ac pellentesque. Duis congue suscipit lorem vel congue."
    },

];

const TheBlog = () => (
    <>
        <h1 className="text-center pt-5 pb-5">The Blog</h1>
        <div className="container pb-5">
            <div className="row row-cols-1 row-cols-md-3 g-0 g-md-3 g-lg-5">
                {data.map((card, index) => (
                    <CardImage
                        key={index}
                        image={card.image}
                        alt={card.alt}
                        title={card.title}
                        date={card.date}
                        description={card.description}
                        isReverted={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    </>
);

export default TheBlog;