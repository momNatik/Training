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

function* GetSegmenstFromPoints(points) {
   for (let i = 0; i < points.length - 1; i++) {
    let segment = {
        x0: points[i].x,
        y0: points[i].y,
        x1: points[i+1].x,
        y1: points[i+1].y
    }
    yield segment;
   }
}

const segments = Array.from(GetSegmenstFromPoints(points));

console.log("Segments: ", segments);