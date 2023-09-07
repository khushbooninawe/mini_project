function validate()
{
    var name=document.getElementById("firstname").value ;
    var lastname=document.getElementById("lastname").value ;
    var country=document.getElementById("country").value;
    var orgname=document.getElementById("organizationname").value;
    var orgsite=document.getElementById("organizationsite").value;
    var work=document.getElementById("work").value;
    // var check=document.getElementById("checkbox").value;
    var formValid=false;


if(
    validateFirstname(name,formValid)&&
    validateLastname(lastname,formValid)&&
    
    validateCountry(country,formValid)&&
    validatOrgname(orgname,formValid)&&
    validateOrgsite(orgsite,formValid)&&
    validateWork(work,formValid)
 
)

    {
        alert=("Form is submitted");
     document.getElementById("firstname").value=" ";
     document.getElementById("lastname").value=" ";
      document.getElementById("country").value=" ";
     document.getElementById("organizationname").value=" ";
     document.getElementById("organizationsite").value=" ";
     document.getElementById("work").value=" ";
    }
}
function validateFirstname(firstname, formValid) {
    if (firstname.trim() === "") {
      document.getElementById("firstname-error").innerHTML = "This is required";
      formValid = false;
    } else if (name.trim().length <= 3) {
      document.getElementById("firstname-error").innerHTML =
        "Please enter more tahn 3 characters";
      formValid = false;
    } else {
      document.getElementById("firstname-error").innerHTML = "";
      formValid = true;
    }
  
    return formValid;
  }

  function validatelastname(lastname, formValid) {
    if (lastname.trim() === "") {
      document.getElementById("lastname-error").innerHTML = "This is required";
      formValid = false;
    } else if (name.trim().length <= 3) {
      document.getElementById("lastname-error").innerHTML =
        "Please enter more tahn 3 characters";
      formValid = false;
    } else {
      document.getElementById("lastname-error").innerHTML = "";
      formValid = true;
    }
  
    return formValid;
  }


  function validateCountry(country, formValid) {
    if (country.trim() === "") {
      document.getElementById("country-error").innerHTML = "This is required";
      formValid = false;
    } else if (name.trim().length <= 3) {
      document.getElementById("country-error").innerHTML =
        "Please enter more tahn 3 characters";
      formValid = false;
    } else {
      document.getElementById("country-error").innerHTML = "";
      formValid = true;
    }
  
    return formValid;
  }
  
function validateEmail(email, formValid) {
    var pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!pattern.test(email)) {
      document.getElementById("email-error").innerHTML = "This is invalid";
      formValid = false;
    } else {
      document.getElementById("work-error").innerHTML = "";
      formValid = true;
    }
  
    return formValid;
  }
  function validateNumber(number, formValid) {
    if (number.trim() === "") {
      document.getElementById("number-error").innerHTML = "This is required";
      formValid = false;
    } else if (number.trim().length != 10) {
      document.getElementById("number-error").innerHTML =
        "Please enter valid number";
      formValid = false;
    } else {
      document.getElementById("number-error").innerHTML = "";
      formValid = true;
    }
  
    return formValid;
  }

//   function validateAge(age, formValid) {
//     if (age.trim() == "") {
//       document.getElementById("age-error").innerHTML = "This is required";
//       formValid = false;
//     } else if (age.trim().length > 3) {
//       document.getElementById("age-error").innerHTML = "Please enter valid age";
//       formValid = false;
//     } else {
//       document.getElementById("age-error").innerHTML = "";
//       formValid = true;
//     }
  
//     return formValid;
//   }

//   function validateDesignation(designation, formValid) {
//     if (age.trim() == "") {
//       document.getElementById("designation-error").innerHTML = "This is required";
//       formValid = false;
//     } else if (age.trim().length > 3) {
//       document.getElementById("designation-error").innerHTML = "Please enter valid age";
//       formValid = false;
//     } else {
//       document.getElementById("designation-error").innerHTML = "";
//       formValid = true;
//     }
  
//     return formValid;
//   }

//   function validateFiles(files, formValid) {
//     if (age.trim() == "") {
//       document.getElementById("file-error").innerHTML = "This is required";
//       formValid = false;
//     } else if (age.trim().length > 3) {
//       document.getElementById("file-error").innerHTML = "Please enter valid age";
//       formValid = false;
//     } else {
//       document.getElementById("file-error").innerHTML = "";
//       formValid = true;
//     }
  
//     return formValid;
//   }

  document.getElementById("submit").addEventListener("click",validate);2