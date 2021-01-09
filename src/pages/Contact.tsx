import React from "react"

export default () => (
  <React.Fragment>
    <div className="contact-container flex-container justify-content-center row">
      <section className="grid-contact-container">
        <form action="" className="border-shadow contact-form flex-container col justify-content-center align-items-center">
          <h1>CONTACT US</h1>
          <div className="flex-container col">
            <label >Name</label>
            <input type="text" id="name" name="name" placeholder="Your name"  ></input>
          </div>
          <div className="flex-container col" >
            <label >Email address</label>
            <input type="text" id="email" name="email" placeholder="Your email address" ></input>
          </div>
          <div className="flex-container col">
            <label >Message</label>
            <textarea name="text" id="text" placeholder="Your message"></textarea>
          </div>
          <button className="btn mt-15">Send</button>
          <div className="center-all flex-container  col info-container">
            <div className="spin-container" >
              <div className="loading-spinner"></div>
            </div>
            <div className="message-info "></div>
          </div>
        </form>
        <div className="contact-details flex-container col align-content-center justify-content-center">
          <p>+ 44 758390368930</p>
          <p>12 Church Street</p>
          <p>Kettering</p>
          <p>NN14 7HG</p>
          <p>info@squarelinetransport.com</p>
        </div>
        <div className="follow-us flex-container col align-content-center justify-content-center">
          <h2>FOLLOW US</h2>
          <p>FACEBOOK</p>
          <p>INSTAGRAM</p>
          <p>TWITTER</p>
        </div>
      </section>
    </div>
  </React.Fragment>
)
