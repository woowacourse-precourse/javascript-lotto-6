import { MissionUtils, Console } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
const GET_INPUT_MONEY = "구입금액을 입력해 주세요.\n";
const GET_INPUT_LOTTO = "당첨 번호를 입력해 주세요.\n";
const GET_INPUT_BONUS = "보너스 번호를 입력해 주세요.\n";
const ERROR_GET_INPUT_MONEY =
  "[ERROR] 구입금액은 1000원 단위로 입력하셔야 합니다.";
const ERROR_GET_INPUT_BONUS = "[ERROR] 보너스 입력 형식이 틀렸습니다.";
const COUNTS_MESSAGE = "개를 구매했습니다.";
const BEFORE_RESULT = "당첨 통계\n---";
const FIRST_RANK_MESSAGE = "6개 일치 (2,000,000,000원) - ";
const SECOND_RANK_MESSAGE = "5개 일치, 보너스 볼 일치 (30,000,000원) - ";
const THIRD_RANK_MESSAGE = "5개 일치 (1,500,000원) - ";
const FOURTH_RANK_MESSAGE = "4개 일치 (50,000원) - ";
const FIFTH_RANK_MESSAGE = "3개 일치 (5,000원) - ";

class App {
  async play() {
    const money = await this.getMoney();
    const randomLottos = await this.generateRandomLotto(money);
    const lotto = await this.getUserLotto();
    const bonus = await this.getUserBonus(lotto);
    const result = await this.getCountLotto(lotto, randomLottos);
    await this.printResult(result, bonus, money);
  }

  async getMoney() {
    let isError = false;
    while (!isError) {
      try {
        const moneyInput = await Console.readLineAsync(GET_INPUT_MONEY);
        if (moneyInput % 1000 === 0) {
          this.printCounts(moneyInput / 1000);
          return moneyInput;
        }
        throw Error(ERROR_GET_INPUT_MONEY);
      } catch (error) {
        Console.print("[ERROR] 구입금액은 1000원 단위로 입력하셔야 합니다.");
      }
    }
  }
  async getUserLotto() {
    let isError = false;
    while (!isError) {
      try {
        const lottoNumber = await Console.readLineAsync(GET_INPUT_LOTTO);
        Console.print("");
        const userLotto = new Lotto(lottoNumber.split(",")).getArray();
        isError = true;
        return userLotto;
      } catch (error) {
        Console.print("[ERROR] 로또 번호는 6개여야 합니다.");
      }
    }
  }
  async getUserBonus(lotto) {
    let isError = false;
    while (!isError) {
      try {
        const bonus = await Console.readLineAsync(GET_INPUT_BONUS);
        if (bonus > 45 || bonus < 1 || lotto.indexOf(bonus) !== -1)
          throw Error(ERROR_GET_INPUT_BONUS);
        Console.print("");
        isError = true;
        return bonus;
      } catch (error) {
        Console.print(ERROR_GET_INPUT_BONUS);
      }
    }
  }
  async generateRandomLotto(moneyInput) {
    const counts = moneyInput / 1000;
    const randomLottos = [];
    Array.from({ length: counts }).map(() => {
      const random = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      randomLottos.push({ number: random, count: 0 });
    });
    await this.printRandomLotto(randomLottos);
    return new Array(...randomLottos);
  }

  equalBonus(bonus, lotto) {
    if (lotto.indexOf(bonus) === -1) return false;
    return true;
  }
  printCounts(counts) {
    Console.print(counts + COUNTS_MESSAGE);
  }
  printRandomLotto(lotto) {
    lotto.map((random) => Console.print(`[${random.number.join(", ")}]`));
    Console.print("");
  }
  async getCountLotto(lotto, randomLottos) {
    const scoreLottos = await randomLottos.map((random) => {
      let counts = 0;
      random.number.forEach((element) => {
        if (lotto.map(Number).indexOf(element) !== -1) counts++;
      });
      random.count = counts;
      return random;
    });

    return randomLottos;
  }
  async printResult(result, bonus, money) {
    const rank = await this.getRank(result, bonus);
    Console.print(BEFORE_RESULT);
    await Console.print(FIFTH_RANK_MESSAGE + `${rank[3]}개`);
    await Console.print(FOURTH_RANK_MESSAGE + `${rank[4]}개`);
    await Console.print(THIRD_RANK_MESSAGE + `${rank[5]}개`);
    await Console.print(SECOND_RANK_MESSAGE + `${rank["bonus"]}개`);
    await Console.print(FIRST_RANK_MESSAGE + `${rank[6]}개`);
    await this.printRateOfReturn(rank, money);
  }
  getRank(result, bonus) {
    const rank = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, bonus: 0 };

    result.map((element) => {
      if (element.count === 5 && this.checkBonus(element.number, bonus))
        rank["bonus"]++;
      else rank[element.count]++;
    });
    return rank;
  }
  checkBonus(number, bonus) {
    const toCheckBonus = number.indexOf(Number(bonus)) >= 0 ? true : false;
    return toCheckBonus;
  }
  printRateOfReturn(rank, money) {
    const counts = Object.values(rank);
    const prices = [0, 0, 0, 5000, 50000, 1500000, 2000000000, 30000000];
    const amountReturn = counts.map((count, index) => {
      return count * prices[index];
    });
    const sumOfReturn = amountReturn
      .filter((element) => element >= 0)
      .reduce((x, y) => x + y);
    const rateOfReturn = Math.round(sumOfReturn / money * 1000) / 10;
    Console.print(`총 수익률은 ${rateOfReturn.toLocaleString()}%입니다.`);
  }
}
export default App;
