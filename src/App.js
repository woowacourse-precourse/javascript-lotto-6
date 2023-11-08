import Lotto from "./Lotto";
import { Console } from "@woowacourse/mission-utils";
 

class App {
  async play() {
    const amount = await this.inputAmount();
    this.issueLottos(amount);
    const winningNumbers = await this.inputWinningNumbers();
    const bonusNumber = await this.inputBonusNumber();
    const results = await this.calculateResult(winningNumbers, bonusNumber);
  
    this.printResult(results);
  };

  constructor() {
    this.lottos = [];
    this.numberGenerator = Lotto.generateNumbers;
  };

  setNumberGenerator(generator) {
    this.numberGenerator = generator;
  };

  async inputAmount() {
    const amount = await Console.readLineAsync("로또를 구매할 금액을 입력 해주세요. (1,000원 단위): ");
      
    if (amount % 1000 !== 0) {
      Console.print("[ERROR] 금액은 1,000원 단위로만 입력 가능합니다!");
      return this.inputAmount();
    }
      return parseInt(amount, 10);
    };
  
  issueLottos(amount) {
    const lottoCount = amount / 1000;

    for (let i = 0; i < lottoCount; i++) {
      const numbers = this.numberGenerator();
      this.lottos.push(new Lotto(numbers));
      Console.print(`[${numbers.join(', ')}]`);
    }
    
    Console.print(`${lottoCount}개를 구매했습니다.`)
  };

  async inputWinningNumbers() {
    const input = await Console.readLineAsync("6개의 로또 당첨 번호를 입력해주세요. (쉼표로 구분):");
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));
    if (new Set(numbers).size !== numbers.length) {
      Console.print("[ERROR] 중복된 로또 번호가 있습니다!");
      return this.inputWinningNumbers();
    }  

    if (numbers.length !== 6 || numbers.some(num => num < 1 || num > 45)) {
      Console.print("[ERROR] 올바른 로또 번호를 입력해주세요!");
      return this.inputWinningNumbers();
    };

    return numbers;
  };

  async inputBonusNumber() {
    const bonusInput = await Console.readLineAsync("로또 보너스 번호를 입력해주세요. (1~45):");
    const bonusNumber = parseInt(bonusInput.trim(), 10);

    if (bonusNumber < 1 || bonusNumber > 45) {
      Console.print("[ERROR] 올바른 보너스 번호를 입력해주세요 (1~45)!");
      return this.inputBonusNumber();
    };

    return bonusNumber;
  };

  calculateResult(winningNumbers, bonusNumber) {
    const result = this.lottos.reduce((acc, lotto) => {
      const matchCount = lotto.getMatchCount(winningNumbers);
      if (matchCount === 5 && lotto.hasBonusNumber(bonusNumber)) {
        acc["5+1"] += 1;
      } else if (acc[matchCount] !== undefined) {
        acc[matchCount] += 1;
      }
      return acc;
    }, {
      3: 0,
      4: 0,
      5: 0,
      "5+1": 0,
      6: 0
    });
    return result;
  };

  printResult(results) {
    Console.print(`
      3개 일치 (5,000원) - ${results[3]}개
      4개 일치 (50,000원) - ${results[4]}개
      5개 일치 (1,500,000원) - ${results[5]}개
      5개 일치, 보너스 볼 일치 (30,000,000원) - ${results["5+1"]}개
      6개 일치 (2,000,000,000원) - ${results[6]}개
    `);
    const earnings = (results[3] * 5000) + (results[4] * 50000) + (results[5] * 1500000) 
    + (results["5+1"] * 30000000) + (results[6] * 2000000000) + (this.lottos.length * 1000); 

    const investment = this.lottos.length * 1000;
    const roi = ((earnings - investment) / investment) * 100;

    Console.print(`총 수익률은 ${roi.toFixed(1)}%입니다.`);

  };
  
};


export default App;
