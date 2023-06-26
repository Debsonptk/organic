import OurTeam from "../OurTeam";
import SectionAboutUs from "../SectionAboutUs";
import BannerMushroom from "../BannerMushroom";
import { BannerAboutUs, Title } from "./style";

const MainAbout = () => (
    <>
        <BannerAboutUs>
        <Title className="text-white text-center">About Us</Title>
        </BannerAboutUs>
        <SectionAboutUs />
        <BannerMushroom />
        <OurTeam />
    </>
);

export default MainAbout;