class Parser {
  static stringToNumber(text) {
    return Number(text);
  }
  static stringToArray(text) {
    return text.split(',').map((str) => str.trim());
  }
}
export default Parser;
