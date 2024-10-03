import { useState } from "react";
import Input from "../CustomInput/Input";
import "./userdetails.scss";
import RadioInput from "../CustomInput/RadioInput";

const UserDetails = () => {
    const [name, setName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [isChecked, setIsChecked] = useState("");
    const [isCheckedOnlineOption, setIsCheckedOnlineOption] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");



    const handleSubmit = () => {
        alert("Your Property Booking Confirm")
    }

    const handlePaymentModeChange = (value) => {
        setIsChecked(value);
        if (value === "offline") {
            setIsCheckedOnlineOption("");
        }
    }


    return (
        <div className="details-container">
            <div className="form">
                <h2>Enter Details</h2>
                <div className="user-details">
                    <div className="name-number">
                        <Input id={"fullName"} type={"text"} lableText={"Name : "} value={name} setState={setName} name={"fullName"} placeholder={"Name"} />
                        <Input id={"mobileNumber"} type={"tel"} lableText={"Phone Number : "} value={mobileNumber} setState={setMobileNumber} name={"mobileNumber"} placeholder={"Mobile No...."} />
                    </div>
                    <div className="address">
                        <label htmlFor="address">Address</label><br />
                        <textarea name="address" id="address" rows={4}></textarea>
                    </div>
                </div>
                <div className="payment-container">
                    <h2>Payment Details</h2>
                    <div className="payment-mode">
                        <RadioInput type="radio" name="paymentmode" id="online" checked={isChecked === "online"} lableText={"online"} value={"online"} setState={handlePaymentModeChange} />
                        <div className="payment-mode-options">
                            {
                                isChecked === "online" && (
                                    <>
                                        <RadioInput type="radio" name="paymentOnlineOption" id="phonepe" checked={isCheckedOnlineOption === "phonepe"} lableText={"Phonepe"} value={"phonepe"} setState={setIsCheckedOnlineOption} />
                                        <RadioInput type="radio" name="paymentOnlineOption" id="googlepe" checked={isCheckedOnlineOption === "googlepe"} lableText={"Googlepe"} value={"googlepe"} setState={setIsCheckedOnlineOption} />
                                        <RadioInput type="radio" name="paymentOnlineOption" id="paytm" checked={isCheckedOnlineOption === "paytm"} lableText={"Paytm"} value={"paytm"} setState={setIsCheckedOnlineOption} />
                                        <RadioInput type="radio" name="paymentOnlineOption" id="debiCard" checked={isCheckedOnlineOption === "debitcard"} lableText={"Debit-Card"} value={"debitcard"} setState={setIsCheckedOnlineOption} />
                                    </>
                                )
                            }
                        </div>
                        <>
                            {
                                (isCheckedOnlineOption === "debitcard" && isChecked === "online") && (
                                    <div className="debit-card">
                                        <h3>Enter Card Details</h3 >
                                        <div className="card-number">
                                            <Input id={"cardNumber"} type={"text"} lableText={"Card Number : "} value={cardNumber} setState={setCardNumber} name={cardNumber} placeholder={"1232 4567 8899"} />
                                        </div>
                                        <div className="card-details">
                                            <Input id={"cardHolderName"} type={"text"} lableText={"Card Holder Name : "} value={cardHolderName} setState={setCardHolderName} name={"cardHolderName"} placeholder={"Vivek Jaiswal"} />
                                            <Input id={"expiryDate"} type={"text"} lableText={"Exp. Date : "} value={expiryDate} setState={setExpiryDate} name={"expiryDate"} placeholder={"11/12/2024"} />
                                            <div className="cvv">
                                                <Input id={"cvv"} type={"text"} lableText={"CVV : "} value={cvv} setState={setCvv} name={"cvv"} placeholder={"123"} />
                                            </div>
                                        </div>

                                    </div>
                                )
                            }
                        </>
                    </div>
                    <div>
                        <RadioInput type="radio" name="paymentmode" id="offline" checked={isChecked === "offline"} lableText={"Cash On Delevery"} value={"offline"} setState={handlePaymentModeChange} />
                    </div>
                </div>
                <div className="submit-btn">
                    <button  onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;