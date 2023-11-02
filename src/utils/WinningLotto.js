import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants.js";
class WinningLotto {
  async getWinningLotto() {
    const mainLotto = await Console.readLineAsync(
      MESSAGE.WINNING_LOTTO_INPUT + "\n"
    );
    const mainLottoArr = mainLotto.split(",").map(Number);
    const bonusLotto = await Console.readLineAsync(
      MESSAGE.BONUS_LOTTO_INPUT + "\n"
    );
    return [mainLottoArr, Number(bonusLotto)];
  }
  compareNumbers(myLottos, winningArr) {
    const mainLotto = winningArr[0];
    const bonusLotto = winningArr[1];
    let places = [];
    myLottos.map((lotto) => {
      const sameNumbers = lotto.filter((num) => mainLotto.includes(num));
      sameNumbers === 5 && lotto.includes(bonusLotto)
        ? places.push("bonus")
        : places.push(sameNumbers.length);
    });
    return places;
  }

  statisticsOfWinningLotto(places) {
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;
    places.forEach((place) => {
      switch (place) {
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
    console.log(MESSAGE.STATISTICS_TITLE + "\n---");
    Console.print(`${MESSAGE.FIFTH_PLACE}${fifth}개`);
    Console.print(`${MESSAGE.FOURTH_PLACE}${fourth}개`);
    Console.print(`${MESSAGE.THIRD_PLACE}${third}개`);
    Console.print(`${MESSAGE.SECOND_PLACE}${second}개`);
    Console.print(`${MESSAGE.FIRST_PLACE}${first}개`);
  }
}
export default WinningLotto;
