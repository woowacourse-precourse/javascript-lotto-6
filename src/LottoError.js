class LottoError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
  }
}

export default LottoError;