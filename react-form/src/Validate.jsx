const validateField = (name, value, formData) => {
    switch (name) {
      //Display error message if the name textbox is empty or contains less than 3 charcters
//---------------------------------------------[First Name]---------------------------------------------- 
    case "fname":
        if (value.length === 0) {
          return "First Name is required";
        }
        
        if (value.length < 4) {
          return "Name Should be Atleast 3 characters Long";
        }
        //if not empty and more that 3 charcters,then entered data is updated in formData
        return "";
//--------------------------------------------[User Name]--------------------------------------------------------
    case "uname":
        if (value.length === 0) {
          return "User Name is required";
        }
        
        if (value.length < 4) {
          return "Username should contain capital and small characters ";
        }
        //if not empty and more that 3 charcters,then entered data is updated in formData
        return "";
//--------------------------------------------[Email]--------------------------------------------------------
    case "email":
        //Display error message if the email is empty or not in correct format, using regular expression.
        if (!value) {
          return "Email is required";
        }
        if (!/\S+@\S+\.\S+/.test(value)) {
          return "Email is invalid";
        }
        //if not empty and correct email format, then entered data is updated in formData
        return "";
//--------------------------------------------[Password]--------------------------------------------------------
    case "password":
        if (!value) {
          return "Password is required";
        }
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        return "";
    // case "confirmPassword":
    //     if (!value) {
    //       return "Confirm Password is required";
    //     }
    //     if (value !== formData.password) {
    //       return "Passwords do not match";
    //     }
    //     return "";
//--------------------------------------------[Gender]--------------------------------------------------------
    case "gender":
        if (!value) {
          return "Gender is required";
        }
        return "";
//--------------------------------------------[Phone Number]--------------------------------------------------------
    case "phno":
        if (!value.length) {
          return "Phone Number is required";
        }
        return "";
//--------------------------------------------[Country]--------------------------------------------------------
    case "country":
        if (!value) {
          return "Country is required";
        }
        return "";
//--------------------------------------------[Country Code]--------------------------------------------------------
    case "countryCode": 
        if (!value) {
          return "Country Code is required";
        }
        return "";
//--------------------------------------------[City]--------------------------------------------------------
    case "city": 
        if (!value) {
          return "City is required";
        }
        return "";
//--------------------------------------------[PAN Number]--------------------------------------------------------
    case "panNo": 
        if (!value) {
          return "PAN Number is required";
        }
        return "";
//--------------------------------------------[Aadhar Number]--------------------------------------------------------
    case "aadharNo": 
        if (!value) {
          return "Aadhar Number is required";
        }
        return "";


    default:
        return "";
    }
  };
  export default validateField;
  