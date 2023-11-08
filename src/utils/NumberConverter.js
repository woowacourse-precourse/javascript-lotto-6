export class NumberConverter {
  static splitIntoThreeDigitWithComma(inputNum) {
    return inputNum.toLocaleString('ko-KR');
  }
  static splitIntoThreeDigitWithCommaContainingDecimalPoint(inputNum, decimal) {
    return inputNum.toLocaleString('ko-KR', {
      minimumFractionDigits: decimal,
      maximumFractionDigits: decimal,
    });
  }
}
