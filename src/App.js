import {Console, MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const COUNT = await this.getPurchaseAmount();
    const TICKETS = this.createUniqueRandomNums(COUNT);
    const WINNINGNUMS = await this.getWinningNum();
    const BONUS = await this.getBonusNum();
    const WINLOG = this.calculateWin(TICKETS, WINNINGNUMS, BONUS);
    this.printWinningStatistics(WINLOG);
    this.calculateProfit(COUNT, TICKETS);
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

  // 사용자로부터 보너스 번호를 입력받는 메서드
  async getBonusNum(WINNINGNUMS) {
    const BONUS = parseInt(Console.readLineAsync("보너스 번호를 입력해 주세요."));
    if(WINNINGNUMS.has(BONUS)){
      throw new Error("[ERROR] 보너스 번호와 당첨번호 중 한개가 일치합니다.");
    }
    return BONUS;
  }

  // 당첨 여부를 계산해주는 메서드
  calculateWin(TICKETS, WINNINGNUMS, BONUS) {
    const WINLOG = [0, 0, 0, 0, 0];

    TICKETS.forEach(ticket => {
      const TICKETNUM = ticket.returnNumbers();
      const MATCHED = this.countMatchedNumbers(TICKETNUM, WINNINGNUMS);

      if (MATCHED >= 3 && MATCHED <= 6) {
        if (MATCHED === 5 && TICKETNUM.includes(BONUS)) {
          WINLOG[4]++;
        } else {
          WINLOG[MATCHED - 3]++;
        }
      }
    });

    return WINLOG;
  }


  // 몇개의 숫자가 일치하는지 계산해주는 메서드
  countMatchedNumbers(ticketNumbers, WINNINGNUMS) {
    return ticketNumbers.filter(number => WINNINGNUMS.includes(number)).length;
  }

  // 당첨 통계를 출력해주는 메서드
  printWinningStatistics(WINLOG) {
    const prizeList = [5000, 50000, 1500000, 30000000, 2000000000];

    Console.print("당첨 통계\n---");
    for(let i = 0; i<WINLOG.length; i++) {
      if (i === 3) {
        Console.print(`${i + 2}개 일치, 보너스 볼 일치 (${prizeList[i]}) - ${WINLOG[4]}개`);
      } else if (i === 4) {
        Console.print(`${i + 2}개 일치 (${prizeList[i]}) - ${WINLOG[3]}개`);
      } else {
        Console.print(`${i + 3}개 일치 (${prizeList[i]}) - ${WINLOG[i]}개`);
      }
    }
  }

  // 총 수익률을 계산해주는 메서드
  calculateProfit(COUNT ,WINLOG) {
    const PRICE = COUNT * 1000;
    const prizeList = [5000, 50000, 1500000, 2000000000, 30000000];
    let sum = 0;
    for(let i = 0; i<WINLOG.length; i++){
      sum += (WINLOG[i] * prizeList[i])
    }

    const profit = ((sum - PRICE) / PRICE) * 100;
    const roundedProfit = Math.round(profit * 100) / 100;
    Console.print(`총 수익률은 ${roundedProfit}%입니다.`)
  }
}

export default App;
