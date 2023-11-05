import { MissionUtils, Console } from "@woowacourse/mission-utils";

class Computer {
  static pickRandomNumber() {
    const pickNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    return pickNumber.sort(function (a, b) {
    return a - b;
    });
    }

  static purchaseList(purchaseAmount) {
    const purchaseQuantity = purchaseAmount / 1000
    return purchaseQuantity
  }

  static randomNumberList(purchaseNumber) {
    for (let i = 0; i < purchaseNumber; i++) {
    Computer.pickRandomNumber();
    Console.print(Computer.pickRandomNumber());
    }
  }
}

export default Computer;