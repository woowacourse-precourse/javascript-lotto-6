class Formatter {
  static numberFormat = new Intl.NumberFormat('ko-KR');

  static convertToTwoDecimalPoints(number) {
    if (Number.isInteger(number)) {
      return number;
    }

    return Number(number.toFixed(2));
  }
}

export default Formatter;
