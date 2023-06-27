

import TableCart from "../TableCart";
import { BannerCart, Title } from "./style";

const MainCart = () => (
    <div>
        <BannerCart>
            <Title className="text-white text-center">Shop Cart</Title>
        </BannerCart>
        <TableCart />
    </div>
);

export default MainCart;