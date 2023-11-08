import { MissionUtils } from "@woowacourse/mission-utils";
import LottoValidator from "./LottoValidator";

class App {
  
  #lottoValidator;

  constructor() {
    this.#lottoValidator = new LottoValidator();
  }

  async play() {
    try {
      const { budget, answerNumbers, bonusNumber } = await this.#lottoValidator.readUserInput();

      const { numberOfBoughtLottos, boughtLottos } = this.#buyLottos(budget); // 오름차순 정렬
  
      this.#printLottoBought(numberOfBoughtLottos, boughtLottos);
  
      const result = this.#checkResult(boughtLottos, answerNumbers, bonusNumber);
      const outcome = this.#checkOutcome(result);
      
      this.#printResultMessage();
      
      MissionUtils.Console.print(`총 수익률은 ${(outcome / budget * 100).toFixed(1)}%입니다.`);
    } catch (e) {
      MissionUtils.Console.print(e.message);
      return;
    }
  }

  #buyLottos(budget) {
    const numberOfBoughtLottos = budget / 1000;
    
    // 구매
    const boughtLottos = [];
    for (let i = 0; i < numberOfBoughtLottos; i++) {
      const lotto = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      boughtLottos.push(lotto);
    }
    
    // 오름차순 정렬
    boughtLottos.forEach((lotto) => lotto.sort((a, b) => a - b)); 
    
    return { numberOfBoughtLottos, boughtLottos };
  }
  
  #printLottoBought(numberOfBoughtLottos, boughtLottos) {
    MissionUtils.Console.print(`${numberOfBoughtLottos}개를 구매했습니다.`);
    boughtLottos.forEach((lotto) => MissionUtils.Console.print(`[${lotto.join(", ")}]`));
  }
  
  #checkResult(boughtLottos, answerNumbers, bonusNumber) {
    const result = [0, 0, 0, 0, 0]; // 3, 4, 5, 5+b, 6
    for (const lotto of boughtLottos) {
      const matchedCount = [...lotto].filter((num) => answerNumbers.includes(num)).length;
      const matchedBonus = lotto.includes(bonusNumber);

      if (matchedCount < 3) {
        continue;
      }

      if (matchedCount === 6) {
        result[result.length - 1]++;
        continue;
      }

      if (matchedCount === 5 && matchedBonus) {
        result[result.length - 2]++;
        continue;
      }

      result[matchedCount - 3]++;
    }
    return result;
  }

  #checkOutcome(result) {
    const moneyTable = [
      5000,
      50000,
      1500000,
      30000000,
      2000000000
    ];

    let outcome = 0;
    for (let i = 0; i < 5; i++) {
      outcome += moneyTable[i] * result[i];
    }

    return outcome;
  }

  #printResultMessage(result) {
    const printedStrings = [
      "3개 일치 (5,000원)",
      "4개 일치 (50,000원)",
      "5개 일치 (1,500,000원)",
      "5개 일치, 보너스 볼 일치 (30,000,000원)",
      "6개 일치 (2,000,000,000원)"
    ];

    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');

    for (let i = 0; i < 5; i++) {
      MissionUtils.Console.print(`${printedStrings[i]} - ${result[i]}개`);
    }
  }

}

export default App;
