class LottoGameError extends Error {
  constructor(msg) {
    super(`[ERROR] : ${msg}`);
  }
}
export default LottoGameError;
