import LOTTO from '../constant/Lotto.js';
import LottoNumber from '../domain/LottoNumber.js';

class Parser {
  static parseInt(input) {
    // 가공되지 않은 의미로 input이라고 작성
    return Number(input);
  }

  static parseLotto(input) {
    const numArr = Array.isArray(input) ? input : input.split(LOTTO.delimiter);

    return this.parseArrToLottoNumber(numArr);
  }

  static parseToFixed(input, limit) {
    return parseFloat(input.toFixed(limit));
  }

  static parseArrToLottoNumber(arr) {
    return arr.map((num) => new LottoNumber(num));
  }
}

export default Parser;
