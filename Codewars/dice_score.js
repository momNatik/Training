function score(arrayOfDice) {
    const array = arrayOfDice;
    let score = 0;
    const countOfNumbers = [0,0,0,0,0,0];
    
    for (let i = 0; i < array.length; i++) {
       const a = array[i];
       countOfNumbers[a-1]++;
    }


    return score;
}

console.log(score([4, 1, 4, 3, 3]))