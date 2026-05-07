const form = document.querySelector("#forminfo");

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzhn6GIRuXB-v0g24zUVZx7133bpnJ_ynLUPPYmyXpshijympKUK6XwO41aiwrko2jGEw/exec', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        if (result.result === "success") {
            alert("Form submitted successfully!");
            form.reset();
        } else {
            alert("There was an error. Please try again.");
        }
    } catch (error) {
        alert("There was an error submitting the form.");
        console.error(error);
    }

});