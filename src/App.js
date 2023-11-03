import Lotto from "./Lotto";
import { Console } from "@woowacourse/mission-utils";
 

class App {
  async play() {
    const amount = await this.inputAmount();
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
    }
    
    Console.print(`${lottoCount}개를 구매했습니다.`)
  }
  
};


export default App;
