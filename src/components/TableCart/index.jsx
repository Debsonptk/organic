import { TiDelete } from 'react-icons/ti';
import salad from "../../assets/salad.jpeg";
import apple from "../../assets/apple.jpeg";
import { TableSize, Thead, Image, StyledInput} from './style';
import CartTotal from '../CartTotal';
import ButtonGreen from '../ButtonGreen';
import ButtonWhite from '../ButtonWhite';

const TableCart = () => (
    <>
        <section className='pt-5 pb-5'>
            <TableSize>
                <Thead>
                    <tr>
                        <th className='p-3'>Product</th>
                        <th></th>
                        <th>Weight</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </Thead>
                <tbody className='border'>
                    <td className='p-4 col-2'>
                        <Image src={salad} className="border img-fluid"/>
                    </td>
                    <td>Salad</td>
                    <td>0.4 kg</td>
                    <td>
                    <StyledInput className="input-group">
                            <input
                                type="number"
                                className="form-control rounded-pill text-center"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
                                value="1"
                                inputMode='numeric'
                                step="1"
                                />
                    </StyledInput>
                    </td>
                    <td>$2.26</td>
                    <td>$2.26</td>
                    <td>
                        <div>{<TiDelete color='#97ae76' size={30} />}</div>
                    </td>
                </tbody>
                <tbody className='border'>
                    <td className='p-4'>
                        <Image src={apple} className="border img-fluid"/>
                    </td>
                    <td>Apple</td>
                    <td>0.4 kg</td>
                    <td>
                        <StyledInput className="input-group">
                            <input
                                type="number"
                                className="form-control rounded-pill text-center"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg"
                                value="1"
                                inputMode='numeric'
                                step="1"
                            />
                        </StyledInput>
                    </td>
                    <td>$2.26</td>
                    <td>$2.26</td>
                    <td>
                        <div>{<TiDelete color='#97ae76' size={30} />}</div>
                    </td>
                </tbody>
            </TableSize>
            <tfooter className="row  pt-3 p-3 border row-cols-1 row-cols-md-3">
                <div className='col col-2'>
                    <td><ButtonWhite name="Coupom Code" /></td>
                </div>
                <div className='col col-2'>
                    <td><ButtonGreen name="APPLY COUPOM"/></td>
                </div>
                <div className='col d-flex justify-content-end'>
                    <td><ButtonWhite name="UPDATE CART"/></td>
                </div>
            </tfooter>
        </section>
        <CartTotal />
        <div className='pb-5'>
            <ButtonGreen
                name="PROCEED TO CHECKOUT"
            />
        </div>
    </>
);

export default TableCart;