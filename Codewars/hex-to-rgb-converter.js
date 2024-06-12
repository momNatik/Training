function HexToRgb(hexString) {
    const rgb = {
        r: 0,
        g: 0,
        b: 0
    }
    const hexOnly = hexString.toLowerCase().substring(1);

    rgb.r = parseInt(hexOnly.substring(0, 2), 16);
    rgb.g = parseInt(hexOnly.substring(2, 4), 16);
    rgb.b = parseInt(hexOnly.substring(4), 16);

    return rgb;
}

console.log(Converter('#FF9933'));