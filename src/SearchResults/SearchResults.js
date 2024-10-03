import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addProperties } from "../ReduxStore/slice/DataSlice";
import SearchCard from "./SearchCard";
import "./searchcard.scss";

const SearchResults = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    const propertiesData = useSelector((state) => state.properties.propertiesDetails);
    const [searchData, setSearchData] = useState(null);   

    const filterProperties = () => {
        if (searchData && propertiesData) {
            const data = propertiesData.filter((property) => {
                const locationMatch = property.city.toLowerCase().includes(searchData.searchLocation.toLowerCase());
                const bhkType = searchData.bhk.length > 0 ? searchData.bhk.includes(property.bhk.toString()) : true;
                const rentalTpye = searchData.rentType.length> 0 ? searchData.rentType.includes(property.type.toUpperCase().toString()) : true;
                const priceMAtch = property.price >= Number(searchData.minRange) && property.price <= Number(searchData.maxRange);
                return locationMatch && bhkType && rentalTpye && priceMAtch;
            })
            return data;
        }
        else{
            return [];
        }
    }

    if(searchData && propertiesData){
        console.log("filterd",filterProperties());
    }
    
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const searchLocation = queryParams.get('location');
        const bhk = queryParams.get('bhk') ? queryParams.get('bhk').split(',') : [];
        const minRange = queryParams.get('minRange');
        const maxRange = queryParams.get('maxRange');
        const rentType = queryParams.get('rentType') ? queryParams.get('rentType').split(',') : [];
        if (searchLocation) {
            setSearchData({ searchLocation, bhk, minRange, maxRange, rentType });
        }

        return () => {
            setSearchData(null)
        }
    }, [location]);

    useEffect(() => {
        dispatch(addProperties())
    }, [dispatch])

    return (
        <div className="search-card-container">
            {
                searchData && filterProperties().length > 0 ?
                    <>
                        {
                            filterProperties().map((item,idx) => {                               
                                return <SearchCard key={idx} item={item}/>
                            })
                        }
                    </>
                    :
                    <div>
                        no result found
                    </div>
            }
        </div>
    )
}

export default SearchResults;