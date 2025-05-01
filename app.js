document.getElementById('register-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    
    try {
        const response = await fetch('http://localhost:5000/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        if (response.ok) {
            alert('User registered successfully');
        } else {
            throw new Error(data.error);
        }
    } catch (err) {
        document.getElementById('error-message').textContent = err.message;
    }
});

document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Login successful!');
            console.log('JWT Token:', data.token);
            localStorage.setItem('authToken', data.token); // Store the JWT token
        } else {
            throw new Error(data.error);
        }
    } catch (err) {
        document.getElementById('error-message').textContent = err.message;
    }
});
