import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  async play() {
    const inputPrice = await Console.readLineAsync("구입금액을 입력해 주세요.");
    const countOfLotto = this.countOfLotto(inputPrice); // 로또 개수 구하기
    Console.print(`${countOfLotto}개를 구매했습니다.`);
    const randomNumbers = this.generateRandomNumber(countOfLotto); // 랜덤 숫자 생성
    for (let i = 0; i < randomNumbers.length; i++) {
      this.sortNumbers(randomNumbers[i]); // 랜덤 숫자 정렬
      Console.print(randomNumbers[i]);
    }

    const inputPickNumbers = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const inputBonusNumbers = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    const pickNumbers = inputPickNumbers.split(",").map((number) => Number(number)); // 당첨 번호 배열로 변환
  }

  countOfLotto(inputPrice) {
    return inputPrice / 1000;
  }

  generateRandomNumber(countOfLotto) {
    //랜덤 숫자 생성
    const randomNumbers = [];
    while (randomNumbers.length < countOfLotto) {
      const randomNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }

  sortNumbers(randomNumbers) {
    randomNumbers.sort((a, b) => a - b);
  }

  printResult() {
    // 결과 출력
  }
}

export default App;
