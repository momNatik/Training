function HexToRgb(hexString) {
    const hexOnly = hexString.toLowerCase().substring(1);

    return {
        r: parseInt(hexOnly.substring(0, 2), 16),
        g: parseInt(hexOnly.substring(2, 4), 16),
        b: parseInt(hexOnly.substring(4), 16)
    }
}

console.log(HexToRgb('#FF9933'));