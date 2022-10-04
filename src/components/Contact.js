// import
import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers'
import '../style/Contact.css'


function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const [errorMessage, setErrorMessage] = useState('')

    const { name, email, message } = formState

    // handleChange method ---- validate email and required input
    function handleChange(e) {
        if (e.target.name === 'Email') {
            const isValid = validateEmail(e.target.value)

            if (!isValid) {
                setErrorMessage('Please enter a valid email.')
            } else {
                setErrorMessage('')
            }
        } else if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required`)
        } else {
            setErrorMessage('')
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    // handleSubmit method --- preventDefault
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <section className='contact-me'>
            <h1 className="title">Contact Me</h1>
            <hr />
            <form className='contactForm' id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <input className="input" placeholder="Your Name" type="text" name="Name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="field">
                    <input className="input" placeholder="Your Email" type="email" name="Email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="field">
                    <textarea className="textarea" placeholder="Please enter your message" name="Message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="errorMessage">{errorMessage}</p>
                    </div>
                )}
                <button className="button" data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    )

}

export default Contact