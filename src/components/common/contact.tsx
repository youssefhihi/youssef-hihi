"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './css/style.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("mgvejzap");
    return (
        <div className="form-card1">
            <div className="form-card2">
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form-heading">Contact Me</p>

                    <div className="form-field">
                        <input
                            required
                            placeholder="Name"
                            className="input-field"
                            type="text"
                            name="name"
                        />
                    </div>

                    <div className="form-field">
                        <input
                            required
                            placeholder="Email"
                            className="input-field"
                            type="email"
                            id="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="form-field">
                        <input
                            required
                            placeholder="Subject"
                            className="input-field"
                            type="text"
                            name="subject"
                        />
                    </div>

                    <div className="form-field">
                    <textarea
                        required
                        placeholder="Message"
                        className="input-field"
                        name="message"
                    ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>

                    <button className="sendMessage-btn" type="submit" disabled={state.submitting}>
                        Send Message
                    </button>
                </form>
            </div>

        </div>


    );
}
export default ContactForm;