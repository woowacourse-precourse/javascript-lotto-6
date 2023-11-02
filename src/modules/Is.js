class Is {
  static positiveIntegerString(string) {
    if (typeof string !== 'string') return false;
    if (string.trim() === '') return false;
    if (Number.isNaN(Number(string))) return false;
    if (Number(string) !== parseInt(string)) return false;
    if (Number(string) <= 0) return false;
    return true;
  }

  static multiplesOf1000InPositive(number) {
    if (number % 1000 === 0) return true;
    return false;
  }
}
export default Is;
