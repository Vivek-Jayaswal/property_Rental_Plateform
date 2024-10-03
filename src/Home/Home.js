import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperties, setLoading } from "../ReduxStore/slice/DataSlice";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { addCart } from "../ReduxStore/slice/CartSlice";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const properties = useSelector((state => state.properties.propertiesDetails));
    
    const handleBookNow = (id) => {
        dispatch(addCart(id));
    }

    const handleMoreDetails = (id) => {
        navigate(`/view-property-details/${id}`)
    }

    useEffect(() => {
        dispatch(addProperties());
    }, [dispatch])

    return (
        <div className="properties-card-container">
            {
                properties.length > 0 &&
                <>
                    {
                        properties.map((item, idx) => {
                            return (
                                <div key={idx} className="property-cards">
                                    <img src={`${window.origin}/${item.image}`} alt="" />
                                    <div className="property-details">
                                        <p>{item.title}</p>
                                        <p>{item.description}</p>
                                        <p><strong>Price :-</strong> {item.price}Rs.</p>
                                        <div className="property-btn">
                                            <button className="details-btn" onClick={() => handleMoreDetails(item.id)}>View More Details...</button>
                                            <button className="book-btn" onClick={() => handleBookNow(item.id)}>Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}

export default Home;