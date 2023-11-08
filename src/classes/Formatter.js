import { MAX } from "../constant/lottoConstants";

class Formatter {
  static numberFormat = new Intl.NumberFormat('ko-KR');

  static convertToTwoDecimalPoints(number) {
    if (Number.isInteger(number)) {
      return number;
    }

    return Number(number.toFixed(MAX.PROFIT_DECIMAL_LENGTH));
  }
}

export default Formatter;
