import Lotto from "./Lotto.js";
import { Console, Random } from "@woowacourse/mission-utils";

export default class App {
  #purchaseAmount = 0;
  #lottos = [];
  #winningNumbers = [];
  #bonusNumber = 0;
  #results = {};

  async play() {
    while (true) {
      try {
        // 구입 금액 입력 받기
        this.#purchaseAmount = await this.#getPurchaseAmount();
        // 로또 생성
        this.#lottos = this.#generateLottos(this.#purchaseAmount);
        // 로또 출력
        this.#printLottos(this.#lottos);
        
        // 당첨 번호 입력
        const { winningNumbers, bonusNumber } = await this.#getWinningNumbers();
        this.#winningNumbers = winningNumbers;
        this.#bonusNumber = bonusNumber;

        // 결과 계산
        this.#results = this.#getResults(this.#lottos, this.#winningNumbers, this.#bonusNumber);
        // 결과 출력
        this.#printResults(this.#results);

        // 수익률 계산 및 출력
        const profitRate = this.#calculateProfitRate(this.#purchaseAmount, this.#results);
        Console.print(`총 수익률은 ${profitRate.toFixed(2)}%입니다.`);

        break; // 정상적으로 처리가 완료되면 루프를 빠져나옴
      } catch (error) {
        Console.print(`[ERROR] ${error.message}`);
        // 재귀 호출 대신 에러를 출력하고 다음 루프 반복으로 넘어감
      }
    }
  }
  

  #getPurchaseAmount = async () => {
    const input = await Console.readLine("구입 금액을 입력해 주세요.");
    const amount = Number(input);
    if (isNaN(amount) || amount % 1000 !== 0 || amount <= 0) {
      throw new Error("구입 금액은 1,000원 단위의 양수여야 합니다.");
    }
    return amount;
  };

  #generateLottos = (purchaseAmount) => {
    const numberOfLottos = purchaseAmount / 1000;
    return Array.from({ length: numberOfLottos }, () => {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
      return new Lotto(numbers);
    });
  };

  #printLottos = (lottos) => {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(`[${lotto.numbers.join(", ")}]`));
  };

  #getWinningNumbers = async () => {
    const input = await Console.readLine("당첨 번호를 입력해 주세요.");
    const winningNumbers = input.split(",").map((num) => parseInt(num.trim(), 10));

    if (new Set(winningNumbers).size !== 6 || winningNumbers.some((num) => isNaN(num) || num < 1 || num > 45)) {
      throw new Error("당첨 번호는 1부터 45 사이의 서로 다른 6개의 숫자여야 합니다.");
    }

    const bonusInput = await Console.readLine("보너스 번호를 입력해 주세요.");
    const bonusNumber = parseInt(bonusInput.trim(), 10);

    if (isNaN(bonusNumber) || bonusNumber < 1 || bonusNumber > 45 || winningNumbers.includes(bonusNumber)) {
      throw new Error("보너스 번호는 1부터 45 사이의 숫자이며, 당첨 번호와 중복될 수 없습니다.");
    }

    return { winningNumbers, bonusNumber };
  };

  #getResults = (lottos, winningNumbers, bonusNumber) => {
    const results = { '3': 0, '4': 0, '5': 0, '5+1': 0, '6': 0 };

    lottos.forEach((lotto) => {
      const matchCount = lotto.numbers.filter((number) => winningNumbers.includes(number)).length;
      const hasBonus = lotto.numbers.includes(bonusNumber);

      if (matchCount === 6) results['6']++;
      else if (matchCount === 5 && hasBonus) results['5+1']++;
      else if (matchCount === 5) results['5']++;
      else if (matchCount === 4) results['4']++;
      else if (matchCount === 3) results['3']++;
    });

    return results;
  };

  #printResults = (results) => {
    Console.print('당첨 통계');
    Console.print('---------');
    Object.entries(results).forEach(([key, count]) => {
      const prize = this.#formatPrize(key);
      Console.print(`${key}개 일치 (${prize}) - ${count}개`);
    });
  };

  #calculateProfitRate = (purchaseAmount, results) => {
    const prizeAmount = Object.entries(results).reduce((acc, [key, count]) => {
      return acc + this.#calculatePrize(key) * count;
    }, 0);
    return (prizeAmount / purchaseAmount) * 100;
  };

  #calculatePrize = (key) => {
    const prizeMoney = {
      '3': 5000,
      '4': 50000,
      '5': 1500000,
      '5+1': 30000000,
      '6': 2000000000,
    };
    return prizeMoney[key] || 0;
  };

  #formatPrize = (key) => {
    return this.#calculatePrize(key).toLocaleString('en-US');
  };
}

