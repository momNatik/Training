function sumOfN(n) {
    const sequenceOfN = [0];

    for (let i = 1; i <= Math.abs(n); i++) {
        const lastElem = sequenceOfN[i - 1];
        let elem;
        if (n > 0) {
            elem = lastElem + i;
        } else {
            elem = lastElem - i;
        }

        sequenceOfN.push(elem);
    }
    return sequenceOfN;
}

// console.log(sumOfN(-3));



function solution(text, markers) {

    // найти маркеры в тексте, найти окончание строки, вырезать от начала маркера до окончания строки или окончания текста, вернуть новую строку

    let cutString = text;

    const firstMarker = function (text, markers) {
        const arrOfMarkers = [];
        for (let i = 0; i < markers.length; i++) {
            const firstMarkerI = text.indexOf(markers[i]);
            if (firstMarkerI != -1) {
                arrOfMarkers.push(firstMarkerI);
            }
        }
        const firstInclusion = Math.min(...arrOfMarkers);
        return firstInclusion;
    }

    // console.log(firstMarker('aa bb/n cc/n !dd', ['#', '!']));

    // в firstmarker каждый раз должен попадать отредактированный текст
    // если маркеры или /n не найдены, будет возвращен -1

    let cutStart = firstMarker(cutString, markers);
    console.log('Start', cutStart);

    let cutEnd = 0;
    let startOfLine = 0;

    while (cutStart != -1) {
        console.log('Start', cutStart);
        cutEnd = cutString.indexOf('/n', startOfLine);
        let subString;
        if (cutStart < cutEnd) {
            subString = cutString.substring(cutStart, cutEnd);
        } else {
            subString = cutString.substring(cutStart);
        }
        cutString = cutString.replace(subString, '');
        console.log('After', cutString);
        cutStart = firstMarker(cutString, markers);
        startOfLine = cutEnd + 2 - subString.length;
    }
    return cutString;
}

console.log(solution('aa #bb/n !cc/n #dd', ['#', '!']));