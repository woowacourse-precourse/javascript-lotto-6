import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants.js";
import PurchaseView from "./PurchaseView.js";
import ErrorView from "./ErrorView.js";

class PurchaseController {
  static async getPrice() {
    const price = await MissionUtils.Console.readLineAsync("");

    return price;
  }

  static checkOnlyNumbers(price) {
    const pattern = /^\d+$/;

    return pattern.test(price);
  }

  static processPriceText(priceText) {
    const processedText = priceText.trim();

    if (!PurchaseController.checkOnlyNumbers(priceText)) {
      throw new Error(MESSAGES.priceOtherThanNumbersError);
    }

    const price = parseInt(processedText);

    return price;
  }

  static async purchase() {
    PurchaseView.printPriceQuestion();
    const priceText = await PurchaseController.getPrice();
    const price = PurchaseController.processPriceText(priceText);

    return price;
  }
}

export default PurchaseController;
