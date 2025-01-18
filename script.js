// Registro de usuarios
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem(username, password);
    alert('Usuario registrado con éxito');
});

// Login de usuarios
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === password) {
        alert('Login exitoso');
        window.location.href = 'dashboard.html';
    } else {
        alert('Credenciales incorrectas');
    }
});

// Dashboard: Actualizar saldo y mostrar gráficos
if (window.location.pathname.includes('dashboard.html')) {
    const balanceElement = document.getElementById('balance');

    // Mostrar saldo
    const storedBalance = localStorage.getItem('balance') || 0;
    balanceElement.textContent = storedBalance;

    // Actualizar saldo
    window.updateBalance = function () {
        const newBalance = parseInt(document.getElementById('addBalance').value) || 0;
        const totalBalance = parseInt(storedBalance) + newBalance;
        localStorage.setItem('balance', totalBalance);
        balanceElement.textContent = totalBalance;
        alert('Saldo actualizado');
    };

    // Gráficos de mercados
    const ctx = document.getElementById('marketChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            datasets: [
                {
                    label: 'Mercado Global',
                    data: [100, 200, 300, 400, 500],
                    borderColor: 'blue',
                    borderWidth: 2,
                },
            ],
        },
    });
}
