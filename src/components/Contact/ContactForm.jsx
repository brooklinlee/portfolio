import { useRef } from "react"
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_bpb1zx4', 'template_5q0bnjd', form.current, 'o9GzZnJDYnTIWM8CV')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
      e.target.reset()
  }

  return (  
  <>
    <div>
      <h2>Contact Brooklin</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder="Full Name" name='user_name' required />
        <input type="email" placeholder="Email" name='user_email' required />
        <input type="text" placeholder="Subject" name='subject' required />
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </>
  )
}

export default ContactForm