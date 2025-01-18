if (window.location.pathname.includes('dashboard.html')) {
    // Configuración inicial de la gráfica
    const ctx = document.getElementById('btcChart').getContext('2d');
    let btcData = {
        labels: ['Apertura', 'Cierre'], // Etiquetas
        datasets: [
            {
                label: 'Precio de Bitcoin (BTC)',
                data: [20000, 25000], // Precios iniciales ficticios
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1,
            },
        ],
    };

    // Crear la gráfica
    const btcChart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfica
        data: btcData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Gráfica de Precios de Bitcoin (BTC)',
                },
            },
        },
    });

    // Formulario para actualizar precios
    document.getElementById('btcForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar recarga de página

        // Obtener valores del formulario
        const openPrice = parseFloat(document.getElementById('openPrice').value);
        const closePrice = parseFloat(document.getElementById('closePrice').value);

        if (!isNaN(openPrice) && !isNaN(closePrice)) {
            // Actualizar datos de la gráfica
            btcData.datasets[0].data = [openPrice, closePrice];
            btcChart.update(); // Actualizar la gráfica
            alert('Gráfica actualizada con éxito');
        } else {
            alert('Por favor, ingresa valores válidos');
        }
    });
}
