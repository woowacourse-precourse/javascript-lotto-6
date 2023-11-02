class Is {
  static positiveIntegerString(string) {
    if (string.trim() === '') return false;
    if (Number.isNaN(Number(string))) return false;
    if (Number(inputString) !== parseInt(inputString)) return false;
    return true;
  }
}
export default Is;
