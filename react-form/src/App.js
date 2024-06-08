import React, { useState } from "react";
import validateField from "./Validate";
//Initialising the form fields with empty value.

const initialFormData = {
  firstName: "",
  lastName:"",
  userName:"",
  email: "",
  password: "",
  //confirmPassword: "",
  phoneNo:"",
  gender: "",
  //hobbies: [],
  countryCode:"",
  country: "",
  city:"",
  panNo:"",
  aadharNo:"",

};
const Form = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState(initialFormData);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleChange = (event) => {
    var fieldValue;
  const { name, value, type } = event.target;
    
 //Checking the type of inputs is checkbox
    //if (type === "checkbox") {
      //if (formData.hobbies.includes(value)) {
 //Checking duplication of checkbox selection of hobby is not done using filter().
        //fieldValue = formData.hobbies.filter((hobby) => hobby !== value);
      //} else {
 //Updating the formData with the selected Hobbies.
        //fieldValue = [...formData.hobbies, value];
      //}
    //} 
    //Checking the type of inputs is radio.
    // else 
    if (type === "radio") {
      fieldValue = value;
    } else {
      fieldValue = value.trim();
    }
  //Updating the form data with new value from each input.
    setFormData({ ...formData, [name]: fieldValue });
    
  //Validates the field by calling the validateField function from the Validate.js file, and passing the field name, value, and current form data.
    const error = validateField(name, fieldValue, formData);
    
 //The resulting error message is then stored in the formErrors state variable.
    setFormErrors({ ...formErrors, [name]: error });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFormErrors = {};
    //Validates all form fields by calling validateField for each field and storing the resulting error messages in a new object newFormErrors.
    Object.keys(formData).forEach((fieldName) => {
      newFormErrors[fieldName] = validateField(
        fieldName,
        formData[fieldName],
        formData
      );
    });
    setFormErrors(newFormErrors);
    //If any of the fields have errors, the form submission is aborted.
    if (Object.values(newFormErrors).some((error) => error)) {
      return;
    }
    const dataString = Object.keys(formData)
      .map((fieldName) => `${fieldName}: ${formData[fieldName]}`)
      .join("\n");
    // If there are no errors, an alert message is shown to the user with the form data and each data on newline.
    alert(`Form data:\n${dataString}`);
    // The formData and formErrors state variables are reset to their initial values using setFormData() and setFormErrors() .
    setFormData(initialFormData);
    setFormErrors({});
  };
  return (
    <form id="registration-form" onSubmit={handleSubmit}>
      <h2 className="title">Registration Form</h2>
{/*----------------------------------------------[First Name]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.fname && <span className="error">{formErrors.fname}</span>}
    </div>
{/*----------------------------------------------[Last Name]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.lname && <span className="error">{formErrors.lname}</span>}
    </div>
{/*----------------------------------------------[User Name]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="uname">User Name:</label>
        <input
          type="text"
          id="uname"
          name="uname"
          value={formData.uname}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.uname && <span className="error">{formErrors.uname}</span>}
    </div>
{/*----------------------------------------------[Email]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for email field, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.email && <span className="error">{formErrors.email}</span>}
    </div>
{/*----------------------------------------------[Password]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="password">Password:</label>
        <input
          type={passwordVisible ? 'text' : 'password'}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="button" onClick={() => setPasswordVisible(!passwordVisible)}>
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        {/* Checking whether the  formError is set for password field, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.password && (
          <span className="error">{formErrors.password}</span>
        )}
    </div>
{/*----------------------------------------------[Gender]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label>Gender:</label>
        <div className="form-row">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={handleChange}
          />
        </div>
        {/* Checking whether the  formError is set for gender field, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.gender && (
          <span className="error">{formErrors.gender}</span>
        )}
    </div>
{/*----------------------------------------------Phone Number---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="phno">Phone Number</label>
        <input
          type="text"
          id="phno"
          name="phno"
          value={formData.phno}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.phno && <span className="error">{formErrors.phno}</span>}
    </div>
{/*----------------------------------------------[Country]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="India">India</option>
          <option value="Japan">Japan</option>
          <option value="South Korea">South Korea</option>
          <option value="China">China</option>
          <option value="UK">UK</option>
        </select>
        {/* Checking whether the  formError is set for country field, if set, displaying the corresponding error message using conditional rendering*/}
        {formErrors.country && (
          <span className="error">{formErrors.country}</span>
        )}
    </div>
{/*----------------------------------------------[Country Code]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="countryCode">Country Code:</label>
        <select
          id="countryCode"
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
        >
         <option value="">Select Code</option>
          {
            formData.country === 'USA' && (
              <>
              <option value="+1">+1</option>
              </>
            )}
             {
            formData.country === 'India' && (
              <>
              <option value="+91">+91</option>
              </>
            )}
             {
            formData.country === 'Japan' && (
              <>
              <option value="+81">+81</option>
              </>
            )}
             {
            formData.country === 'South Korea' && (
              <>
              <option value="+82">+82</option>
              </>
            )}
             {
            formData.country === 'China' && (
              <>
              <option value="+86">+86</option>
              </>
            )}
              {
            formData.country === 'UK' && (
              <>
              <option value="+44">+44</option>
              </>
            )}
        </select>
        {/* Checking whether the  formError is set for country field, if set, displaying the corresponding error message using conditional rendering*/}
        {formErrors.countryCode && (
          <span className="error">{formErrors.countryCode}</span>
        )}
    </div>
{/*----------------------------------------------[City]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="city">City :</label>
        <select
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        >
         <option value="">Select City</option>
          {
            formData.country === 'USA' && (
              <>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
              <option value="Las Vegas">Las Vegas</option>
              <option value="Washington D.C.">Washington D.C.</option>
              <option value="San Francisco">San Francisco</option>
              </>
            )}
             {
            formData.country === 'India' && (
              <>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Banglore">Banglore</option>
              <option value="Chennai">Chennai</option>
              <option value="Thiruvananthapuram">Thiruvananthapuram</option>
              </>
            )}
             {
            formData.country === 'Japan' && (
              <>
              <option value="Tokyo">Tokyo</option>
              <option value="Kyoto">Kyoto</option>
              <option value="Osaka">Osaka</option>
              <option value="Hiroshima">Hiroshima</option>
              <option value="Saitama">Saitama</option>
              <option value="Nagoya">Nagoya</option>
              </>
            )}
             {
            formData.country === 'South Korea' && (
              <>
              <option value="Seoul">Seoul</option>
              <option value="Busan">Busan</option>
              <option value="Incheon">Incheon</option>
              <option value="Daegu">Daegu</option>
              <option value="Gwangju">Gwangju</option>
              <option value="Pyeongtaek-si">Pyeongtaek-si</option>
              </>
            )}
             {
            formData.country === 'China' && (
              <>
              <option value="Chongqing">Chongqing</option>
              <option value="Beijing">Beijing</option>
              <option value="Shanghai">Shanghai</option>
              <option value="Wuhan">Wuhan</option>
              <option value="Qingdao">Qingdao</option>
              <option value="Guangzhou">Guangzhou</option>
              </>
            )}
              {
            formData.country === 'UK' && (
              <>
              <option value="London">London</option>
              <option value="Oxford">Oxford</option>
              <option value="Leicester">Leicester</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Cambridge">Cambridge</option>
              <option value="Peterborough">Peterborough</option>
              </>
            )}
        </select>
        {/* Checking whether the  formError is set for country field, if set, displaying the corresponding error message using conditional rendering*/}
        {formErrors.city && (
          <span className="error">{formErrors.city}</span>
        )}
    </div>
{/*----------------------------------------------[PAN NO]---------------------------------------------------------------------------------*/}      
    <div className="form-group">
      <label htmlFor="panNo">PAN No:</label>
        <input
          type="text"
          id="panNo"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.panNo && <span className="error">{formErrors.panNo}</span>}
    </div>
{/*----------------------------------------------[Aadhar No]---------------------------------------------------------------------------------*/}
    <div className="form-group">
      <label htmlFor="aadharNo">Aadhar No:</label>
        <input
          type="text"
          id="aadharNo"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
        />
        {/* Checking whether the  formError is set for name textbox, if set displaying the corresponding error message using conditional rendering*/}
        {formErrors.aadharNo && <span className="error">{formErrors.aadharNo}</span>}
    </div>


      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
