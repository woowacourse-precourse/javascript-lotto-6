import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class Game {
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
    this.#getLottos(input/1_000);
  }

  #validateMoney(money) {
    if (isNaN(money) || money % 1_000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 수로만 입력할 수 있습니다.");
    }
  }

  #getLottos(number) {
    const lottos = [];
    for(let i=0;i<number;i++) {
      lottos.push(new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a,b)=>a-b)));
    }
    this.lottos = lottos;
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
    if(isNaN(number) || number < 1 || number > 45) {
      throw new Error("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.")
    }
  }

};

export default Game;