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

export class ArrayConverter {
  static convertArrayToString(arr) {
    return `[${arr.join(', ')}]`;
  }
}
