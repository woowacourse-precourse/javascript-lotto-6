import LottoTypeConversion from './LottoTypeConversion.js';
import ERROR from '../Constants/Error.js';
import { NUMBER, DELIMITER, REGEXP } from '../Constants/LottoGame.js'

const Validator = {
  numberType(input) {
    const isNotNumber = REGEXP.isNotNumber;
    if (isNotNumber.test(input)) throw (ERROR.notNumber)
  },

  buyLottoMinimumOrder(amount) {
    if (amount < NUMBER.price) throw (ERROR.lottoMinimumOrder);
  },

  buyLottoUnit(amount) {
    if (amount % NUMBER.price) throw (ERROR.lottoPriceUnit);
  },

  winningNumbersType(numbers) {
    LottoTypeConversion.winningNumbers(numbers).map((number) => this.numberType(number));
  },

  commaSeparatedWinningNumbers(numbers) {
    if (numbers.indexOf(DELIMITER.winningNumbers) === - 1 || numbers.indexOf(DELIMITER.winningNumbers) === numbers.length - 1) {
      throw (ERROR.commaWinningNumbers);
    }
  }
}

export default Validator;
