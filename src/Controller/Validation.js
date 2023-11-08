import { NUMBERS, ERROR_MESSAGE } from '../Constants/Constants.js';

const VALIDATION = {
  isThousands(price) {
    if (price % NUMBERS.LOTTO_PRICE === 0 || price === 0) {
      return true;
    }
    return false;
  },

  isNum(any) {
    if (!Number.isNaN(any) && any > 0) {
      // isNan : 숫자가 아니면 true
      return true;
    }
    return false;
  },

  inputNothing(any) {
    if (
      typeof any === 'undefined' ||
      any === null ||
      any === '' ||
      any === 'null' ||
      any.length === 0 ||
      (typeof any === 'object' && !Object.keys(any).length)
    ) {
      return false;
    }
    return true;
  },

  isLottoNum(numbers) {
    if (
      numbers.some(
        (number) => number > NUMBERS.MAX_LOTTO || number < NUMBERS.MIN_LOTTO,
      )
    )
      return false;
    return true;
  },

  // 로또 입력 개수가 6개인지 검증
  isSix(numbers) {
    if (numbers.length !== 6) return false;
    return true;
  },

  isDuplicate(numbers) {
    if (numbers.length !== new Set(numbers).size) return false;
    return true;
  },

  // 보너스 번호가 input 번호와 중복
  isDuplicateBonus(input, bonus) {
    if (input.includes(Number(bonus))) return false;
    return true;
  },

  priceValidation(price) {
    if (!this.inputNothing(price)) throw ERROR_MESSAGE.INPUT_NOTHING;
    if (!this.isNum(price)) throw ERROR_MESSAGE.NOT_NUMBERS;
    if (!this.isThousands(price)) throw ERROR_MESSAGE.NOT_THOUSANDS;
  },

  lottoNumValidation(numbers) {
    if (!this.isSix(numbers)) throw ERROR_MESSAGE.NOT_SIX;
    if (!this.isDuplicate(numbers)) throw ERROR_MESSAGE.DUPLICATE_NUMBER;
    if (!this.isLottoNum(numbers)) throw ERROR_MESSAGE.NOT_LOTTO_NUM;
  },

  bonusValidation(input, bonus) {
    if (!this.isDuplicateBonus(input, bonus))
      throw ERROR_MESSAGE.BONUS_DUPLIDATE;
    if (!this.inputNothing(bonus)) throw ERROR_MESSAGE.INPUT_NOTHING;
    if (!this.isNum(bonus)) throw ERROR_MESSAGE.NOT_NUMBERS;
  },
};

export default VALIDATION;
