const { Random, Console } = require('@woowacourse/mission-utils');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    for (const number of numbers) {
      if (number < 1 || number > 45) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

class LottoGame {
  constructor() {
    this.purchasedLottos = [];
  }

  purchaseLottos(돈) {
    if (money % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
    const numberOfLottos = money / 1000;
    for (let i = 0; i < numberOfLottos; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.purchasedLottos.push(new Lotto(numbers));
    }
  }

  checkWinningLotto(winningNumbers, bonusNumber) {
    const result = {
      "1등": 0,
      "2등": 0,
      "3등": 0,
      "4등": 0,
      "5등": 0,
    };

    for (const lotto of this.purchasedLottos) {
      const matchingNumbers = lotto.getNumbers().filter((number) => winningNumbers.includes(number)).length;
      if (matchingNumbers === 6) {
        result["1등"]++;
      } else if (matchingNumbers === 5 && lotto.getNumbers().includes(bonusNumber)) {
        result["2등"]++;
      } else if (matchingNumbers === 5) {
        result["3등"]++;
      } else if (matchingNumbers === 4) {
        result["4등"]++;
      } else if (matchingNumbers === 3) {
        result["5등"]++;
      }
    }
    return result;
  }
}

class App {
  play() {
    Console.print("구입금액을 입력해 주세요.");
    const money = parseInt(Console.readLineAsync(), 10);
    
    const lottoGame = new LottoGame();
    lottoGame.purchaseLottos(돈);
    
    Console.print(`${lottoGame.purchasedLottos.length}개를 구매했습니다.`);
    for (const lotto of lottoGame.purchasedLottos) {
      Console.print(lotto.getNumbers().sort((a, b) => a - b).join(", "));
    }
    
    Console.print("당첨 번호를 입력해 주세요.");
    const winningNumbers = Console.readLineAsync().split(",").map(Number);
    
    Console.print("보너스 번호를 입력해 주세요.");
    const bonusNumber = parseInt(Console.readLineAsync(), 10);
    
    const result = lottoGame.checkWinningLotto(winningNumbers, bonusNumber);
    
    Console.print("당첨 통계");
    Console.print("---");
    for (const [rank, count] of Object.entries(result)) {
      if (count > 0) {
        Console.print(`${rank} (${count}개) - ${calculatePrizeMoney(rank) * count}원`);
      }
    }
    
    const totalPrizeMoney = calculateTotalPrizeMoney(result);
    const totalSpentMoney = money;
    const totalProfitRate = ((totalPrizeMoney - totalSpentMoney) / totalSpentMoney) * 100;
    Console.print(`총 수익률은 ${totalProfitRate.toFixed(1)}%입니다.`);
  }
}

function calculatePrizeMoney(rank) {
  const prizeMap = {
    "1등": 2000000000,
    "2등": 30000000,
    "3등": 1500000,
    "4등": 50000,
    "5등": 5000,
  };
  return prizeMap[rank];
}

function calculateTotalPrizeMoney(result) {
  let totalPrizeMoney = 0;
  for (const [rank, count] of Object.entries(result)) {
    totalPrizeMoney += calculatePrizeMoney(rank) * count;
  }
  return totalPrizeMoney;
}

const app = new App();
app.play();
