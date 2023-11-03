import Lotto from "./Lotto";
import { Console } from "@woowacourse/mission-utils";
 

class App {
  async play() {
    const amount = await this.inputAmount();
    const winningNumbers = await this.inputWinningNumbers();
    this.issueLottos(amount);
  };
  
  constructor() {
    this.lottos = [];
  }

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
      const numbers = Lotto.generateNumbers();
      this.lottos.push(new Lotto(numbers));
      Console.print(`[${numbers}]`);
    }
    
    Console.print(`${lottoCount}개를 구매했습니다.`)
  };

  async inputWinningNumbers() {
    const input = await Console.readLineAsync("6개의 로또 당첨 번호를 입력해주세요. (쉼표로 구분):");
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));

    if (numbers.length !== 6 || numbers.some(num => num < 1 || num > 45)) {
      Console.print("[ERROR] 올바른 로또 번호를 입력해주세요!");
      return this.inputWinningNumbers();
    }
  };
  
};


export default App;
