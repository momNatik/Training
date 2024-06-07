function* GetPointsOfCircle(n) {
    const r = 1;
    let deltaAngle = Math.PI * 2 / n;
    let angle = deltaAngle;
    let point = {
        x: 1,
        y: 0
    }
    for (let i = 0; i < n; i++) {
        yield point;
        point.x = r * Math.cos(angle);
        point.y = r * Math.sin(angle);
        angle += deltaAngle;
    }
}

const points = Array.from(GetPointsOfCircle(5))

console.log("Points: ", points);
