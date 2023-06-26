import CardIcon from "../CardIcon";
import { BannerContact, Title } from "./style";
import { BsGeoAltFill } from 'react-icons/bs';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { FiMail } from 'react-icons/fi';
import FormContact from "../FormContact";

const MainContact = () => (
    <>
        <BannerContact>
            <Title className="text-white text-center">Blog Detail</Title>
        </BannerContact>
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 pt-5 pb-3">
                <div className="col">
                    <CardIcon
                        icon={<BsGeoAltFill color="#97ae76" size={50} />}
                        description="12/2th Quincy St, NYC 12018"
                    />
                </div>
                <div className="col">
                    <CardIcon
                        icon={<MdOutlinePhoneIphone color="#97ae76" size={50}/>}
                        description="(+1) 11 321 4567"
                    />
                </div>
                <div className="col">
                    <CardIcon
                        icon={<FiMail color="#97ae76" size={50}/>}
                        description="contact@site.com"
                    />
                </div>
            </div>
        </div>
        <div className="container pb-5 pt-5">
            <div className="ratio ratio-21x9">
                <iframe
                    title="My Daily Marathon Tracker"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3645098141183!2d-73.94641467041448!3d40.68796911323594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b8c847678a1%3A0x32772a166d9bbf78!2sQuincy%20St%2C%20Brooklyn%2C%20NY%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1658026553797!5m2!1spt-BR!2sbr"  
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
        <FormContact />
    </>
);

export default MainContact;