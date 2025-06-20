document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            let messages = [];

            if (usernameInput.value.trim() === '') {
                messages.push('Username or Email is required.');
                // You could add a class to highlight the input field
                // usernameInput.classList.add('error');
            } else {
                // usernameInput.classList.remove('error');
            }

            if (passwordInput.value.trim() === '') {
                messages.push('Password is required.');
                // passwordInput.classList.add('error');
            } else {
                // passwordInput.classList.remove('error');
            }

            if (messages.length > 0) {
                event.preventDefault(); // Stop form submission
                // You can display these messages in a dedicated error div
                // For simplicity, using alert for now.
                alert(messages.join('\n'));
            }
        });
    }

    // Optional: Add event listeners to remove error styling on input
    // const inputs = document.querySelectorAll('#loginForm input[required]');
    // inputs.forEach(input => {
    //     input.addEventListener('input', () => {
    //         if (input.value.trim() !== '') {
    //             input.classList.remove('error');
    //         }
    //     });
    // });
});
