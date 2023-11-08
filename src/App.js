import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  async play() {
    Console.print("구입금액을 입력해 주세요.");
    const purchaseAmount = parseInt(await Console.readLineAsync(), 10);

    if (isNaN(purchaseAmount) || purchaseAmount < 1000 || purchaseAmount % 1000 !== 0) {
      Console.print("[ERROR] 1,000원 단위로 1,000원 이상의 금액을 입력해야 합니다.");
      return;
    }

    const numberOfLottos = purchaseAmount / 1000;
    const lottos = this.generateLottos(numberOfLottos);

    Console.print(`${numberOfLottos}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      Console.print(`[${lotto.getNumbers().join(", ")}]`);
    });

    const { winningNumbers, bonusNumber } = await this.getWinningNumbers();

    const results = this.checkWinning(lottos, winningNumbers, bonusNumber);
    this.displayResults(results, numberOfLottos);
  }

  generateLottos(numberOfLottos) {
    const lottos = [];

    for (let i = 0; i < numberOfLottos; i++) {
      const lotto = Lotto.generate();
      lottos.push(lotto);
    }

    return lottos;
  }

  async getWinningNumbers() {
    Console.print('당첨 번호를 입력해 주세요.');
    const winningNumbersInput = await Console.readLineAsync();
  
    if (!winningNumbersInput) {
      Console.print('[ERROR] 입력이 없습니다. 다시 입력해 주세요.');
      return await this.getWinningNumbers();
    }
  
    const winningNumbers = winningNumbersInput.split(',').map(Number);
  
    if (!winningNumbers || winningNumbers.length !== 6 || !winningNumbers.every(number => number >= 1 && number <= 45)) {
      Console.print('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      return await this.getWinningNumbers();
    }
  
    Console.print('보너스 번호를 입력해 주세요.');
    const bonusNumberInput = await Console.readLineAsync();
  
    if (!bonusNumberInput) {
      Console.print('[ERROR] 입력이 없습니다. 다시 입력해 주세요.');
      return await this.getWinningNumbers();
    }
  
    const bonusNumber = Number(bonusNumberInput);
  
    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45) {
      Console.print('[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.');
      return await this.getWinningNumbers();
    }
  
    return { winningNumbers, bonusNumber };
  }

  validateNumbers(numbers) {
    return (
      numbers.length === 7 &&
      numbers.every((number) => !isNaN(number) && number >= 1 && number <= 45)
    );
  }

  checkWinning(lottos, winningNumbers, bonusNumber) {
    const results = {
      3: 0,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
    };

    lottos.forEach((lotto) => {
      const matchedNumbers = lotto
        .getNumbers()
        .filter((number) => winningNumbers.includes(number)).length;

      if (matchedNumbers === 5 && lotto.getNumbers().includes(bonusNumber)) {
        results[5.5]++;
      } else {
        results[matchedNumbers]++;
      }
    });

    return results;
  }

  displayResults(results, numberOfLottos) {
    const prizes = {
      3: "3개 일치 (5,000원)",
      4: "4개 일치 (50,000원)",
      5: "5개 일치 (1,500,000원)",
      5.5: "5개 일치, 보너스 볼 일치 (30,000,000원)",
      6: "6개 일치 (2,000,000,000원)",
    };
  
    const logs = [];
    let totalLottos = numberOfLottos;
  
    Object.keys(prizes).forEach((count) => {
      
      const prize = prizes[count];
      const countValue = results[count] ?? 0;
      logs.push(`${prize} - ${countValue}개`);
      totalLottos -= countValue;
    });
  
    const totalPrize =
      results[3] * 5000 +
      results[4] * 50000 +
      results[5] * 1500000 +
      results[5.5] * 30000000;
    const totalRevenue = totalPrize;
    const profitRate = ((totalRevenue / (numberOfLottos * 1000)) * 100).toFixed(1);
    logs.push(`총 수익률은 ${profitRate}%입니다.`);
  
    logs.forEach((log) => {
      Console.print(log);
    });
  }
  }

export default App;



