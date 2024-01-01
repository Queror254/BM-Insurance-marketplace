document.addEventListener('DOMContentLoaded', function () {
    const dobInput = document.getElementById('dob');
    const dobError = document.getElementById('dobError');

    // Apply input masking for MM/DD/YYYY format
    $(dobInput).inputmask('99/99/9999', { placeholder: 'MM/DD/YYYY' });

    const picker = new Pikaday({
        field: dobInput,
        format: 'MM/DD/YYYY',
        yearRange: [1900, moment().year()],
    });

    // Attach the validation function to the input's input event for real-time validation
    dobInput.addEventListener('input', validateDOB);

    function validateDOB() {
        const dobValue = dobInput.value;
        const isValidDate = /^(\d{2})\/(\d{2})\/(\d{4})$/.test(dobValue);

        if (!isValidDate) {
            dobError.textContent = 'Please enter a valid date in the format MM/DD/YYYY.';
            return;
        }

        const dobDate = moment(dobValue, 'MM/DD/YYYY');
        const age = moment().diff(dobDate, 'years');

        if (age < 18) {
            dobError.textContent = 'You must be 18 years or older.';
        } else {
            dobError.textContent = '';
        }
    }

    // Show the date picker when the input field is focused
    dobInput.addEventListener('focus', function () {
        picker.show();
    });
});