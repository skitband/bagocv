'use client';

import React, {useState} from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = ({ activeTab }) => {

    const initialValues = {
        email: '',
        subject: '',
        message: '',
    };

    const validate = (values) => {
        const errors = {};
    
        if (!values.subject.trim()) {
          errors.subject = 'Subject is required';
        }
    
        if (!values.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
    
        if (!values.message.trim()) {
          errors.message = 'Message is required';
        }

        const recaptchaValue = formik.values["g-recaptcha-response"];
        if (!recaptchaValue) {
            errors.message = 'Recaptcha is invalid';
        }
    
        return errors;
    };

    const [isLoading, setIsLoading] = useState(false);

    const [responseMessage, setResponseMessage] = useState({
        isSuccessful: false, // Set the initial state for isSuccessful
        message: '',
    });

    const sendEmail = async (email, subject, message) => {
        return axios({
            method: 'post',
            url: '/api/sendemail',
            data: {
              email: email,
              subject: subject,
              message: message,
            },
        });
    };
    

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: async (values, { resetForm } ) => {
            setIsLoading(true);
          try {
            const req = await sendEmail(values.email, values.subject, values.message);
            if (req.status === 200) {
              setResponseMessage({
                isSuccessful: true,
                message: "Thank you for your message. I'll get back to you asap.",
              });
              toast.success('Message sent successfully.');
              resetForm();
            }
          } catch (e) {
            console.log(e);
            setResponseMessage({
              isSuccessful: false,
              message: 'Oops something went wrong. Please try again later.',
            });
            toast.error('Something went wrong please try again later');
          }finally {
            setIsLoading(false);
          }
        },
    });

    return (
        <section id="contact" >
            { activeTab == 'contact' ?
            <div className="tokyo_tm_section animated active fadeInLeft">
                <div className="container">
                <div className="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
                    <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
                    <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
                        <div className="left">
                        <span className="inline-block bg-[rgba(0,0,0,.04)] uppercase py-[4px] px-[10px] font-semibold text-[12px] text-[#333] font-montserrat tracking-[0px] mb-[11px]">
                            Contact
                        </span>
                        <h3 className="font-extrabold font-montserrat">Hire Me!</h3>
                        </div>
                    </div>
                    </div>
                    <div className="text-justify mb-4">
                        <ul>
                            <li>Phone: +63 967 288-7664 | Whatsapp: +974 7193-4862</li>
                            <li>Email: sergiomanuellio@gmail.com</li>
                            <li>Location: Metro Manila, Philippines</li>
                        </ul>
                    </div>
                    {/* <div className="map_wrap w-full float-left clear-both h-auto mb-[50px]">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.367821203547!2d121.01982587585393!3d14.578104785905621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9b0a6412981%3A0xc053819ec37a9789!2sM.%20Aleataz%2C%20Mandaluyong%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sqa!4v1704783023421!5m2!1sen!2sqa" width="100%"
                            height={355}
                            id="gmap_canvas" />
                        <br />
                        <style
                            dangerouslySetInnerHTML={{
                            __html:
                                ".mapouter{position:relative;text-align:right;height:355px;width:100%;}"
                            }}
                        />
                        <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
                        <style
                            dangerouslySetInnerHTML={{
                            __html:
                                ".gmap_canvas {overflow:hidden;background:none!important;height:355px;width:100%;}"
                            }}
                        />
                        </div>
                    </div>
                    </div> */}
                    <div className="fields w-full float-left clear-both h-auto">
                        <form className="contact_form" onSubmit={formik.handleSubmit}>
                            {responseMessage.isSuccessful && 
                            <div className="returnmessage">
                                <span className="text-black">
                                    {responseMessage.message}
                                </span>
                            </div>
                            }
                            <div className="first w-full float-left">
                            <ul className="list-none">
                                <li className="w-full mb-[30px] float-left">
                                <input
                                    name="subject"
                                    {...formik.getFieldProps('subject')}
                                    type="text"
                                    placeholder="Subject"
                                />
                                {formik.touched.subject && formik.errors.subject ? (
                                    <div className="error">{formik.errors.subject}</div>
                                ) : null}
                                </li>
                                <li className="w-full mb-[30px] float-left">
                                <input
                                    name="email"
                                    {...formik.getFieldProps('email')}
                                    type="email"
                                    placeholder="Email"
                                />
                                {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}
                                </li>
                            </ul>
                            </div>
                            <div className="last">
                            <textarea
                                name="message"
                                {...formik.getFieldProps('message')}
                                placeholder="Message"
                            />
                            {formik.touched.message && formik.errors.message ? (
                        <div className="error">{formik.errors.message}</div>
                    ) : null}
                            </div>
                            <div className="my-4">
                            <ReCAPTCHA
                                sitekey="6LcFUlgpAAAAAIVGFPlw9_HMDoXstfRVVhla2p3i"
                                onChange={(value) => formik.setFieldValue("g-recaptcha-response", value)}
                            />
                            </div>
                            <div className="tokyo_tm_button" data-position="left">
                                <button
                                    type="submit"
                                    className="btn bg-black py-2 px-8 rounded-sm text-white"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            : ''
            }
        </section>
      )
}

export default ContactContainer