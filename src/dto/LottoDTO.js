class LottoDto {
  static getResponse(lotto) {
    return lotto.map((lottoNumber) => lottoNumber.get());
  }
}

export default LottoDto;
