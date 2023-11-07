import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const lottoAmount = await this.getLottoAmount();
    const lottoList = this.buyLotto(lottoAmount);
    this.printLottolist(lottoList);

    const winningNumber = await this.getWinningNumber();
    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );

    const result = this.getResult(lottoList, winningNumber, bonusNumber);
    this.getStatistics(lottoAmount, result);
  }

  async getLottoAmount() {
    let lottoAmount = 0;

    Console.print("구입금액을 입력해 주세요.");

    do {
      try {
        lottoAmount = await Console.readLineAsync();

        if (isNaN(lottoAmount)) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if (lottoAmount % 1000 !== 0) {
          throw new Error("[ERROR] 구입 금액은 1,000원 단위입니다.");
        }
      } catch (error) {
        Console.print(error.message);
      }
    } while (lottoAmount % 1000 !== 0);

    return lottoAmount;
  }

  buyLotto(amount) {
    const countLotto = amount / 1000;
    const lottoList = [];

    for (let i = 0; i < countLotto; i++) {
      const lottoNum = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto = new Lotto(lottoNum);
      lottoList.push(lotto);
    }

    return lottoList;
  }

  printLottolist(lottoList) {
    Console.print(`${lottoList.length}개를 구매했습니다.`);

    for (const lotto of lottoList) {
      Console.print(
        `[${lotto
          .getLottoNumbers()
          .sort((a, b) => a - b)
          .join(", ")}]`
      );
    }
  }

  async getWinningNumber() {
    return (await Console.readLineAsync("당첨 번호를 입력해 주세요."))
      .split(",")
      .map(Number);
  }

  getResult(lottoList, winningNumber, bonusNumber) {
    const result = { n3: 0, n4: 0, n5: 0, n5b: 0, n6: 0 };

    for (const lotto of lottoList) {
      const matchingNumbers = lotto
        .getLottoNumbers()
        .filter((num) => winningNumber.includes(num));

      this.calculateResult(result, matchingNumbers, bonusNumber);
    }

    return result;
  }

  calculateResult(result, matchingNumbers, bonusNumber) {
    const matchingCount = matchingNumbers.length;

    switch (matchingCount) {
      case 6:
        result.n6++;
        break;
      case 5:
        result.n5++;
        if (matchingNumbers.includes(bonusNumber)) {
          result.n5b++;
          result.n5--;
        }
        break;
      case 4:
        result.n4++;
        break;
      case 3:
        result.n3++;
        break;
    }
  }

  getStatistics(lottoAmount, result) {
    const prizeList = {
      n3: 5000,
      n4: 50000,
      n5: 1500000,
      n5b: 30000000,
      n6: 2000000000,
    };

    let totalPrize = 0;

    Console.print("당첨 통계");
    Console.print("---");

    for (const key in result) {
      const count = result[key];
      const prize = prizeList[key];

      totalPrize = this.calculatePrize(totalPrize, key, count, prize);
    }

    const returnRate = (totalPrize / lottoAmount) * 100;

    Console.print(`총 수익률은 ${returnRate.toFixed(1)}%입니다.`);
  }

  calculatePrize(totalPrize, key, count, prize) {
    switch (key) {
      case "n3":
      case "n4":
      case "n5":
      case "n6":
        Console.print(
          `${key.charAt(1)}개 일치 (${prize.toLocaleString()}원) - ${count}개`
        );
        totalPrize += count * prize;
        break;
      case "n5b":
        Console.print(
          `${key.charAt(
            1
          )}개 일치, 보너스 볼 일치 (${prize.toLocaleString()}원) - ${count}개`
        );
        totalPrize += count * prize;
        break;
    }

    return totalPrize;
  }
}

export default App;
