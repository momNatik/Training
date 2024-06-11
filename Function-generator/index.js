function* GetPointsOfCircle(x, y, r, n) {
    let deltaAngle = Math.PI * 2 / n;
    let angle = 0;
    let previousPoint = {
        x: x + r * Math.cos(angle),
        y: y + r * Math.sin(angle)
    }

    for (let i = 0; i < n; i++) {
        let segment = {
            x0: previousPoint.x,
            y0: previousPoint.y,
            x1: x + r * Math.cos(angle + deltaAngle),
            y1: y + r * Math.sin(angle + deltaAngle)
        }
        yield segment;
        previousPoint = {
            x: segment.x1,
            y: segment.y1
        }
        angle += deltaAngle;
    }
}
const points = Array.from(GetPointsOfCircle(0, 0, 1, 4))

console.log("Points: ", points);
