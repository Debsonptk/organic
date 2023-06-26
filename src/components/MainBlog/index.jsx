import CardImage from "../CardImage";
import Pagination from "../Pagination";


import cactus from "../../assets/cactus.jpeg";
import greenfood from "../../assets/greenfood.jpeg";
import soup from "../../assets/soup.jpeg";
import plantation from "../../assets/plantation.jpeg";
import pumpkins from "../../assets/pumpkins.jpeg";
import oranges from "../../assets/oranges.jpeg";
import { BannerBlog, Title } from "./style";

const data = [
    {
        image: cactus,
        alt: "cactus",
        title: "Beauty With Organic Products",
        date: "February 10, 2023",
        description: "Etiam at varius diam, id blandit erat. Suspendisse eget volutpat risus, id venenatis justo. Fusce elementum ligula elit. Duis ultricies ultrices nibh, a tincidunt risus pretium eleifend."
    },
    {
        image: greenfood,
        alt:"greenfood",
        title:"Green Vegetables Are Good For Healthy",
        date:"June 02, 2023",
        description:"Vivamus consectetur nulla mattis lorem ultricies, ac congue tellus consectetur. Vivamus sed purus volutpat, varius mauris id, tempus augue. Nuefd ans congue liquam."
    },
    {
        image:soup,
        alt:"soup",
        title:"Refreshing Green Smoothie Recipe",
        date:"September 05, 2023",
        description:"Praesent efficitur felis eu luctus vestibulum. In hac habitasse platea dictumst. Nam egestas eu nisl ac pellentesque. Duis congue suscipit lorem vel congue."
    },
    {
        image:plantation,
        alt:"plantation",
        title:"Growing Your Own Organic Food",
        date:"January 02, 2017",
        description:"Phasellus vitae metus eu purus tincidunt fermentum eu id nisl. In gravida nec augue at pulvinar. Aenean at nunc a tellus posuere elementum. Suspendisse neque ante, consectetur quis odio blandit vundsl."
    },
    {
        image:pumpkins,
        alt:"pumpkins",
        title:"Food Heaven Made Easy",
        date:"December 23, 2016",
        description:"Etiam id tortor eget dui volutpat tincidunt placerat convallis neque. Nullam vulputate arcu lectus. Ut vestibulum fringilla nibh et imperdiet. Curabitur ullamcorper rhoncus libero vitae consectetur."
    },
    {
        image:oranges,
        alt:"oranges",
        title:"The Nutritional Benefits of Organic Fruits",
        date:"December 11, 2016",
        description:"Aliquam erat volutpat. Cras sollicitudin, sapien ut hendrerit varius, sapien massa auctor neque, eget convallis ligula ligula et libero. Pellentesque commodo nec tortor."
    },
];

const MainBlog = () => (
    <>
        <BannerBlog>
            <Title className="text-white text-center">Blog</Title>
        </BannerBlog>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 pt-5 pb-5 g-4">
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
            <Pagination />
        </div>
    </>
);

export default MainBlog;