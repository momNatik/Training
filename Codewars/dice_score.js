function score(arrayOfDice) {
    const array = arrayOfDice;
    let score = 0;
    const numbersCount = Array(6).fill(0);

    for (let i = 0; i < array.length; i++) {
        const a = array[i];
        numbersCount[a - 1]++;
    }

    function GetScore(diceCount, diceIndex) {
        if (diceCount == 0) {
            return
        }
        if (diceCount >= 3) {
            if (diceIndex + 1 == 1) {
                score += 1000;
            } else {
                score += 100 * (diceIndex + 1);
            }
            diceCount = diceCount - 3;
        }

        if (diceIndex + 1 == 1) {
            score += 100 * diceCount;
        } else if (diceIndex + 1 == 5) {
            score += 50 * diceCount;
        }
    }

    numbersCount.map(GetScore);

    return score;
}

console.log(score([4, 1, 4, 4, 3]));