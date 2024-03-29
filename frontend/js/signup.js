//form submission
async function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('userAccountSetupForm');
    const formData = new FormData(form);

    try {
        const response = await fetch('http://127.0.0.1:3333/auth/register', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            // Successful response, handle accordingly (redirect, show success message, etc.)
            console.log('Registration successful');
        } else {
            // Handle errors (show error message, log errors, etc.)
            console.error('Registration failed');
        }
    } catch (error) {
        console.error('Error during registration:', error);
    }
}

/*customer-reviews curousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});
/****************************/




/***Mult-step form navigation function***/
/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
const navigateToFormStep = (stepNumber) => {
    /**
     * Hide all form steps.
     */
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("d-none");
    });
    /**
     * Show the current form step (as passed to the function).
     */
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
};
/**
 * Select all form navigation buttons, and loop through them.
 */
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
    /**
     * Add a click event listener to the button.
     */
    formNavigationBtn.addEventListener("click", () => {
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        /**
         * Call the function to navigate to the target form step.
         */
        navigateToFormStep(stepNumber);
    });
});

/**********************************************************************/
