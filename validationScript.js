    // JavaScript code for form validation
	// Prevent form from submitting
      // Retrieve the input field value
      // Regular expression pattern for alphanumeric input
      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

        let docForm = document.getElementById("myForm");
        let submitBtn = docForm.childNodes[2];
        submitBtn.addEventListener("onclick", validation);
    
        let alphaNum = (/^[a-zA-Z0-9]+$/);
        function validation() {
          let inputField = document.forms.getElementById("inputField").value;
          if (inputField === "") {
            inputField.setCustomValidity("Please enter text into the field");
          } else if (!/^[a-zA-Z0-9]+$/.test(inputField)) {
            inputField.setCustomValidity("Please use a combination of letters and numbers");
          } else {
            inputField.setCustomValidity(""); 
          }
        }


    