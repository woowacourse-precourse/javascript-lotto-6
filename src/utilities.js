import { Random } from '@woowacourse/mission-utils';
import {
  RANGE_MIN,
  RANGE_MAX,
  LOTTO_LENGTH,
  keys,
  errorMessages,
} from './constants.js';

export const generateRandomNumbers = () => {
  const randomNumbers = Random.pickUniqueNumbersInRange(
    RANGE_MIN,
    RANGE_MAX,
    LOTTO_LENGTH,
  );
  randomNumbers.sort((a, b) => a - b);
  return randomNumbers;
};

export const validatePurchase = (input) => {
  const amount = Number(input);
  const remainder = amount % 1000;

  if (Number.isNaN(amount)) throw new Error(errorMessages.NAN);
  if (amount < 0) throw new Error(errorMessages.NEGATIVE_AMOUNT);
  if (remainder) throw new Error(errorMessages.PURCHASE_AMOUNT);
};

export const validateBonusNumber = (lotto, bonus) => {
  const winningNumbers = lotto.getLottoNumbers();
  const bonusNumber = Number(bonus);

  if (Number.isNaN(bonusNumber)) throw new Error(errorMessages.NAN);
  if (bonus.includes('.')) throw new Error(errorMessages.DECIMALS);
  if (winningNumbers.includes(bonusNumber))
    throw new Error(errorMessages.DUPLICATES);
  if (bonusNumber < RANGE_MIN || bonusNumber > RANGE_MAX)
    throw new Error(errorMessages.RANGE);
};

export const getScoreKey = (count, ticket, bonusNumber) => {
  if (count === 3) return keys.THREE;
  if (count === 4) return keys.FOUR;
  if (count === 5 && !ticket.includes(bonusNumber)) return keys.FIVE;
  if (count === 5 && ticket.includes(bonusNumber)) return keys.FIVE_BONUS;
  if (count === 6) return keys.SIX;

  return null;
};

export const getEarnings = (key) => {
  if (key === keys.THREE) return 5000;
  if (key === keys.FOUR) return 50000;
  if (key === keys.FIVE) return 1500000;
  if (key === keys.FIVE_BONUS) return 30000000;
  if (key === keys.SIX) return 2000000000;

  return null;
};

export const calculatePercentageProfit = (moneySpent, moneyEarned) => {
  const percentageProfit = (moneyEarned / moneySpent) * 100;
  return percentageProfit.toFixed(1);
};
