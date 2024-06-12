function score(arrayOfNum) {
const array = arrayOfNum;
let counterOfPoints = 0;

function GetValueOfNum(number, array) {
   const counterOfNumbers = array.filter((num) => num == number);
   console.log({number: counterOfNumbers});
    return {number: counterOfNumbers}
} 

for (let i = 1; i <= 6; i++) {
    const valuesOfNum = Array.from(GetValueOfNum(i,array));
    // console.log(valuesOfNum);
}


// return counterOfPoints;
}

console.log(score([4,1,4,3,3]))