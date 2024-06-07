function* GetPointsOfCircle(n) {
    const r = 1;
    let deltaAngle = Math.PI * 2 / n;
    let point = [1, 0];
    let index = 0;
    let cornerOfPoint = deltaAngle;
    while (index < n) {
        if (index > 0) {
            point[0] = r * Math.cos(cornerOfPoint).toFixed(2);
            point[1] = r * Math.sin(cornerOfPoint).toFixed(2);
            cornerOfPoint += deltaAngle;
        }
        yield point;
        index++;
    }
}


const start = PointsOnCircle(5);

console.log(start.next().value);
console.log(start.next().value);
console.log(start.next().value);
console.log(start.next().value);
console.log(start.next().value);
