class LottoCenter {
  #publishedLottoList = [];

  #lottoResultsList = {};

  constructor(publishedLottoList) {
    this.#publishedLottoList = publishedLottoList;
    this.#lottoResultsList = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
  }
}

export default LottoCenter;