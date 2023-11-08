import Lotto from "./Lotto.js"

class Computer {
  static purchaseList(lottoNumber) {
    const purchaseQuantity = lottoNumber / 1000
    return purchaseQuantity
  }

  static randomNumberList(purchaseNumber) {
    let lottoList =[];
    for (let i = 0; i < purchaseNumber; i++) {
    lottoList.push(Lotto.pickRandomNumber());
    }
    return lottoList;
  }

  static lotto(lottoNumber,lottoList) {
    return lottoNumber.split(',').filter(x => lottoList.includes(x));
  }
}

export default Computer;