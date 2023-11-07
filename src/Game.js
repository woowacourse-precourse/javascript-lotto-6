import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class Game {
  #PRICE_TABLE = [{
    price: 5_000,
    string: "3개 일치 (5,000원)"
  }, {
    price: 50_000,
    string: "4개 일치 (50,000원)"
  }, {
    price: 1_500_500,
    string: "5개 일치 (1,500,000원)"
  }, {
    price: 30_000_000,
    string: "5개 일치, 보너스 볼 일치 (30,000,000원)"
  }, {
    price: 2_000_000_000,
    string: "6개 일치 (2,000,000,000원)"
  },];

  money;
  lottos;
  choice;
  bonus;

  constructor() {
    this.lottos = [];
    this.choice = null;
    this.bonus = -1;
  }

  async getMoney() {
    const input = await Console.readLineAsync("구입 금액을 입력해주세요.\n");
    this.#validateMoney(input);
    this.money = input;
    this.#getLottos(input / 1_000);
  }

  #validateMoney(money) {
    if (isNaN(money) || money % 1_000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 수로만 입력할 수 있습니다.");
    }
  }

  #getLottos(number) {
    const lottos = [];
    for (let i = 0; i < number; i++) {
      lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)));
    }
    this.lottos = lottos;
  }

  printLottos() {
    Console.print(`${this.lottos.length}개를 구매했습니다.`);
    this.lottos.forEach(lotto=>{lotto.printLotto()});
  }

  async getChoiceNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해 주세요.\ n");
    this.choice = new Lotto(input.split(","));
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
    this.#validateNumber(input);
    this.bonus = input;
  }

  #validateNumber(number) {
    if (isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.")
    }
  }

  getResult() {
    Console.print("당첨 통계\n---")
    const result = this.lottos.reduce((acc, lotto) => {
      const rank = lotto.compare(this.choice.numbers, this.bonus);
      if (rank < 6) acc[5 - rank] += 1;
      return acc;
    }, [0, 0, 0, 0, 0])

    result.forEach((count, idx) => {
      Console.print(`${this.#PRICE_TABLE[idx].string} - ${count}개`);
    })

    this.getEarningsRate(result);
  }

  getEarningsRate(counts) {
    const totalPrice = counts.reduce((acc, curr, idx) => acc +this.#PRICE_TABLE[idx].price * curr, 0);
    const rates = totalPrice / this.money;
    Console.print(`총 수익률은 ${Math.floor(rates*1000)/10}%입니다.`);
  }

};

export default Game;