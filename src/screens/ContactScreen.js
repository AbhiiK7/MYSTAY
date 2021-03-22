import Header from "../components/Header";
import contact from "../img/contact.svg";

const ContactScreen = (props) => {
  return (
    <div>
      <div className="content mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-7 col-lg-7">
                  <h3 className="heading mb-4">Let's talk about everything!</h3>
                  <p>
                    <img src={contact} alt="Image" className="img-fluid" />
                  </p>
                </div>
                <div className="col-md-5">
                  <form className="mb-5" id="contactForm" name="contactForm">
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control border-2"
                          name="name"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control border-2"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-12 form-group">
                        <input
                          type="text"
                          className="form-control border-2"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-12 form-group">
                        <textarea
                          className="form-control border-2"
                          name="message"
                          id="message"
                          cols="30"
                          rows="7"
                          placeholder="Write your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12">
                        <input
                          type="submit"
                          value="Send Message"
                          className="btn btn-primary rounded-4 py-2 px-4"
                        />
                        {/* <span className="submitting"></span> */}
                      </div>
                    </div>
                  </form>

                  {/* <div id="form-message-warning mt-4"></div>  */}
                  {/* <div id="form-message-success">
                Your message was sent, thank you!
              </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactScreen;
