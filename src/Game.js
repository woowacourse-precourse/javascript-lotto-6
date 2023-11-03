import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class Game {
  #lottos;
  #choice;
  #bonus;

  async getMoney() {
    const input = await Console.readLineAsync("구입 금액을 입력해주세요.\n");
    this.#validateMoney(input); 
  }

  #validateMoney(money) {
    if (isNaN(money) || money % 1_000 !== 0) {
      throw new Error("[ERROR] 구입 금액은 1,000원 단위의 수로만 입력할 수 있습니다.");
    }
  }
};

export default Game;