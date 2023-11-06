import LOTTO from '../constant/Lotto.js';

class Parser {
  static parseInt(input) {
    // 가공되지 않은 의미로 input이라고 작성
    return Number(input);
  }

  static parseLotto(input) {
    return input.split(LOTTO.delimiter).map(Number);
  }

  static parseToFixed(input, limit) {
    return parseFloat(input.toFixed(limit));
  }
}

export default Parser;
