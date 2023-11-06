import { Random, Console } from "@woowacourse/mission-utils"

class App {

  async buyLotto() {
    const money = await Console.readLineAsync("구입금액을 입력해 주세요. \n");

    this.validateBuyLotto(money);
    return money;
  }
  
  validateBuyLotto(input) {
    if (input % 1000 !== 0) {
      throw new Error("[ERROR] 천 원 단위로 입력해 주세요.");
    }
  }
  async countBuytLotto() {
    this.lottoEach = await this.buyLotto() / 1000;

    return this.lottoEach;
  }

  randomPickNum() {
    this.randomNum = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    
    return this.randomNum;
  }
  async play() {
    
  }
  
}

export default App;
