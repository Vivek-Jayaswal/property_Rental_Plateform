import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addProperties } from "../ReduxStore/slice/DataSlice.js"
import "./viewdetails.scss"
import { addCart } from "../ReduxStore/slice/CartSlice.js";

const ViewPropertyDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.properties.propertiesDetails.find((item) => item.id === Number(id));
    })

    const handleBookNowDetails = (id) => {
        dispatch(addCart(id));
    }

    useEffect(() => {
        if (id) {
            dispatch(addProperties());
        }
    }, [dispatch])

    return (
        <div className="details-card-container">
            {
                data ?
                    <>
                        <div className="details-card">
                            <div className="property-all-info">
                                <div className="property-price">
                                    <p>रु. {data.price}</p>
                                </div>
                                <div className="title">
                                    <p>{data.title}</p>
                                    <p>{data.city}</p>
                                </div>
                                <div className="property-middle-info">
                                    <div className="image">
                                        <img src={`${window.origin}/${data.image}`} alt="" />
                                    </div>
                                    <div className="property-details">
                                        <div className="first-layer">
                                            <div>
                                                <span className="material-icons logo">bed</span>
                                                <span>2 Beds</span>
                                            </div>
                                            <div>
                                                <span className="material-icons logo">directions_car</span>
                                                <span>{data.carParking} Parking</span>
                                            </div>
                                            <div>
                                                <span className="material-icons logo">bathtub</span>
                                                <span>{data.bathrooms}</span>
                                            </div>
                                        </div>
                                        <div className="second-layer">
                                            <div>
                                                <p>Carpet Area</p>
                                                <p>{data.flatSize} sqft.</p>
                                            </div>
                                            <div>
                                                <p>Developer</p>
                                                <p>{data.developer}</p>
                                            </div>
                                            <div>
                                                <p>Floor</p>
                                                <p>{data.floor}</p>
                                            </div>
                                        </div>
                                        <div className="third-layer">
                                            <div>
                                                <p>Lifts</p>
                                                <p>{data.lift}</p>
                                            </div>
                                            <div>
                                                <p>car Parking</p>
                                                <p>{data.carParking}</p>
                                            </div>
                                            <div>
                                                <p>Furnished</p>
                                                <p>{data.furnishing}</p>
                                            </div>
                                        </div>
                                        <div className="fourth-layer">
                                            <div>
                                                <p>TenantPreferred</p>
                                                <p>{data.tenantPreferred}</p>
                                            </div>
                                            <div>
                                                <p>Type</p>
                                                <p>{data.type}</p>
                                            </div>
                                            <div>
                                                <p>Balconies</p>
                                                <p>{data.balconies}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="property-third-middle-info">
                                    <p>{data.facing}</p>
                                    <p>{data.landmark}</p>
                                </div>
                                <div className="property-bottom-info">
                                    <button onClick={() => handleBookNowDetails(data.id)}>Book Now</button>
                                </div>
                            </div>
                            <div className="property-more-details">
                                <h1>More Details</h1>
                                <div className="details">
                                    <div className="more-details">
                                        <p>Rental Value</p>
                                        <p>Rs. {data.price}</p>
                                    </div>
                                    <div className="more-details">
                                        <p>Security Deposite</p>
                                        <p>Rs.{data.securityDeposit}</p>
                                    </div>
                                    <div className="more-details">
                                        <p>Address</p>
                                        <p>{data.address}</p>
                                    </div>
                                    <div className="more-details">
                                        <p>Landmark</p>
                                        <p>{data.landmark}</p>
                                    </div>
                                    <div className="more-details">
                                        <p>Furnishing</p>
                                        <p>{data.furnishing}</p>
                                    </div>
                                    <div className="more-details">
                                        <p>Flooring</p>
                                        <p>{data.floor}</p>
                                    </div>
                                    <div className="more-details">
                                        <p>OverLooking</p>
                                        <p>{data.overlooking}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <p>undefind</p>
                    </>
            }
        </div>
    )
}
export default ViewPropertyDetails;