// components
import ContactForm from "../../components/Contact/ContactForm"

// css
import './Contact.css'

const Contact = () => {
  return ( 
    <>
    <h1 className="lets-chat">Let's Chat!</h1>
    <h3 className="say-hello">Say hello using the form below, or visit my LinkedIn and GitHub profiles by clicking the icons below!</h3>
    <ContactForm />
    <div className="contact-links">
      <a href="https://github.com/brooklinlee"><img src="./src/assets/6.svg" alt="GitHub Logo" /></a>
      <a href="http://www.linkedin.com/in/brooklin-lee"><img src="./src/assets/7.svg" alt="LinkedIn Logo" /></a>
    </div>
    </>
  )
}

export default Contact