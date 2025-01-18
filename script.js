// Registro de usuarios
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim(); // Nombre de usuario
    const password = document.getElementById('password').value.trim(); // Contraseña

    if (username && password) {
        // Guardar usuario y contraseña en localStorage
        localStorage.setItem(username, password);
        alert('Usuario registrado con éxito');
        document.getElementById('registerForm').reset();
    } else {
        alert('Por favor, completa todos los campos');
    }
});

// Login de usuarios
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const storedPassword = localStorage.getItem(username); // Recuperar contraseña del usuario

    if (storedPassword === password) {
        alert('Login exitoso');
        window.location.href = 'dashboard.html'; // Redirigir al dashboard
    } else {
        alert('Credenciales incorrectas');
    }
});

// Lógica del dashboard
if (window.location.pathname.includes('dashboard.html')) {
    const ctx = document.getElementById('btcChart').getContext('2d');
    let btcData = {
        labels: ['Apertura', 'Cierre'],
        datasets: [
            {
                label: 'Precio de Bitcoin (BTC)',
                data: [20000, 25000],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const btcChart = new Chart(ctx, {
        type: 'bar',
        data: btcData,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                title: { display: true, text: 'Gráfica de Precios de Bitcoin (BTC)' },
            },
        },
    });

    document.getElementById('btcForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const openPrice = parseFloat(document.getElementById('openPrice').value);
        const closePrice = parseFloat(document.getElementById('closePrice').value);

        if (!isNaN(openPrice) && !isNaN(closePrice)) {
            btcData.datasets[0].data = [openPrice, closePrice];
            btcChart.update();
            alert('Gráfica actualizada con éxito');
        } else {
            alert('Por favor, ingresa valores válidos');
        }
    });
}
