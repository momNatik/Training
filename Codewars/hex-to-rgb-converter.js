function ConverterHexToRgb(hexString) {
    const rgb = {
        r: 0,
        g: 0,
        b: 0
    }
    const trimHexString = hexString.toLowerCase().substring(1);

    rgb.r = parseInt(trimHexString.substring(0, 2), 16);
    rgb.g = parseInt(trimHexString.substring(2, 4), 16);
    rgb.b = parseInt(trimHexString.substring(4), 16);

    return rgb;
}

console.log(Converter('#FF9933'));