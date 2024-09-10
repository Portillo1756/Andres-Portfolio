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
    return (
        <section id="ContactMe" className="ContactMe">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <button className="Email">Email</button>
                    <button className="Phone">Phone Number</button>
                </div>
            </div>
        </section>
    );
}