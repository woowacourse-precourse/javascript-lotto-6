import { checkInputTypeIsNumber, checkInputDividedBy1000 } from "./Validation";

class Purchase {
  #purchasePrice; //purchasePrice: 구입금액
  #lottos;

  constructor(purchasePrice) {
    //구입금액
    this.#validatePurchasePrice(purchasePrice);
    this.#purchasePrice = purchasePrice;
  }

  #validatePurchasePrice(purchasePrice) {
    checkInputTypeIsNumber(purchasePrice);
    checkInputDividedBy1000(purchasePrice);
  }
}

export default Purchase;
