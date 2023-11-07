class CalculateRateOfReturn {
  calculate(rankMatchArray, numberOfLotto) {
    const MONEY = numberOfLotto * 1000;
    const FIFTH_PLACE = 5000 * rankMatchArray[0];
    const FOURTH_PLACE = 50000 * rankMatchArray[1];
    const THIRD_PLACE = 1500000 * rankMatchArray[2];
    const SECOND_PLACE = 30000000 * rankMatchArray[3];
    const FIRST_PLACE = 2000000000 * rankMatchArray[4];

    const TOTAL =
      FIFTH_PLACE + FOURTH_PLACE + THIRD_PLACE + SECOND_PLACE + FIRST_PLACE;
    const RATE_OF_RETURN = ((TOTAL / MONEY) * 100).toFixed(1);
    return RATE_OF_RETURN;
  }
}

export default CalculateRateOfReturn;
