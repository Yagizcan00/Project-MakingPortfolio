import React, { useRef, useState, useContext } from 'react'
import "./Contact.css"
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaAddressCard } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../Context';

const Contact = () => {

    const formRef = useRef()

    const [done, setDone] = useState(false)

    const theme = useContext(ThemeContext)

    const darkMode = theme.state.darkMode

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_bta3lt6', 'template_j8yuqmr', formRef.current, 'CqpSvQqYDNXHLQwFf')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Lorem, ipsum dolor.</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <BsFillTelephoneFill className="c-icon" />
                            &nbsp;+00 123 123 12 12
                        </div>
                        <div className="c-info-item">
                            <MdEmail className="c-icon" />
                            &nbsp;asd@asd.com
                        </div>
                        <div className="c-info-item">
                            <FaAddressCard className="c-icon" />
                            &nbsp;Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Lorem, ipsum dolor.</b> Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Non voluptatem enim nihil
                        id dolores itaque eaque corporis quidem dolore dicta!
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "rgb(30, 30, 30)" }} type="text" placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && "rgb(30, 30, 30)" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && "rgb(30, 30, 30)" }} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && "rgb(30, 30, 30)" }} rows="5" placeholder='Message' name='message' />
                        <button>Submit</button>
                        &nbsp;{done && "Thank you ..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
