// Add interactivity to the "Learn More" button
document.getElementById("learnMoreButton").addEventListener("click", function () {
    alert("Discover the future of smartphones with the iPhone 16 Pro!");
});

// Handle newsletter subscription
document.getElementById("subscribeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Thank you for subscribing! A confirmation email has been sent to ${email}.`);
    document.getElementById("email").value = ""; // Clear the form
});
