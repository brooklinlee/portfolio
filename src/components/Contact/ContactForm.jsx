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

    emailjs.sendForm('service_bpb1zx4', 'template_5q0bnjd', form.current, 'o9GzZnJDYnTIWM8CV')
      .then((result) => {
          console.log(result.text)
          setStatus('SUCCESS')
      }, (error) => {
          console.log(error.text)
      })
      e.target.reset()
  }

  return (  
  <>
    <div className="container">
      {status && renderAlert()}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Full Name" name='user_name' required />
        <input type="email" placeholder="Email" name='user_email' required />
        <input type="text" placeholder="Subject" name='subject' required />
        <textarea name="message" id="" cols="30" rows="10" placeholder="Write your message here..."></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </>
  )
}

const renderAlert = () => (
  <div> 
    <p>Your message was submitted successfully!</p>
  </div>
)

export default ContactForm