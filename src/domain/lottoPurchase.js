import { LOTTO_RULES } from '../constants/lottoGame.js';
import Lotto from './lotto.js';

const generateLottoNumber = (randomNumberGenerator) => {
  const { minNumber, maxNumber, size } = LOTTO_RULES;
  const randomNumbers = randomNumberGenerator.pickUniqueNumbersInRange(minNumber, maxNumber, size);
  return Lotto.fromByAscending(randomNumbers).getNumbers();
};

const calculatePurchaseCount = (purchasedLottoAmount, lottoUnit) =>
  purchasedLottoAmount / lottoUnit;

const lottoPurchase = Object.freeze({
  constants: Object.freeze({
    unit: 1_000,
    minRange: 1_000,
    maxRange: 10_000,
  }),

  generateLottoNumbers({ randomNumberGenerator, purchasedLottoAmount }) {
    const purchasedCount = calculatePurchaseCount(purchasedLottoAmount, this.constants.unit);
    return Array.from({ length: purchasedCount }, () => generateLottoNumber(randomNumberGenerator));
  },
});

export default lottoPurchase;
