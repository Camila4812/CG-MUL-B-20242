document.getElementById('draw').addEventListener('click', drawPolygon);
document.getElementById('clear').addEventListener('click', clearCanvas);

function drawPolygon(n, L) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    
    if (n < 3) {
        alert("El número de lados debe ser 3 o más.");
        return;
    }

    const cx = canvas.width / 2; // coordenada x del centro
    const cy = canvas.height / 2; // coordenada y del centro
    const alpha = (2 * Math.PI) / n; // ángulo para cada vértice
    const betha = Math.PI / n; // ángulo para calcular el apotema

    // Cálculo del apotema
    const a = L / (2 * Math.tan(betha));

    // Cálculo del primer vértice
    const x1 = cx + L / 2;
    const y1 = cy + a;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    // Dibujar el primer vértice
    ctx.moveTo(x1, y1);

    // Dibujar el resto de los vértices
    for (let i = 1; i < n; i++) {
        const x = cx + (x1 - cx) * Math.cos(i * alpha) - (y1 - cy) * Math.sin(i * alpha);
        const y = cy + (x1 - cx) * Math.sin(i * alpha) + (y1 - cy) * Math.cos(i * alpha);
        ctx.lineTo(x, y);
    }

    // Cerrar el polígono
    ctx.lineTo(x1, y1);

    ctx.stroke();
}

function clearCanvas() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

document.getElementById('draw').addEventListener('click', function() {
    const n = parseInt(document.getElementById('sides').value);
    const L = parseFloat(document.getElementById('dimension').value);
    drawPolygon(n, L);
});

