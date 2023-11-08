import CountMatchedNumber from './CountMatchedNumber.js';

const CalculatePrize = (lottoNumbers, userNumbers, bonusNumber) => {
  const PRIZE_COUNTS = [0, 0, 0, 0, 0];

  for (let index = 0; index < lottoNumbers.length; index++) {
    const [LOTTO_NUMBERS, BONUS_NUMBER] = CountMatchedNumber(
      lottoNumbers[index],
      userNumbers,
      bonusNumber,
    );

    if (LOTTO_NUMBERS === 6) PRIZE_COUNTS[0] += 1;
    if (LOTTO_NUMBERS === 5 && BONUS_NUMBER) PRIZE_COUNTS[1] += 1;
    if (LOTTO_NUMBERS === 5 && !BONUS_NUMBER) PRIZE_COUNTS[2] += 1;
    if (LOTTO_NUMBERS === 4) PRIZE_COUNTS[3] += 1;
    if (LOTTO_NUMBERS === 3) PRIZE_COUNTS[4] += 1;
  }

  return PRIZE_COUNTS;
};

export default CalculatePrize;
