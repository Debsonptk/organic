import { BigTable, ImageSize, SmallTable, TheadColor, BtnSmStyle } from "./style";
import salad from '../../assets/salad.jpeg'
import apple from '../../assets/apple.jpeg'
import ButtonGreen from "../ButtonGreen";
import ButtonWhite from "../ButtonWhite";
import RoundButton from "../RoundButton";
import { Link } from "react-router-dom";

const TableCart = () => {
    return (
        <>
            <div className="container pt-5">
                <BigTable className="table border mb-5 align-middle d-none d-lg-table text-center">
                    <thead>
                        <TheadColor>
                            <th colSpan="2" className="color text-start px-5 pt-3 pb-3">
                                Product
                            </th>
                            <th className="color pt-3 pb-3">Weight</th>
                            <th className="color pt-3 pb-3">Quantity</th>
                            <th className="color pt-3 pb-3">Price</th>
                            <th className="color pt-3 pb-3">Total</th>
                            <th className="color pt-3 pb-3"></th>
                        </TheadColor>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="d-flex">
                                <ImageSize
                                    src={salad}
                                    alt="salad"
                                    className="img-fluid border m-4"
                                />
                            </td>
                            <td>Salad</td>
                            <td className="text-center">0.4kg</td>
                            <td>
                                <input
                                    type="number"
                                    placeholder="1"
                                />
                            </td>
                            <td>$2.26</td>
                            <td>$2.26</td>
                            <td className="text-center">
                                <RoundButton title="x" />
                            </td>
                        </tr>
                        <tr>
                            <td className="d-flex">
                                <ImageSize
                                    src={apple}
                                    alt="apple"
                                    className=" img-fluid border m-4"
                                />
                            </td>
                            <td>Apple</td>
                            <td className="text-center">0.4kg</td>
                            <td>
                                <input
                                    type="number"
                                    placeholder="1"
                                />
                            </td>
                            <td>$2.26</td>
                            <td>$2.26</td>
                            <td className="text-center">
                                <RoundButton title="x" />
                            </td>
                        </tr>
                    </tbody>
                    <tfoot >
                        <tr>
                            <td>
                                <ButtonWhite
                                    title="Coupon Code"
                                />
                            </td>
                            <td className="py-3">
                                <ButtonGreen
                                    title="APPLY COUPON"
                                />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="text-center">
                                <ButtonWhite
                                    title="UPDATE CART"
                                />
                            </td>
                        </tr>
                    </tfoot>
                </BigTable>
                <SmallTable className="table border align-middle table-striped table-light d-table d-lg-none mb-0">
                    <tbody>
                        <tr >
                            <th>Product</th>
                            <td className="product" >Apple</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td >0.4kg</td>
                        </tr>
                        <tr>
                            <th>Quantity</th>
                            <td>
                                <input
                                    type="number"
                                    placeholder="1"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>$2.26</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>$2.26</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td ><RoundButton title="x" /></td>
                        </tr>
                        <tr>
                            <th>Product</th>
                            <td className="product" >Salad</td>
                        </tr>
                        <tr>
                            <th>Weight</th>
                            <td >0.4kg</td>
                        </tr>
                        <tr>
                            <th>Quantity</th>
                            <td>
                                <input
                                    type="number"
                                    placeholder="1"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>$2.26</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td>$2.26</td>
                        </tr>
                        <tr>
                            <th></th>
                            <td ><RoundButton title="x" /></td>
                        </tr>
                    </tbody>
                </SmallTable>
                <BtnSmStyle className="border mb-5 px-4 py-3 d-block d-lg-none">
                    <div className="d-flex flex-column flex-md-row  ">
                        <button className="whitebtn w-100 px-0 py-2 mb-3 me-md-2" >
                            Coupon Code
                        </button>
                        <button className="greenbtn w-100 px-0 py-2 mb-3 ms-md-2">
                            APPLY COUPON
                        </button>
                    </div>
                    <div className="d-flex">
                        <button className="whitebtn w-100 px-0 py-2">
                            UPDATE CART
                        </button>
                    </div>
                </BtnSmStyle>
                <h2>Cart Total</h2>
                <div className="col-md-5 col-lg-7 mb-5 py-5 d-none d-lg-block">
                    <div className="row row-cols-2 mb-3 mx-0 ">
                        <div className="col border ">
                            <p className="mb-0 py-2">Subtotal</p>
                        </div>
                        <div className="col border">
                            <p className="mb-0 py-2">$6.31</p>
                        </div>
                        <div className="col border">
                            <p className="mb-0 py-2">Total</p>
                        </div>
                        <div className="col border">
                            <p className="mb-0 py-2">$6.31</p>
                        </div>
                    </div>
                    <Link to="/checkout" className="mx-0 px-0">
                        <ButtonGreen title="PROCEED TO CHECKOUT" />
                    </Link>
                </div>
                <div className="col-md-5 col-lg-7 mb-5 py-5 d-block d-lg-none w-100">
                    <div className=" mb-3 ">
                        <div className="d-flex border justify-content-between px-3">
                            <p className="mb-0 py-2">Subtotal</p>
                            <p className="mb-0 py-2">$6.31</p>
                        </div>
                        <div className="d-flex border justify-content-between px-3">
                            <p className="mb-0 py-2">Total</p>
                            <p className="mb-0 py-2">$6.31</p>
                        </div>
                    </div>
                    <Link to="/checkout" className="mx-0 px-0">
                        <ButtonGreen title="PROCEED TO CHECKOUT" />
                    </Link>
                </div>
            </div>
        </>
    );
}
    export default TableCart;