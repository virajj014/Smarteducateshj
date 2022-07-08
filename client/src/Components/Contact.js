import React from 'react'
import contactpic from './photos/contactuspic.png'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-outer'>
            <div className='contact-inner'>
                <p>Contact Us</p>
                <div className='contact-innermost'>
                    <img src={contactpic} />
                    <form>
                        <p>Get in touch</p>
                        <input placeholder='Name' />
                        <input placeholder='Email' />
                        <textarea placeholder='Message' />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact