// To handle the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from actually submitting
    const name = event.target.name.value;
    const email = event.target.email.value;

    if (name && email) {
        caution(`Thank you for reaching out, ${name}! We will respond to your inquiry at ${email} soon.`);
        event.target.reset(); // Clear the form after submitting it
    } else {
        caution("Please fill out the form with both your name and email to be submitted.");
    }
});

// The interactive Profile Cards
const profileCards = document.querySelectorAll('.profile-card');

profileCards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('h3').innerText;
        Caution(`This is ${name}'s profile!`);
    });
});