class Is {
  static positiveIntegerString(string) {
    if (typeof string !== 'string') return false;
    if (string.trim() === '') return false;
    if (Number.isNaN(Number(string))) return false;
    if (Number(string) !== parseInt(string)) return false;
    if (Number(string) <= 0) return false;
    return true;
  }

  static multiplesInPositive(number, targetNumber) {
    if (number <= 0) return false;
    if (number % targetNumber === 0) return true;
    return false;
  }
}
export default Is;
