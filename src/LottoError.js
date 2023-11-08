export default class LottoError extends Error {
  constructor(message) {
    super(`[ERROR]: ${message}`);
  }

  static createLottoError(message) {
    return new this(message);
  }
}
