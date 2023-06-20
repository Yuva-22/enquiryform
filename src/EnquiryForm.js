import "./EnquiryForm.css";

function EnquiryForm() {
      return(
        <div className="enquiry">
            <div className="head">
              <h1>ENQUIRY FORM</h1>
              <h4>If you have any queries kindly take a moment
                 to fill up this form.</h4>
              <h4>Our representatives will contact you shortly.</h4>
            </div>
            <div className="form-container">
              <form>
                  <h1>Name</h1><input placeholder="Name"/>
                <input placeholder="Email"/>
                <input placeholder="Subject"/>
              </form>
            </div>

        </div>
      )

}

export default EnquiryForm;