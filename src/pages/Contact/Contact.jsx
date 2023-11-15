// components
import ContactForm from "../../components/Contact/ContactForm"

// css
import './Contact.css'

const Contact = () => {
  return ( 
    <>
    <h1>Let's Chat!</h1>
    <h3>Say hello using the form below, or visit my LinkedIn and GitHub profiles by clicking the icons!</h3>
    <ContactForm />
    <a href=""><img src="./src/assets/6.svg" alt="GitHub Logo" /></a>
    <a href=""><img src="./src/assets/7.svg" alt="LinkedIn Logo" /></a>
    </>
  )
}

export default Contact