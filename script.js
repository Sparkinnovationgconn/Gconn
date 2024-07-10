document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for all forms to handle form submissions
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // Extract form data
            const formData = new FormData(form);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Display form data in an alert (for demonstration purposes)
            alert("Form Submitted Successfully:\n" + JSON.stringify(formObject, null, 2));

            // You can add more functionality here, such as sending the data to a server
        });
    });

    // Navigation smooth scroll
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});