class Is {
  static positiveIntegerString(string) {
    if (string.trim() === '') return false;
    if (Number.isNaN(Number(string))) return false;
    if (Number(string) !== parseInt(string)) return false;
    if (Number(string) <= 0) return false;
    return true;
  }
}
export default Is;
