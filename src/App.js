import { Random, Console } from "@woowacourse/mission-utils"

class App {
  constructor() {
    this.lottoEach = 0;
    this.lottoAll = new Array();
    this.number = [];
    this.bonus = 0;
  }

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
    const randomNum = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    
    return randomNum;
  }
  buyLottoEntire() {
    const num = this.lottoEach;

    for (let i = 0; i < num; i++) {
      this.lottoAll.push(this.randomPickNum());
    }
  }
  printAllLotto() {
    Console.print('\n' + this.lottoAll.length + '개를 구매했습니다.');

    this.lottoAll.forEach((lotto) => {
      Console.print(lotto);
    });
  }
  async numberInput() {
    const input = await Console.readLineAsync("\n당첨 번호를 입력해 주세요. \n");
    
    const lotto = new Lotto(input.split(",").map(Number));
    this.number = lotto.lottoReturn(input.split(",").map(Number));
    
    return this.number;
  }

  async bonusNumInput() {
    const input = await Console.readLineAsync("\n보너스 번호를 입력해 주세요. \n");

    this.validBonusInput(Number(input));
    
    this.bonus = Number(input);
    return this.bonus;
  }

    }
  }
  async play() {
    
  }
  
}

export default App;
