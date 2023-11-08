import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { ERROR_MESSAGE } from "./constants.js";
class App {
  async play() {
    const inputPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
    //this.validatePrice(inputPrice); // 입력 금액 검증

    const countOfLotto = this.countOfLotto(inputPrice); // 로또 개수 구하기
    Console.print(`${countOfLotto}개를 구매했습니다.`);

    const randomNumbers = this.generateRandomNumber(countOfLotto); // 랜덤 숫자 생성
    for (let i = 0; i < randomNumbers.length; i += 1) {
      Console.print(`[${randomNumbers[i].join(", ")}]\n`);
    }

    const inputPickNumbers = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const pickNumbers = inputPickNumbers.split(",").map((number) => Number(number)); // 당첨 번호 배열로 변환
    this.sortNumbers(pickNumbers); // 당첨 번호 정렬
    const loto = new Lotto(pickNumbers); // 로또 인스턴스 생성

    const inputBonusNumbers = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    this.validateBonusNumber(Number(inputBonusNumbers));

    for (let i = 0; i < randomNumbers.length; i += 1) {
      loto.winningResult(randomNumbers[i], Number(inputBonusNumbers)); // 당첨 결과 구하기
    }
    loto.printWinningResult();
    loto.printCalculateRate(inputPrice);
  }

  countOfLotto(inputPrice) {
    return Number(inputPrice) / 1000;
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

  validatePrice(inputPrice) {
    // 입력 금액 검증
    if (Number(inputPrice) < 1000) {
      throw new Error(ERROR_MESSAGE.UNDER_PRICE);
    }
    if (Number(inputPrice) % 1000 !== 0 && !isNaN(inputPrice)) {
      throw new Error(ERROR_MESSAGE.NOT_PRICE);
    }
    if (isNaN(inputPrice)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER_PRICE);
    }
  }

  validateBonusNumber(bonusNumber) {
    // 보너스 번호 검증
    if (isNaN(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (bonusNumber < 1 || bonusNumber > 45) {
      throw new Error(ERROR_MESSAGE.OVER_NUMBER);
    }
  }
}

export default App;
