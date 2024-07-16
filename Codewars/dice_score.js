function score(diceRolls) {
    const sidesRollsSum = Array(6).fill(0);

    for (let i = 0; i < diceRolls.length; i++) {
        const diceSide = diceRolls[i];
        const sideIndex = diceSide - 1;
        sidesRollsSum[sideIndex]++;
    }

    function GetScore(rollsCount, sideIndex) {
        let score = 0;
        const side = sideIndex + 1;

        if (rollsCount == 0) {
            return 0;
        }

        if (rollsCount >= 3) {
            score += (side == 1) ? 1000 : 100 * side;

            rollsCount = rollsCount - 3;
        }

        score += (side == 1) ? 100 * rollsCount : 0;
        score += (side == 5) ? 50 * rollsCount : 0;

        return score;
    }

    const scoreSum = sidesRollsSum
        .map(GetScore)
        .reduce((acc, item) => acc + item, 0);

    return scoreSum;
}

console.log(score([4, 1, 4, 4, 3]));