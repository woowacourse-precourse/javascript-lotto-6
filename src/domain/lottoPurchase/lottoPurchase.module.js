import { LOTTO_RULES } from '../../constants/lottoGame.js';
import Lotto from '../../Lotto.js';

/**
 * @param {object} randomNumberGenerator - 랜덤 숫자 생성기
 * @returns {number[]} 오름차순으로 정렬뢴 로또 번호
 */
const generateLottoNumber = (randomNumberGenerator) => {
  const { minNumber, maxNumber, size } = LOTTO_RULES;
  const randomNumbers = randomNumberGenerator.pickUniqueNumbersInRange(minNumber, maxNumber, size);
  return Lotto.fromByAscending(randomNumbers).getNumbers();
};

/**
 * @param {number} purchasedLottoAmount - 구매 로또 금액
 * @param {number} lottoUnit - 로또 하나 당 가격
 * @returns {number} 로또 구매 가능 횟수
 */
const calculatePurchaseCount = (purchasedLottoAmount, lottoUnit) =>
  purchasedLottoAmount / lottoUnit;

/**
 * @module lottoPurchase
 * 구매 로또 금액을 통해 구매 금액 만큼의 로또 번호 들을 생성하기 위한 모듈
 */
const lottoPurchase = Object.freeze({
  constants: Object.freeze({
    unit: 1_000,
    minAmount: 1_000,
    maxAmount: 10_000,
  }),

  /**
   * @param {import('../../utils/jsDoc.js').BuyLottoNumbersParams} params - 구매 로또 금액과 랜덤 숫자 생성기가 있는 매개변수
   * @returns {number[]} 구매한 금액 만큼의 로또 번호 배열
   */
  buyLottoNumbers({ randomNumberGenerator, purchasedLottoAmount }) {
    const purchasedCount = calculatePurchaseCount(purchasedLottoAmount, this.constants.unit);
    return Array.from({ length: purchasedCount }, () => generateLottoNumber(randomNumberGenerator));
  },
});

export default lottoPurchase;
