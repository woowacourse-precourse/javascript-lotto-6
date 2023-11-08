class LottoNumbersError extends Error {
  constructor(message) {
    super("[ERROR] " + message);
    this.name = "LottoNumbersError";
  }
}

export default LottoNumbersError;
