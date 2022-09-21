// import
import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    const [errorMessage, setErrorMessage] = useState('')

    const { name, email, message } = formState

    // handleChange method ---- validate email and required input
    function handleChange(e) {
        if (e.target.name === 'email') {
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
        <div>
            <h1 className="title contact-me">Contact Me</h1>
            <hr />
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label" htmlFor="name">Name</label>
                    <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="field">
                    <label className="label" htmlFor="email">Email Address</label>
                    <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="field">
                    <label className="label" htmlFor="message">Message</label>
                    <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="is-danger">{errorMessage}</p>
                    </div>
                )}
                <button className="button " data-testid="button" type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Contact