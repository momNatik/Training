function* GetPointsOfCircle(x, y, r, n) {
    let deltaAngle = Math.PI * 2 / n;
    let angle = 0;

    for (let i = 0; i < n; i++) {
        let segment = {
            x0: x + r * Math.cos(angle),
            y0: y + r * Math.sin(angle),
            x1: x + r * Math.cos(angle + deltaAngle),
            y1: y + r * Math.sin(angle + deltaAngle)
        }
        yield segment;
        angle += deltaAngle; 
    }
}
const points = Array.from(GetPointsOfCircle(0, 0, 1, 4))

console.log("Points: ", points);
