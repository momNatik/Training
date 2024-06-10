function* GetPointsOfCircle(x0, y0, r, n) {
    let deltaAngle = Math.PI * 2 / n;
    let angle = 0;

    for (let i = 0; i < n; i++) {
        let point = {
            x: x0 + r * Math.cos(angle),
            y: y0 + r * Math.sin(angle)
        };
        yield point;
        angle += deltaAngle; 
    }
}
const points = Array.from(GetPointsOfCircle(0, 0, 1, 5))

console.log("Points: ", points);
