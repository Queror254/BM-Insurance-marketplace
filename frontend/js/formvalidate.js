console.log("Script loaded!");
//function to use google maps api ir other apis to collect user address and autofill the corresponding input fields
// using google maps api auto complete //

$(document).ready(function () {
    document.addEventListener('DOMContentLoaded', function () {
        const streetAddressInput = document.getElementById('streetaddress');
        const cityInput = document.getElementById('city');
        const stateInput = document.getElementById('state');
        const zipInput = document.getElementById('zip');

        // Set up the Google Places autocomplete for the street address
        const autocompleteStreet = new google.maps.places.Autocomplete(streetAddressInput);

        // Listen for the 'place_changed' event when a street address is selected
        google.maps.event.addListener(autocompleteStreet, 'place_changed', function () {
            const place = autocompleteStreet.getPlace();

            // Populate city, state, and zip code based on the selected place
            cityInput.value = '';
            stateInput.value = '';
            zipInput.value = '';

            place.address_components.forEach(function (component) {
                if (component.types.includes('locality')) {
                    cityInput.value = component.long_name;
                } else if (component.types.includes('administrative_area_level_1')) {
                    stateInput.value = component.short_name;
                } else if (component.types.includes('postal_code')) {
                    zipInput.value = component.long_name;
                }
            });
        });
    });

});
///



// function to validate the date of birth input

$(document).ready(function () {
    console.log("Document ready!");

    const dobInput = document.getElementById('dob');
    console.log("dobInput:", dobInput);

    const dobError = document.getElementById('dobError');
    // Apply input masking for MM/DD/YYYY format
    $(dobInput).inputmask('99/99/9999', { placeholder: 'MM/DD/YYYY' });
    console.log("Inputmask initialized");

    const picker = new Pikaday({
        field: dobInput,
        format: 'MM/DD/YYYY',
        yearRange: [1900, moment().year()],
    });

    console.log("Pikaday initialized");
    // Attach the validation function to the input's input event for real-time validation
    dobInput.addEventListener('change', validateDOB);

    function validateDOB() {
        console.log("validateDOB function triggered");
        const dobValue = dobInput.value;
        const isValidDate = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(dobValue);

        if (!isValidDate) {
            dobError.textContent = 'Please enter a valid date in the format MM/DD/YYYY.';
            return;
        }

        // Parse the date using moment.js
        const dobDate = moment(dobValue, 'MM/DD/YYYY');
        console.log("dobDate :", dobDate)

        //calculate age
        const age = moment().diff(dobDate, 'years');
        console.log("age :", age)

        if (age < 18) {
            dobError.textContent = 'You must be 18 years or older.';
            console.log("You must be 18 years or older.")
            //clear the date of birth input
            dobInput.value = '';
        } else {
            //clear error if user is 18 years and above
            dobError.textContent = '';
        }
    }

    // Show the date picker when the input field is focused
    dobInput.addEventListener('focus', function () {
        picker.show();
    });

});


//Function to enforce usa phone numbers only rule
$(document).ready(function () {
    console.log("validate phone")
    const phoneNumberInput = document.getElementById('phonenumber');
    const phoneError = document.getElementById('phoneError');

    // Apply input masking for the phone number format
    $(phoneNumberInput).inputmask({
        mask: '+1(999) 999-9999',
        placeholder: ' ',
        showMaskOnHover: false,
        showMaskOnFocus: false,
    });

    // Validate the entered phone number against NANP
    phoneNumberInput.addEventListener('blur', function () {
        const phoneNumber = phoneNumberInput.value.replace(/\D/g, ''); // Remove non-numeric characters
        const isValidPhoneNumber = /^1?[2-9]\d{2}[2-9](?!11)\d{6}$/.test(phoneNumber);

        if (!isValidPhoneNumber) {
            phoneError.textContent = 'Please enter a valid USA phone number.';
            console.log("You must be a us citizen.")
            //clear phonenumber input
            phoneNumberInput.value = '';
        }
        else {
            //clear error
            phoneError.textContent = '';
        }
    });
});
