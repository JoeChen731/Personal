<script>
      // JavaScript code to handle form submission

      // Function to send form data to the PHP script
      function submitForm(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const form = event.target;
        const formData = new FormData(form);

        // Send a POST request to the PHP script
        fetch("send_email.php", {
          method: "POST",
          body: formData,
        })
          .then((response) => {
            if (response.ok) {
              // Form submitted successfully, hide the form and show thank-you message
              form.style.display = "none";
              document.querySelector(".thank-you-container").style.display =
                "block";
            } else {
              // Handle error here if needed
              console.error("Form submission failed.");
            }
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });
      }

      // Add a form submit event listener
      document
        .querySelector(".contact-form")
        .addEventListener("submit", submitForm);
    </script>