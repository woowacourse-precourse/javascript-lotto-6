class LottoError extends Error {
  constructor(message) {
    super('[ERROR]' + message);
    this.name = 'LottoError';
  }
}

export default LottoError;
