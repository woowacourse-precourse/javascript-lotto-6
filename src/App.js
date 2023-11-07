import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    let lottoAmount = 0;
    do {
      try {
        lottoAmount = await Console.readLineAsync("구입금액을 입력해 주세요.");

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

    const lottoList = this.buyLotto(lottoAmount);

    Console.print(`${lottoList.length}개를 구매했습니다.`);
    for (const lotto of lottoList) {
      Console.print(lotto.getLottoNumbers().sort((a, b) => a - b));
    }

    const winningNumber = (
      await Console.readLineAsync("당첨 번호를 입력해 주세요.")
    )
      .split(",")
      .map(Number);

    const bonusNumber = await Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );

    const result = this.getResult(lottoList, winningNumber, bonusNumber);
    this.getStatistics(lottoAmount, result);
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

  getResult(lottoList, winningNumber, bonusNumber) {
    const result = { n3: 0, n4: 0, n5: 0, n5b: 0, n6: 0 };

    for (const lotto of lottoList) {
      const matchingNumbers = lotto
        .getLottoNumbers()
        .filter((num) => winningNumber.includes(num));
      const matchingCount = matchingNumbers.length;

      switch (matchingCount) {
        case 6:
          result.n6++;
          return;
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

    return result;
  }

  getStatistics(lottoAmount, result) {
    const prizeList = {
      n3: 5000,
      n4: 50000,
      n5: 1500000,
      n5b: 30000000,
      n6: 200000000,
    };

    let totalPrize = 0;

    Console.print("당첨 통계");
    Console.print("---");

    for (const key in result) {
      const count = result[key];
      const prize = prizeList[key];

      switch (key) {
        case "n3":
        case "n4":
        case "n5":
        case "n6":
          Console.print(`${key}개 일치 (${prize}원 - ${count}개)`);
          totalPrize += count * prize;
          break;
        case "n5b":
          Console.print(
            `${key}개 일치, 보너스 불 일치 (${prize}원 - ${count}개)`
          );
          totalPrize += count * prize;
          break;
      }
    }

    const returnRate = ((totalPrize - lottoAmount) / lottoAmount) * 100;

    Console.print(`총 수익률은 ${returnRate.toFixed(1)}%입니다.`);
  }
}

export default App;
