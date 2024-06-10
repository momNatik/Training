function* GetPointsOfCircle(n) {
    const r = 1;
    let deltaAngle = Math.PI * 2 / n;
    let angle = 0;

    for (let i = 0; i < n; i++) {
        let point = {
            x: r * Math.cos(angle),
            y: r * Math.sin(angle)
        };
        yield point;
        angle += deltaAngle; 
    }
}
const points = Array.from(GetPointsOfCircle(5))

console.log("Points: ", points);
