function convertToPolar() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x) * (180 / Math.PI);

    document.getElementById('polar-output').innerText = `R: ${r.toFixed(2)}, Theta: ${theta.toFixed(2)}°`;
}

function convertToRectangular() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value) * (Math.PI / 180);
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);

    document.getElementById('rectangular-output').innerText = `X: ${x.toFixed(2)}, Y: ${y.toFixed(2)}`;
}
