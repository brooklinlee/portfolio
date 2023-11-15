// import { useState } from "react";




const ContactForm = () => {


  return (  
  <>
    <div>
      <h2>Contact Brooklin</h2>
      <form action="">
        <input type="text" placeholder="Full Name" name='user_name' required />
        <input type="email" placeholder="Email" name='user_email' required />
        <input type="text" placeholder="Subject" name='subject' required />
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  </>
  )
}

export default ContactForm;