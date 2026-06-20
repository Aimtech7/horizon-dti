// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            // Validate required fields
            if (!firstName || !lastName || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Validate email
            if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Validate phone if provided
            if (phone && !validatePhone(phone)) {
                alert('Please enter a valid phone number.');
                return;
            }
            
            // Simulate form submission
            // In production, this would send data to a server
            console.log('Form submitted:', {
                firstName,
                lastName,
                email,
                phone,
                subject,
                message
            });
            
            // Show success message
            alert('Thank you for your message! We will get back to you within 24 hours.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone validation function (Kenya format)
function validatePhone(phone) {
    const re = /^(\+254|0)[1-9]\d{8}$/;
    return re.test(phone);
}
