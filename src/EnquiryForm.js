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
                  <h3>Name</h3><input placeholder="Customer Name"/>
                  <h3>E-mail</h3><input placeholder="abc@gmail.com"/>
                  <h3>Bill Number</h3><input placeholder="Bill Number"/>
                  <h3>Phone Number</h3><input placeholder="Phone no."/>
                  <h3>Customer Enquiry</h3><textarea placeholder="Your Queries..." rows="10"></textarea>
                  <button>Submit</button>
              </form>
            </div>

        </div>
      )

}

export default EnquiryForm;