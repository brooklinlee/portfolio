// components
import ContactForm from "../../components/Contact/ContactForm"

// css
import './Contact.css'

// images
import github from '../../assets/images/github.svg'
import linkedIn from '../../assets/images/linkedin.svg'

const Contact = () => {
  return ( 
    <>
    <h1 className="lets-chat">Let's Chat!</h1>
    <h3 className="say-hello">Say hello using the form below, or visit my LinkedIn and GitHub profiles by clicking the icons below!</h3>
    <div className="contact-links">
      <a href="https://github.com/brooklinlee"><img src={github} alt="GitHub Logo" /></a>
      <a href="http://www.linkedin.com/in/brooklin-lee"><img src={linkedIn} alt="LinkedIn Logo" /></a>
    </div>
    <ContactForm />
    </>
  )
}

export default Contact