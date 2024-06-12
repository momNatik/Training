function* GetPointsOfCircle(x, y, r, n) {
    let deltaAngle = Math.PI * 2 / n;
    let angle = 0;

    function calcPoint(a) {
        return {
            x: x + r * Math.cos(a),
            y: y + r * Math.sin(a)
        }
    }

    let p0 = calcPoint(angle);

    for (let i = 0; i < n; i++) {
        angle += deltaAngle;
        const p1 = calcPoint(angle);
        const segment = {
            x0: p0.x,
            y0: p0.y,
            x1: p1.x,
            y1: p1.y
        }
        yield segment;
        p0 = p1;
    }
}
const points = Array.from(GetPointsOfCircle(0, 0, 1, 4))

console.log("Points: ", points);
