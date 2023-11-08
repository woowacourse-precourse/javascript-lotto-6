import { CONSOLE_MESSAGE } from "../Constants.js";
import { Console } from "@woowacourse/mission-utils";

class Statistics {
  constructor() {
    this.prizes = [5, 50, 1500, 30000, 2000000];
    this.countByPlace = {
      fifthPlace: 0,
      fourthPlace: 0,
      thirdPlace: 0,
      secondPlace: 0,
      firstPlace: 0,
    };
  }

  statisticsOfWinningLotto(matchedNumbers) {
    matchedNumbers.forEach((number) => {
      switch (number) {
        case 3:
          this.countByPlace.fifthPlace++;
          break;
        case 4:
          this.countByPlace.fourthPlace++;
          break;
        case 5:
          this.countByPlace.thirdPlace++;
          break;
        case "bonus":
          this.countByPlace.secondPlace++;
          break;
        case 6:
          this.countByPlace.firstPlace++;
          break;
        default:
          break;
      }
    });

    console.log(CONSOLE_MESSAGE.STATISTICS_TITLE + "\n---");
    this.printPlaces();

    return Object.values(this.countByPlace);
  }
  printPlaces() {
    const placeNames = [
      CONSOLE_MESSAGE.FIFTH_PLACE,
      CONSOLE_MESSAGE.FOURTH_PLACE,
      CONSOLE_MESSAGE.THIRD_PLACE,
      CONSOLE_MESSAGE.SECOND_PLACE,
      CONSOLE_MESSAGE.FIRST_PLACE,
    ];
    placeNames.forEach((placeName, index) => {
      const count = this.countByPlace[Object.keys(this.countByPlace)[index]];
      Console.print(`${placeName}${count}개`);
    });
  }

  rateOfReturn(places, purchaseQuantity) {
    let result = 0;
    for (let i = 0; i < places.length; i++) {
      if (places[i] > 0) {
        result += this.prizes[i];
      }
    }
    return (
      Math.round(((Number(result) * 100) / Number(purchaseQuantity)) * 100) /
      100
    );
  }
}
export default Statistics;
