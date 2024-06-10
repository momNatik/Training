function* GetPointsOfCircle(x, y, r, n) {
    let deltaAngle = Math.PI * 2 / n;
    let angle = 0;

    for (let i = 0; i < n; i++) {
        let point = {
            x: x + r * Math.cos(angle),
            y: y + r * Math.sin(angle)
        };
        yield point;
        angle += deltaAngle; 
    }
}
const points = Array.from(GetPointsOfCircle(2, 1, 3, 5))

console.log("Points: ", points);
