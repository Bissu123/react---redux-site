import "./Form.css";
import View from "./View";
import React, { useState, } from "react";

const Form = () => {
    const [firstName, setFirstName,] = useState();
    const [lastName, setLastName,] = useState();
    const [phone, setPhone,] = useState();
    const [message, setMessage,] = useState();
    return (
        <section>
            <div className="form-tausta v-teksti form-section">
                <form>
                    <h1>Fill the Form</h1>
                    <div className="mb-3">
                        <label for="firstname" className="form-label">First name:</label>
                        <input
                            id="firstname"
                            type="text"
                            className="form-control"
                            aria-describedby="firstname"
                            name="firstname"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="lastname" className="form-label">Last name:</label>
                        <input
                            id="lastname"
                            type="text"
                            className="form-control"
                            aria-describedby="lastname"
                            name="lastname"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="phone" className="form-label">Phone:</label>
                        <input
                            id="phone"
                            type="text"
                            className="form-control"
                            aria-describedby="phone"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Message:</label>
                        <input
                            id="message"
                            type="text"
                            className="form-control"
                            aria-describedby="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </form>
            </div>
            <View firstName={firstName} lastName={lastName} phone={phone} message={message} />
        </section>
    );
};

export default Form;
