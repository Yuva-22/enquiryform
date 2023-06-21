import "./EnquiryForm.css";
import React from "react";
import { useState } from "react";

const EnquiryForm = () => {
      const [data,setData] = useState({name:"",email:"",bill:"",phone:"",query:""});
      const handleChange = (e) => {
           const name = e.target.name;
           const value = e.target.value;
           setData({...data,[name]:value})
      }
      const handleSubmit = (e) => {
          e.preventDefault()
          alert(data)


      }
      return(
        <div className="enquiry">
            <div className="head">
              <h1>ENQUIRY FORM</h1>
              <h4>If you have any queries kindly take a moment
                 to fill up this form.</h4>
              <h4>Our representatives will contact you shortly.</h4>
            </div>
            <div className="form-container">
              <form method="post" onSubmit={handleSubmit}>
                  <h3>Name :</h3>
                  <input type="text" name="name" onChange={handleChange} value={data.name} placeholder="Customer Name"/>

                  <h3>E-mail :</h3>
                  <input type="email" name="email" onChange={handleChange} value={data.email} placeholder="abc@gmail.com"/>

                  <h3>Bill Number :</h3>
                  <input name="bill" onChange={handleChange} value={data.bill} placeholder="Bill Number"/>

                  <h3>Phone Number :</h3>
                  <input type="phone" name="phone" onChange={handleChange} value={data.phone} placeholder="Phone no."/>

                  <h3>Customer Enquiry :</h3>
                  <textarea name="query" placeholder="Your Queries..." onChange={handleChange} value={data.query} rows="10"></textarea>


                  <div className="btnclass">
                    <button className="submit">Submit</button>
                    <button className="reset">Reset</button>
                  </div>
                  
              </form>
            </div>

        </div>
      )

}

export default EnquiryForm;