import { useDispatch, useSelector } from "react-redux";
import "./cart.scss"
import { decrementPropertyQuantity, incrementPropertyQuantity, removeProperty } from "../ReduxStore/slice/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const cartData = useSelector((state) => state.cart.cartProperties)
    const totalCost = useSelector((state) => state.cart.totalCost);
    const totalBooking = useSelector((state) => state.cart.totalBooking);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleIncrement = (id) => {
        dispatch(incrementPropertyQuantity(id));
    }

    const handleDecrement = (id) => {
        dispatch(decrementPropertyQuantity(id));
    }

    const handleRemove = (id) => {
        dispatch(removeProperty(id));
    }

    const handleEmptyCart = () => {
        navigate("/")
    }

    const handleConfirmProceed = () => {
        navigate("/user-details");
    }

    return (
        <div className="cart-section-container">
            {
                cartData.length > 0 ?
                    <>
                        <div className="cart-left-section">
                            {
                                cartData.map((item, idx) => {
                                    return (
                                        <div className="cart-card" key={idx}>
                                            <div className="cart-card-info">
                                                <img src={`${window.origin}/${item.image}`} alt="" />
                                                <div className="card-property-details">
                                                    <div className="actual-price">
                                                        <p className="title">{item.title}</p>
                                                        <p className="price"><span>Price : </span> {item.price}</p>
                                                    </div>
                                                    <div className="property-facility-details">
                                                        <div className="property-facility right-border">
                                                            <span className="material-icons logo">bed</span>
                                                            <div className="facility-text">
                                                                <span >Furnishing</span>
                                                                <span>{item.furnishing}</span>
                                                            </div>
                                                        </div>
                                                        <div className="property-facility right-border">
                                                            <span className="material-icons logo">bathtub</span>
                                                            <div className="facility-text">
                                                                <span >BATHROOMS</span>
                                                                <span>{item.bathrooms}</span>
                                                            </div>
                                                        </div>
                                                        <div className="property-facility">
                                                            <span className="material-icons logo">wc</span>
                                                            <div className="facility-text">
                                                                <span >TENANTPREFFERD</span>
                                                                <span>{item.tenantPreferred}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="description">{item.description}</p>
                                                </div>
                                            </div>
                                            <div className="property-card-footer">
                                                <div className="footer-btn">
                                                    <div className="remove-btn">
                                                        <button onClick={() => handleRemove(item.id)}>Remove From Cart</button>
                                                    </div>
                                                    <div className="inc-dec-btn">
                                                        <button className="inc-btn" onClick={() => handleDecrement(item.id)}>-</button>
                                                        <span className="quntity">{item.quantity}</span>
                                                        <button className="dec-btn" onClick={() => handleIncrement(item.id)}>+</button>
                                                    </div>
                                                </div>
                                                <div className="total-cost">
                                                    <div className="show-amount">
                                                        <p>Total Amount : </p>
                                                        <p>रु. {item.totalPrice}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="cart-right-section">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="shift-text-left">Date</td>
                                        <td className="shift-text-right">22/12/2024</td>
                                    </tr>
                                    <tr>
                                        <td className="total shift-text-left">Total Properties</td>
                                        <td className="shift-text-right total">{totalBooking}</td>
                                    </tr>
                                    <tr>
                                        <td className="shift-text-left padding-sub-total color1">Total Payable Amount</td>
                                        <td className="shift-text-right padding-sub-total-td color2">रु {totalCost}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="confirm-btn" onClick={handleConfirmProceed}>Proceed Confrim</button>
                        </div>
                    </>
                    :
                    <div className="empty-card">
                        <p>Cart is Emplty</p>
                        <button onClick={handleEmptyCart}>Back To Home</button>
                    </div>

            }
        </div>
    )
}

export default Cart;