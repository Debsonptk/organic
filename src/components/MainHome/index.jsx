import FowllowUs from "../FowllowUs";
import OrganicFood from "../OrganicFood";
import OurProducts from "../OurProducts";
import SectionRoundedImage from "../SectionRoundedImage";
import TheBlog from "../TheBlog";

const MainHome = () => (
    <main className="flex-grow-1">
        <SectionRoundedImage />
        <OurProducts />
        <OrganicFood />
        <TheBlog />
        <FowllowUs />
    </main>
);

export default MainHome;