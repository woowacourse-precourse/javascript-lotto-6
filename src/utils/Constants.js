// 파일명: Constants.js
// 역할: 상수를 관리

class Constants {
  #constants;

  constructor() {
    this.#constants = {
      lottoNumberCount: 6,
      lottoNumberMax: 45,
      lottoNumberMin: 1,
      lottoPrice: 1000,
      lottoPriceUnit: 1000,
      prize: {
        3: 5000,
        4: 50000,
        5: 1500000,
        b: 30000000,
        6: 2000000000,
      },
    };
  }

  getLottoNumberCount() {
    return this.#constants.lottoNumberCount;
  }

  getLottoNumberMax() {
    return this.#constants.lottoNumberMax;
  }

  getLottoNumberMin() {
    return this.#constants.lottoNumberMin;
  }

  getLottoPrice() {
    return this.#constants.lottoPrice;
  }

  getLottoPriceUnit() {
    return this.#constants.lottoPriceUnit;
  }

  getPrize() {
    return this.#constants.prize;
  }
}

// const constants = new Constants();
// console.log(constants.getlottoNumberCount());

export default Constants;
