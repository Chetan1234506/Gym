import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="All-banner">
        <div className="container">
          <h1> CONTACT</h1>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="contact-main">
          <form>
          <div className="input-block">
      <label> Name
        <input type="text" placeholder='Your name' />
      </label>
      </div>
      <div className="input-block">
      <label> EMAIL
        <input type="email" placeholder='your email' />
      </label>
      </div>
      <div className="input-block">
      <label>Phone No
        <input type="text" placeholder='Phone No.' />
      </label>
      </div>
      <div className="input-block">
      <label> Message
        <textarea name="" id="" cols="30" rows="10"> Message </textarea>
      </label>
      </div>
      <div className="input-block">
      <button type = 'submit'>  submit</button>
      </div>
    </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
