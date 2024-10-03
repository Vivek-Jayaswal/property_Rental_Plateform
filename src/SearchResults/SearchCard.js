import { useDispatch } from "react-redux"
import "./searchcard.scss"
import { addCart } from "../ReduxStore/slice/CartSlice";
import { useNavigate } from "react-router-dom";

const SearchCard = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleBookNowBtn = (id) => {
        dispatch(addCart(id));
    }
    const handleViewMoreBtn = (id) => {
        navigate(`/view-property-details/${id}`);
    }

    return (
        <div className="search-card">
            <div className="search-card-image">
                <img src={`${window.origin}/${item.image}`} alt="" />
            </div>
            <div className="search-card-details-container">
                <div className="search-card-details">
                    <div className="search-card-title">
                        <p>{item.title}</p>
                        <p>{item.city}</p>
                    </div>

                    <div className="search-card-facility-container">
                        <div className="search-card-facility logo">
                            <span className="material-icons logo">bed</span>
                            <div className="search-facility">
                                <span >Furnishing</span>
                                <span>{item.furnishing}</span>
                            </div>
                        </div>
                        <div className="search-card-facility">
                            <span className="material-icons logo">stairs</span>
                            <div className="search-facility">
                                <span>Floor Stairs</span>
                                <span>{item.floor}</span>
                            </div>
                        </div>
                        <div className="search-card-facility">
                            <span className="material-icons logo">wc</span>
                            <div className="search-facility">
                                <span >TENANTPREFFERD</span>
                                <span>{item.tenantPreferred}</span>
                            </div>
                        </div>
                    </div>
                    <div className="search-card-description">
                        <p>{item.description}</p>
                        <p>Price : {item.price}</p>
                    </div>
                </div>
                <div className="search-card-btn">
                    <button onClick={() => handleViewMoreBtn(item.id)} className="view-more-btn">View More..........</button>
                    <button onClick={() => handleBookNowBtn(item.id)} className="book-btn">Book Now</button>
                </div>
            </div>
        </div>
    )
}

export default SearchCard