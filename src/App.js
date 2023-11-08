import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { validatePrice, validateBonusNumber } from "./validate.js";
import { ERROR_MESSAGE } from "./constants.js";
class App {
  async play() {
    const inputPrice = await this.inputBuyPrice(); // 구입 금액 입력

    const countOfLotto = this.countOfLotto(inputPrice); // 로또 개수 구하기
    Console.print(`${countOfLotto}개를 구매했습니다.`);

    const randomNumbers = this.generateRandomNumber(countOfLotto); // 랜덤 숫자 생성
    for (let i = 0; i < randomNumbers.length; i += 1) {
      Console.print(`[${randomNumbers[i].join(", ")}]\n`);
    }

    const lotto = await this.inputPickNumbers(); // 당첨 번호 입력
    const inputBonusNumbers = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    validateBonusNumber(Number(inputBonusNumbers));

    for (let i = 0; i < randomNumbers.length; i += 1) {
      lotto.winningResult(randomNumbers[i], Number(inputBonusNumbers)); // 당첨 결과 구하기
    }
    lotto.printWinningResult();
    lotto.printCalculateRate(inputPrice);
  }

  countOfLotto(inputPrice) {
    return inputPrice / 1000;
  }

  generateRandomNumber(countOfLotto) {
    //랜덤 숫자 생성
    const randomNumbers = [];
    while (randomNumbers.length < countOfLotto) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      this.sortNumbers(randomNumber);
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }

  sortNumbers(numbers) {
    // 숫자 정렬
    numbers.sort((a, b) => a - b);
  }

  async inputBuyPrice() {
    const inputBuy = await MissionUtils.Console.readLineAsync("구입 금액을 입력해 주세요.");
    const buyPrice = Number(inputBuy);
    validatePrice(buyPrice);
    return buyPrice;
  }

  async inputPickNumbers() {
    let pickLotto;
    while (!pickLotto) {
      try {
        const inputPickNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
        const pickNumbers = inputPickNumbers.split(",").map((number) => Number(number));

        if (pickNumbers.some(isNaN)) {
          throw new Error(ERROR_MESSAGE.NOT_NUMBER);
        }

        pickLotto = new Lotto(pickNumbers);
      } catch (e) {
        MissionUtils.Console.print(e.message);
      }
    }
    return pickLotto;
  }
}
export default App;
