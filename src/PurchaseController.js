import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO_PRICE, MESSAGES } from "./constants.js";
import PurchaseView from "./PurchaseView.js";

class PurchaseController {
  static async getPrice() {
    const price = await MissionUtils.Console.readLineAsync("");

    return price;
  }

  static checkOnlyNumbers(price) {
    const pattern = /^\d+$/;

    return pattern.test(price);
  }

  static checkPriceDivisible(price) {
    const remainder = price % LOTTO_PRICE;

    return remainder === 0;
  }

  static processPriceText(priceText) {
    const processedText = priceText.trim();

    if (!PurchaseController.checkOnlyNumbers(priceText)) {
      throw new Error(MESSAGES.priceOtherThanNumbersError);
    }

    const price = parseInt(processedText);

    if (!PurchaseController.checkPriceDivisible(price)) {
      throw new Error(MESSAGES.priceNotDivisibleError)
    }

    return price;
  }

  static async purchase() {
    let isSuccess = false;
    let price = 0;

    while(!isSuccess) {
      PurchaseView.printPriceQuestion();
      const priceText = await PurchaseController.getPrice();

      try {
        price = PurchaseController.processPriceText(priceText);
        isSuccess = true;
      } catch (error) {
        isSuccess = false;
        PurchaseView.printPurchaseError(error.message);
      }
    }

    return price;
  }
}

export default PurchaseController;
