import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
class App {
  constructor() {
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  async inputMoney() {
    let money;
    let isValidated = false;
    while (!isValidated) {
      const inputString = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요.\n"
      );
      money = Number(inputString.trim());
      isValidated = this.validateMoney(money);
    }
    return money;
  }

  // 예외처리
  validateMoney(money) {
    if (isNaN(money)) {
      MissionUtils.Console.print("[ERROR] 숫자만 입력해주세요.\n");
    } else if (money % 1000 !== 0) {
      MissionUtils.Console.print("[ERROR] 1000원 단위로 입력해주세요.\n");
    } else return true;
  }

  // 로또 발행
  publishLotto(money) {
    const lottoCount = money / 1000;
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const randomNumbers = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      lottos.push(randomNumbers);
    }
    return lottos;
  }
  // 구매한 로또 수량 및 번호 출력
  printLottos(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
  // 당첨 번호 입력받기
  async inputNumbers() {
    let numbers;
    let isValidated = false;
    while (!isValidated) {
      const inputString = await MissionUtils.Console.readLineAsync(
        "\n당첨 번호를 입력해주세요.\n"
      );
      numbers = inputString.split(",").map((number) => Number(number.trim()));
      isValidated = this.validateNumbers(numbers);
    }
    this.winningNumbers = numbers;
  }

  // 당첨 번호 예외처리
  validateNumbers(numbers) {
    if (numbers.length !== 6) {
      MissionUtils.Console.print("[ERROR] 6개의 숫자를 입력해주세요.\n");
    } else if (numbers.some((number) => isNaN(number))) {
      MissionUtils.Console.print("[ERROR] 숫자만 입력해주세요.\n");
    } else if (numbers.some((number) => number < 1 || number > 45)) {
      MissionUtils.Console.print("[ERROR] 1~45 사이의 숫자를 입력해주세요.\n");
    } else if (new Set(numbers).size !== 6) {
      MissionUtils.Console.print("[ERROR] 중복된 숫자를 입력할 수 없습니다.\n");
    } else return true;
  }

  // 보너스 번호 입력받기
  async inputBonusNumber() {
    let bonusNumber;
    let isValidated = false;
    while (!isValidated) {
      const inputString = await MissionUtils.Console.readLineAsync(
        "\n보너스 번호를 입력해주세요.\n"
      );
      bonusNumber = Number(inputString.trim());
      isValidated = this.validateBonusNumber(bonusNumber);
    }
    this.bonusNumber = bonusNumber;
  }

  validateBonusNumber(bonusNumber) {
    const winningNumbers = this.winningNumbers;
    if (isNaN(bonusNumber)) {
      MissionUtils.Console.print("[ERROR] 숫자만 입력해주세요.\n");
    } else if (bonusNumber < 1 || bonusNumber > 45) {
      MissionUtils.Console.print("[ERROR] 1~45 사이의 숫자를 입력해주세요.\n");
    } else if (winningNumbers.includes(bonusNumber)) {
      MissionUtils.Console.print("[ERROR] 당첨 번호와 중복될 수 없습니다.\n");
    }
    else return true;
  }

  countMatchingNumbers(lotto) {
    let count = 0;
    lotto.forEach((number) => {
      if (this.winningNumbers.includes(number)) {
        count++;
      }
    });
    return count;
  }

  computeRank(lotto) {
    const count = this.countMatchingNumbers(lotto, this.winningNumbers);
    switch (count) {
      case 6:
        return "1등";
      case 5:
        if (this.winningNumbers.includes(this.bonusNumber)) {
          return "2등";
        } else return "3등";
      case 4:
        return "4등";
      case 3:
        return "5등";
      default:
        return "꽝";
    }
  }

  // 총 당첨 내역 출력
    // 결과 합산
  computeTotalResult(lottos) {
    const result = { "1등": 0, "2등": 0, "3등": 0, "4등": 0, "5등": 0, 꽝: 0 };
    for (const lotto of lottos) {
      const rank = this.computeRank(
        lotto,
        this.winningNumbers,
        this.bonusNumber
      );
      result[rank]++;
    }
    return result;
  }

    // 출력
  printResult(result) {
    MissionUtils.Console.print(`
당첨 통계\n---
3개 일치 (5,000원) - ${result["5등"]}개
4개 일치 (50,000원) - ${result["4등"]}개
5개 일치 (1,500,000원) - ${result["3등"]}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${result["2등"]}개
6개 일치 (2,000,000,000원) - ${result["1등"]}개`);
  }

  // 수익률 계산

  computeProfit(result, money) {
    const totalPrize =
      result["5등"] * 5000 +
      result["4등"] * 50000 +
      result["3등"] * 1500000 +
      result["2등"] * 30000000 +
      result["1등"] * 2000000000;
    const profit = ((totalPrize / money) * 100).toFixed(1);
    return profit;
  }

  printProfit(profit) {
    MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);
  }
  }
}

export default App;
