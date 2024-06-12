function score(arrayOfNum) {
    let counterOfPoints = 0;
    const sortArray = arrayOfNum.sort((a, b) => a - b);
    const indexOfNum = [];

    for (let i = 1; i <= 6; i++) {
        const index = (element) => element == i;
        indexOfNum[i - 1] = sortArray.findLastIndex(index);
        if (indexOfNum[i - 1] != -1) {
            if (i == 1) {
                if (indexOfNum[i - 1] == 2) {
                    counterOfPoints += 1000;
                } else if (indexOfNum[i - 1] == 0) {
                    counterOfPoints += 100;
                }
            }
            if (i == 2) {
                if (indexOfNum[i - 1] == 2) {
                    counterOfPoints += 200;
                }
            }
        }
    }

    return counterOfPoints;
}

console.log(score([4, 1, 4, 3, 3]))


    // function GetValueOfNum(number, array) {
    //     const counterOfNumbers = array.filter((num) => num == number);
    //     const obj = {};
    //     obj[number] = counterOfNumbers;
    //     return obj;
    // }
    // const valuesOfNum = [];
    // for (let i = 1; i <= 6; i++) {
    //     valuesOfNum[i - 1] = GetValueOfNum(i, array);
    // }
    // console.log(valuesOfNum);