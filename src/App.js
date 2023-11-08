import {Console, MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const COUNT = await this.getPurchaseAmount();
    const TICKETS = this.createUniqueRandomNums(COUNT);

  }

  // 사용자로부터 구입금액을 입력 받는 메서드
  async getPurchaseAmount(){
    const INPUTPRICE = parseInt(Console.readLineAsync("구입금액을 입력해 주세요."));
    if(INPUTPRICE % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.")
    const COUNT = INPUTPRICE/1000;
    this.printLottoCounts(COUNT);
    return COUNT;
  }

  // 구입금액으로 몇개의 로또를 구매했는지 출력해주는 메서드
  printLottoCounts(COUNT) {
    Console.print(`${COUNT}개를 구매했습니다.`)
  }

  // 중복되지 않는 랜덤 숫자 6개를 생성해주는 메서드
  createUniqueRandomNums(COUNT) {
    const TICKETS = [];
    for(let i = 0; i<COUNT; i++){
      const UNIQUENUMS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
      const TICKET = new Lotto(UNIQUENUMS);
      TICKET.sortNumbers();
      this.printLottoNums(TICKET);
      TICKETS.push(TICKET.returnNumbers());
    }
    return TICKETS;
  }

  // 생성된 로또의 번호를 출력하는 메서드
  printLottoNums(TICKET){
    Console.print(`[${TICKET.returnNumbers().join(", ")}]`);
  }

  // 사용자로부터 당첨 번호를 입력받는 메서드
  async getWinningNum() {
    const INPUTNUMS = parseInt(Console.readLineAsync("당첨 번호를 입력해 주세요."));
    const WINNINGNUM = new Lotto(INPUTNUMS);
    return WINNINGNUM.returnNumbers();
  }
  // getBonusNum
  // 사용자로부터 보너스 번호를 입력받는 메서드
  // printWinningStatistics
  // 당첨 통계를 출력해주는 메서드
  // calculateProfit
  // 총 수익률을 계산해주는 메서드
}

export default App;
