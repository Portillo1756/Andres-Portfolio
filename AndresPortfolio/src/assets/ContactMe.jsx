import { useState } from "react";

export default function ContactMe() {
    const [showEmail, setShowEmail] = useState(false)
    const [showPhoneNumber, setShowPhoneNumber] = useState(false)
    function handleEmail() { 
        if (showEmail){ 
            setShowEmail(false)
        } else {
            setShowEmail (true)
        }
    }

    function handlePhoneNumber() { 
        if (showPhoneNumber){ 
            setShowPhoneNumber(false)
        } else {
            setShowPhoneNumber (true)
        }
    }

    return (
        <section id="ContactMe" className="contact--section">
            <div>
                <h1 className="sub-title">Lets Talk!!!</h1>     
            </div>
            <div className="buttonContainer">
                <div className="emailContainer">
                <button onClick= {handleEmail} className="Email">{showEmail?"portillo_andres17@yahoo.com":"Email"}</button>
                </div>
                <div className="numberContainer">
                <button onClick={handlePhoneNumber} className="Phone">{showPhoneNumber?"(818) 584-5839":"Phone Number"}</button>
                </div>
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name:</span>
                        <input type="text" 
                        className="contact--input text-md" 
                        name="first-name"
                        id="first-name"
                        required />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name:</span>
                        <input type="text" 
                        className="contact--input text-md" 
                        name="last-name"
                        id="last-name"
                        required />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email:</span>
                        <input type="email" 
                        className="contact--input text-md" 
                        name="email"
                        id="email"
                        required />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number:</span>
                        <input type="number" 
                        className="contact--input text-md" 
                        name="phone-number"
                        id="phone-number"
                        required />
                    </label>
                </div>
                <label htmlFor="message" className="contact--label">
                        <span className="text-md">Message:</span>
                        <textarea 
                            className="contact--input text-md" 
                            id="message"
                            rows="8"
                            placeholder="Type your message..." 
                        />
                </label>
                <label htmlFor="checkbox" className="checkbox--label">
                    <input type="checkbox" required name="checkbox" id="checkbox" />
                    <span className="text-sm">I accept the terms.</span>
                </label>
                <div>
                    <button className="summit-btn">SUMMIT</button>
                </div>
            </form>
        </section>
    );
}