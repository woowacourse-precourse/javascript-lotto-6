import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../Constants.js";
import Purchase from "../errors/Purchase.js";
import Lotto from "../errors/Lotto.js";
import Bonus from "../errors/Bonus.js";

export const PrintView = {
  printpurchaseQuantity(quantity) {
    Console.print(quantity + CONSOLE_MESSAGE.PURCHASE_AMOUNT);
  },

  printLottoNumbers(lottoArr) {
    lottoArr.map((lotto) => {
      const lottoStr = lotto.join(", ");
      Console.print("[" + lottoStr + "]");
    });
  },

  printStatisticsTitle() {
    console.log(CONSOLE_MESSAGE.STATISTICS_TITLE + "\n---");
  },

  printPlaces(countByPlace) {
    const placeNames = [
      CONSOLE_MESSAGE.FIFTH_PLACE,
      CONSOLE_MESSAGE.FOURTH_PLACE,
      CONSOLE_MESSAGE.THIRD_PLACE,
      CONSOLE_MESSAGE.SECOND_PLACE,
      CONSOLE_MESSAGE.FIRST_PLACE,
    ];
    placeNames.forEach((placeName, index) => {
      const count = countByPlace[Object.keys(countByPlace)[index]];
      Console.print(`${placeName}${count}개`);
    });
  },

  printRateOfReturn(rate) {
    Console.print("총 수익률은 " + rate + "%입니다.");
  },
};
