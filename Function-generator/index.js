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

function* GetSegmenstFromPoints(points) {
    let current = points.next();

    if (current.done) {
        return;
    }

    let p0 = current.value;

    current = points.next();
    while (!current.done) {
        const p1 = current.value;
        yield {
            x0: p0.x,
            y0: p0.y,
            x1: p1.x,
            y1: p1.y
        };

        p0 = p1;

        current = points.next();
    }
}

const points = GetPointsOfCircle(2, 1, 3, 5);
const segments = GetSegmenstFromPoints(points);

console.log("Segments: ", [...segments]);