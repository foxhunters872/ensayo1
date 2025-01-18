// Lógica de registro
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario recargue la página
    const username = document.getElementById('username').value; // Nombre de usuario
    const password = document.getElementById('password').value; // Contraseña

    // Guardar usuario y contraseña en localStorage
    localStorage.setItem(username, password);
    alert('Usuario registrado con éxito');
});

// Lógica de login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario recargue la página
    const username = document.getElementById('loginUsername').value; // Usuario ingresado
    const password = document.getElementById('loginPassword').value; // Contraseña ingresada

    // Verificar si el usuario y la contraseña coinciden
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        alert('Login exitoso');
        window.location.href = 'dashboard.html'; // Redirigir al dashboard
    } else {
        alert('Credenciales incorrectas');
    }
});

// Lógica del dashboard
if (window.location.pathname.includes('dashboard.html')) {
    const balanceElement = document.getElementById('balance'); // Elemento para mostrar el saldo

    // Mostrar saldo inicial
    const storedBalance = localStorage.getItem('balance') || 0; // Obtener saldo guardado o 0 si no existe
    balanceElement.textContent = storedBalance; // Mostrar saldo en pantalla

    // Función para actualizar el saldo
    window.updateBalance = function () {
        const currentBalance = parseInt(localStorage.getItem('balance') || '0'); // Saldo actual
        const newBalance = parseInt(document.getElementById('addBalance').value) || 0; // Monto ingresado
        const totalBalance = currentBalance + newBalance; // Nuevo saldo
        localStorage.setItem('balance', totalBalance); // Guardar nuevo saldo en localStorage
        balanceElement.textContent = totalBalance; // Mostrar nuevo saldo en pantalla
        alert('Saldo actualizado');
    };

    // Configuración de gráficos con Chart.js
    const ctx = document.getElementById('marketChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'], // Etiquetas del gráfico
            datasets: [
                {
                    label: 'Mercado Global',
                    data: [100, 200, 300, 400, 500], // Valores para el gráfico
                    borderColor: 'blue', // Color de la línea
                    borderWidth: 2, // Ancho de la línea
                },
            ],
        },
    });
}
