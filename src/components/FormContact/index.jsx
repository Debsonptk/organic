import { ButtonGreen } from "./style";

const FormContact = () => (
    <div className="container">
      <div className="row">
        <form>
          <div className="form-floating pb-4">
            <textarea
              className="form-control p-5"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
            >
            </textarea>
            <label htmlFor="floatingTextarea2"> Your Message </label>
          </div>
        <div className="row pb-4">
          <div className="col col-md-6">
            <input type="text"
                  className="form-control"
                  placeholder="Your Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
            />
          </div>
          <div className="col col-md-6">
            <input type="text"
                  className="form-control"
                  placeholder="Your Email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
            />
          </div>
          </div>
          <div className="col col-md-12 pb-4">
            <input type="number"
                  className="form-control"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  aria-describedby="basic-addon1"
            />
          </div>
          <div className="col col-md-12 pb-5">
            <ButtonGreen type="button" className="btn btn-lg rounded-pill">Send Email</ButtonGreen>
          </div>
        </form>
      </div>
    </div>
  );
  export default FormContact;