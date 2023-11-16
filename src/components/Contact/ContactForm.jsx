// imports
import { useState } from "react"
import { useRef } from "react"
import emailjs from '@emailjs/browser'

// css
import './ContactForm.css'

const ContactForm = () => {
  const form = useRef(null)

  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_arz7n5g', 'template_ky39eml', form.current, 'v21XN9-ZM2Na25q3d')
      .then((result) => {
          console.log(result.text)
          setStatus('SUCCESS')
      }, (error) => {
          console.log(error.text)
          setStatus('ERROR')
      })
      e.target.reset()
  }

  const renderAlert = () => (
    <div>
      <p>Your message was submitted successfully!</p>
    </div>
  )

  return (  
    <>
      <div className="container">
        {status === 'SUCCESS' && renderAlert(form.current['user_email'].value)}
        {status === 'ERROR' && <p>Error submitting the form. Please try again later.</p>}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Full Name" name='user_name' required />
          <input type="email" placeholder="Your Email" name='user_email' required />
          <input type="text" placeholder="Subject" name='subject' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder="Write your message here..."></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
