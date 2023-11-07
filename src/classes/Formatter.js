class Formatter {
  static numberFormat() {
    return new Intl.NumberFormat('ko-KR');
  }

  static convertToTwoDecimalPoints(number) {
    if (Math.floor(number) === number) {
      return number;
    }

    return Number(number.toFixed(2));
  }
}

export default Formatter;
