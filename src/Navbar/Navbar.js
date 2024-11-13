import { NavLink, useNavigate } from "react-router-dom";
import CustomCheckBox from "../CustomCheckbox/CheckBox";
import {useState } from "react";
import { useSelector } from "react-redux";
import "./navbar.scss"


const Navbar = () => {
    const [showRentType, setShowRentType] = useState(false);
    const [showBudgetrange, setShowBudgetrange] = useState(false);
    const bookingCount = useSelector(state => state.cart);
    const [searchInput, setSearchInput] = useState("");
    const [selectedRentTypes, setSelectedRentTypes] = useState([]);
    const [selectedBHK, setSelectedBHK] = useState([]);
    const [selectedMinRange, setSelectedMinRange] = useState([]);
    const [selectedMaxRange, setSelectedMaxRange] = useState([]);
    const [hamMenu, setHameMenu] = useState(false);
    const navigate = useNavigate();


    const handleOnChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSearch = () => {
        if (searchInput && selectedBHK.length > 0 && selectedRentTypes.length > 0) {
            navigate(`/search?location=${searchInput}&bhk=${selectedBHK.join(',')}&minRange=${selectedMinRange[0]}&maxRange=${selectedMaxRange[0]}&rentType=${selectedRentTypes.join(',')}`);
        } else {
            alert("Please provide search location, BHK, minimum, and maximum range.");
        }
    };
    

    const handleRentType = () => {
        setShowRentType(!showRentType);
        setShowBudgetrange(false)
    }

    const handleBudgetRange = () => {
        setShowBudgetrange(!showBudgetrange);
        setShowRentType(false)
    }

    const handleRentTypeChange = (label) => {
        setSelectedRentTypes((prevState) =>
            prevState.includes(label)
                ? prevState.filter((type) => type !== label)
                : [...prevState, label]
        );
    };

    const handleBHKChange = (label) => {
        setSelectedBHK((prevState) =>
            prevState.includes(label)
                ? prevState.filter((bhk) => bhk !== label)
                : [...prevState, label]
        );
    };

    const handleMinRangeChange = (label) => {
        setSelectedMinRange((prevState) =>
            prevState.includes(label) 
                ? [] 
                : [label] 
        );
    };

    const handleMaxRangeChange = (label) => {
        setSelectedMaxRange((prevState) =>
            prevState.includes(label) 
                ? [] 
                : [label]
        );
    };

    const handleHamMenu = () => {
        setHameMenu(!hamMenu);
    }

    return (
        <div className="Navbar">
            <div className="nav-left">
                <p>PROPERTY RENTAL</p>
                <p>PLATEFORM</p>
            </div>
            <div className="nav-middle">
                <div className="location-input">
                    <input type="text" name="location" id="location" value={searchInput} placeholder="search location" onChange={handleOnChange} />
                </div>
                <div className="bedroom-type">
                    <div className="flat-apart" onClick={handleRentType}>
                        <span className="material-icons mi-size">home</span>
                        <span>flat</span>
                        <span className="material-icons mi-size">keyboard_arrow_down</span>
                    </div>
                    {
                        showRentType && (
                            <div className="select-rent-category">
                                <div className="select-flat-home-villa">
                                    <CustomCheckBox lable={"FLAT"} id={"flat"} isChecked={selectedRentTypes.includes("FLAT")} onChange={() => handleRentTypeChange("FLAT")} />
                                    <CustomCheckBox lable={"HOME"} id={"home"} isChecked={selectedRentTypes.includes("HOME")} onChange={() => handleRentTypeChange("HOME")} />
                                    <CustomCheckBox lable={"VILLA"} id={"villa"} isChecked={selectedRentTypes.includes("VILLA")} onChange={() => handleRentTypeChange("VILLA")} />
                                </div>
                                <div className="select-number-of-bedroom">
                                    <CustomCheckBox lable={"1BHK"} id={"1BHK"} isChecked={selectedBHK.includes("1BHK")} onChange={() => handleBHKChange("1BHK")} />
                                    <CustomCheckBox lable={"2BHK"} id={"2BHK"} isChecked={selectedBHK.includes("2BHK")} onChange={() => handleBHKChange("2BHK")} />
                                    <CustomCheckBox lable={"3BHK"} id={"3BHK"} isChecked={selectedBHK.includes("3BHK")} onChange={() => handleBHKChange("3BHK")} />
                                    <CustomCheckBox lable={"4BHK"} id={"4BHK"} isChecked={selectedBHK.includes("4BHK")} onChange={() => handleBHKChange("4BHK")} />
                                    <CustomCheckBox lable={"5BHK"} id={"5BHK"} isChecked={selectedBHK.includes("5BHK")} onChange={() => handleBHKChange("5BHK")} />
                                    <CustomCheckBox lable={"5BHK++"} id={"5BHK++"} isChecked={selectedBHK.includes("5BHK++")} onChange={() => handleBHKChange("5BHK++")} />
                                    <CustomCheckBox lable={"5BHK++"} id={"5BHK++"} isChecked={selectedBHK.includes("5BHK++")} onChange={() => handleBHKChange("5BHK++")} />
                                    <CustomCheckBox lable={"5BHK++"} id={"5BHK++"} isChecked={selectedBHK.includes("5BHK++")} onChange={() => handleBHKChange("5BHK++")} />
                                </div>
                            </div>)
                    }
                </div>
                <div className="budget-container">
                    <div className="budget" onClick={handleBudgetRange}>
                        <span className="material-icons mi-size">currency_rupee</span>
                        <span>Budget</span>
                        <span className="material-icons mi-size">keyboard_arrow_down</span>
                    </div>
                    {
                        showBudgetrange && (
                            <div className="select-budget-range">
                                <div className="handle-price">
                                    <p>Min-Range</p>
                                    <CustomCheckBox lable={"10000"} isChecked={selectedMinRange.includes("10000")} onChange={() => handleMinRangeChange("10000")} id={"min-eleven"} />
                                    <CustomCheckBox lable={"20000"} isChecked={selectedMinRange.includes("20000")} onChange={() => handleMinRangeChange("20000")} id={"min-nineth"} />
                                    <CustomCheckBox lable={"30000"} isChecked={selectedMinRange.includes("30000")} onChange={() => handleMinRangeChange("30000")} id={"min-tenth"} />
                                    <CustomCheckBox lable={"40000"} isChecked={selectedMinRange.includes("40000")} onChange={() => handleMinRangeChange("40000")} id={"min-first"} />
                                    <CustomCheckBox lable={"50000"} isChecked={selectedMinRange.includes("50000")} onChange={() => handleMinRangeChange("50000")} id={"min-second"} />
                                    <CustomCheckBox lable={"60000"} isChecked={selectedMinRange.includes("60000")} onChange={() => handleMinRangeChange("60000")} id={"min-third"} />
                                    <CustomCheckBox lable={"70000"} isChecked={selectedMinRange.includes("70000")} onChange={() => handleMinRangeChange("70000")} id={"min-fourth"} />
                                    <CustomCheckBox lable={"80000"} isChecked={selectedMinRange.includes("80000")} onChange={() => handleMinRangeChange("80000")} id={"min-fifth"} />
                                    <CustomCheckBox lable={"90000"} isChecked={selectedMinRange.includes("90000")} onChange={() => handleMinRangeChange("90000")} id={"min-sixth"} />
                                    <CustomCheckBox lable={"100000"} isChecked={selectedMinRange.includes("110000")} onChange={() => handleMinRangeChange("100000")} id={"min-seventh"} />
                                    <CustomCheckBox lable={"110000"} isChecked={selectedMinRange.includes("120000")} onChange={() => handleMinRangeChange("120000")} id={"min-eightth"} />
                                </div>
                                <div className="handle-price">
                                    <p>Max-Range</p>
                                    <CustomCheckBox lable={"30000"} isChecked={selectedMaxRange.includes("30000")} onChange={() => handleMaxRangeChange("30000")} id={"max-nineth"} />
                                    <CustomCheckBox lable={"40000"} isChecked={selectedMaxRange.includes("40000")} onChange={() => handleMaxRangeChange("40000")} id={"max-tenth"} />
                                    <CustomCheckBox lable={"50000"} isChecked={selectedMaxRange.includes("50000")} onChange={() => handleMaxRangeChange("50000")} id={"max-eleventh"} />
                                    <CustomCheckBox lable={"60000"} isChecked={selectedMaxRange.includes("60000")} onChange={() => handleMaxRangeChange("60000")} id={"max-first"} />
                                    <CustomCheckBox lable={"70000"} isChecked={selectedMaxRange.includes("70000")} onChange={() => handleMaxRangeChange("70000")} id={"max-second"} />
                                    <CustomCheckBox lable={"80000"} isChecked={selectedMaxRange.includes("80000")} onChange={() => handleMaxRangeChange("80000")} id={"max-third"} />
                                    <CustomCheckBox lable={"90000"} isChecked={selectedMaxRange.includes("90000")} onChange={() => handleMaxRangeChange("90000")} id={"max-fourth"} />
                                    <CustomCheckBox lable={"100000"} isChecked={selectedMaxRange.includes("100000")} onChange={() => handleMaxRangeChange("100000")} id={"max-fifth"} />
                                    <CustomCheckBox lable={"110000"} isChecked={selectedMaxRange.includes("110000")} onChange={() => handleMaxRangeChange("110000")} id={"max-sixth"} />
                                    <CustomCheckBox lable={"120000"} isChecked={selectedMaxRange.includes("120000")} onChange={() => handleMaxRangeChange("120000")} id={"max-seventh"} />
                                    <CustomCheckBox lable={"130000"} isChecked={selectedMaxRange.includes("130000")} onChange={() => handleMaxRangeChange("130000")} id={"max-eighth"} />
                                </div>
                            </div>)
                    }
                </div>
                <button className="search-btn" onClick={handleSearch}>Search</button>
            </div>
            <div className="nav-right">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/"}>Login</NavLink>
                <NavLink to={"/cart"} ><span className="material-icons">shopping_cart</span><span className="total-count">{bookingCount.totalBooking}</span></NavLink>
            </div>
            <div className="ham-menu">
                <span onClick={handleHamMenu} className="material-icons ham-btn">menu</span>
                {
                    hamMenu && (
                        <div className="ham-nav-right">
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/login"}>Login</NavLink>
                            <NavLink to={"/cart"} ><span className="material-icons">shopping_cart</span><span className="total-count">{bookingCount.totalBooking}</span></NavLink>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Navbar;