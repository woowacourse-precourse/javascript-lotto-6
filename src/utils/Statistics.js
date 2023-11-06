import { CONSOLE_MESSAGE } from "../Constants.js";
import { Console } from "@woowacourse/mission-utils";

class Statistics {
  statisticsOfWinningLotto(sameNumbers) {
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;
    sameNumbers.forEach((sameNumber) => {
      switch (sameNumber) {
        case 3:
          fifth++;
          break;
        case 4:
          fourth++;
          break;
        case 5:
          third++;
          break;
        case "bonus":
          second++;
          break;
        case 6:
          first++;
          break;
        default:
          break;
      }
    });
    console.log(CONSOLE_MESSAGE.STATISTICS_TITLE + "\n---");
    Console.print(`${CONSOLE_MESSAGE.FIFTH_PLACE}${fifth}개`);
    Console.print(`${CONSOLE_MESSAGE.FOURTH_PLACE}${fourth}개`);
    Console.print(`${CONSOLE_MESSAGE.THIRD_PLACE}${third}개`);
    Console.print(`${CONSOLE_MESSAGE.SECOND_PLACE}${second}개`);
    Console.print(`${CONSOLE_MESSAGE.FIRST_PLACE}${first}개`);

    return [fifth, fourth, third, second, first];
  }
  rateOfReturn(places, purchaseQuantity) {
    let result = 0;
    for (let i = 0; i < places.length; i++) {
      if (places[i] > 0) {
        result += this.moneyForPlace(i);
      }
    }
    return (
      Math.round(((Number(result) * 100) / Number(purchaseQuantity)) * 100) /
      100
    );
  }
  moneyForPlace(placeIndex) {
    switch (placeIndex) {
      case 0:
        return 5;
      case 1:
        return 50;
      case 2:
        return 1500;
      case 3:
        return 30000;
      case 4:
        return 2000000;
      default:
        return 0;
    }
  }
}
export default Statistics;
