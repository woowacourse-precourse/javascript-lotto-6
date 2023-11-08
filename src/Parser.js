class Parser {
  static stringToNumber(text) {
    let num = 0;
    try {
      num = parseInt(text);
    } catch (e) {
      throw new Error('[ERROR]');
    }
    return Number(text);
  }
  static stringToArray(text) {
    return text.split(',').map((str) => str.trim());
  }
}
export default Parser;
