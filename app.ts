document.getElementById('contactForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLInputElement).value;
    const formData = { name,email,contact,subject,message };
    try {
        const response = await fetch('https://671685493fcb11b265d2bea8.mockapi.io/Contact_data',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Submission Failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});