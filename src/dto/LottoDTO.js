class LottoDTO {
  static getResponse(lotto) {
    return lotto.map((lottoNumber) => lottoNumber.get());
  }
}

export default LottoDTO;
