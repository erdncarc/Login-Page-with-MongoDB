document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const l = document.getElementById('sign-in');
    const r = document.getElementById('sign-up');
    const alertBox = document.getElementById('alert');

    document.getElementById('switch-to-sign-up').addEventListener('click', () => {
        l.style.opacity = 0;
        r.style.opacity = 1;
        document.querySelector('.sign-in-container input[name="username"]').value = "";
        document.querySelector('.sign-in-container input[name="password"]').value = "";
        container.classList.add("right-panel-active");
    });

    document.getElementById('switch-to-sign-in').addEventListener('click', () => {
        l.style.opacity = 1;
        r.style.opacity = 0;
        document.querySelector('.sign-up-container input[name="name"]').value = "";
        document.querySelector('.sign-up-container input[name="email"]').value = "";
        document.querySelector('.sign-up-container input[name="phone"]').value = "";
        document.querySelector('.sign-up-container input[name="username"]').value = "";
        document.querySelector('.sign-up-container input[name="password"]').value = "";
        container.classList.remove("right-panel-active");
    });

    document.querySelector('.sign-up-container form').addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = document.querySelector('.sign-up-container input[name="name"]').value;
        const email = document.querySelector('.sign-up-container input[name="email"]').value;
        const phone = document.querySelector('.sign-up-container input[name="phone"]').value;
        const username = document.querySelector('.sign-up-container input[name="username"]').value;
        const password = document.querySelector('.sign-up-container input[name="password"]').value;

        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, phone, username, password })
        });

        const result = await response.text();
        if (response.ok) {
            alertBox.className = 'alert alert-success'
            document.querySelector('.sign-up-container input[name="name"]').value = "";
            document.querySelector('.sign-up-container input[name="email"]').value = "";
            document.querySelector('.sign-up-container input[name="phone"]').value = "";
            document.querySelector('.sign-up-container input[name="username"]').value = "";
            document.querySelector('.sign-up-container input[name="password"]').value = "";
            l.style.opacity = 1;
            r.style.opacity = 0;
            container.classList.remove("right-panel-active");

        } else { alertBox.className = 'alert alert-error'; }

        alertBox.innerText = result;
        alertBox.style.display = 'block';
        setTimeout(() => {
            setTimeout(() => alertBox.style.display = 'none', 500);
        }, 1000);
    });

    document.querySelector('.sign-in-container form').addEventListener('submit', async function (e) {
        e.preventDefault();
        const username = document.querySelector('.sign-in-container input[name="username"]').value;
        const password = document.querySelector('.sign-in-container input[name="password"]').value;

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.text();
        if (response.ok) {
            alertBox.className = 'alert alert-success'
            document.querySelector('.sign-in-container input[name="username"]').value = "";
            document.querySelector('.sign-in-container input[name="password"]').value = "";
        } else { alertBox.className = 'alert alert-error'; }

        alertBox.innerText = result;
        alertBox.style.display = 'block';
        setTimeout(() => {
            setTimeout(() => alertBox.style.display = 'none', 500);
        }, 1000);
    });
});
