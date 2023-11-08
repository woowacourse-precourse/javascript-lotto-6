import {Console, MissionUtils} from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    let COUNT, TICKETS, WINNINGNUMS, BONUS, WINLOG;

    while (true) {
      try {
        COUNT = await this.getPurchaseAmount();
        this.printLottoCounts(COUNT);
        TICKETS = this.createUniqueRandomNums(COUNT);
        WINNINGNUMS = await this.getWinningNum();
        BONUS = await this.getBonusNum(WINNINGNUMS);
        WINLOG = this.calculateWin(TICKETS, WINNINGNUMS, BONUS);
        this.printWinningStatistics(WINLOG);
        this.calculateProfit(COUNT, WINLOG);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  // 사용자로부터 구입금액을 입력 받는 메서드
  async getPurchaseAmount(){
    const INPUTPRICE = await Console.readLineAsync("구입금액을 입력해 주세요.");
    if(isNaN(INPUTPRICE))
      throw new Error("[ERROR] 구입 금액은 1,000원 단위 숫자여야 합니다.")
    if(INPUTPRICE % 1000 !== 0)
      throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.")
    return INPUTPRICE/1000;
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
    const INPUTNUMS = await Console.readLineAsync("당첨 번호를 입력해 주세요.");
    const SPLITINPUT = INPUTNUMS.split(",");

    if (INPUTNUMS.includes(" "))
      throw new Error("[ERROR] 띄어쓰기 대신 쉼표로만 입력해주세요.");
    const WINNUM = [];

    for (let i = 0; i < SPLITINPUT.length; i++) {
      let num = parseInt(SPLITINPUT[i]);
      WINNUM.push(num);
    }
    const WINNINGNUM = new Lotto(WINNUM);
    WINNINGNUM.sortNumbers();
    return WINNINGNUM.returnNumbers();
  }

  // 사용자로부터 보너스 번호를 입력받는 메서드
  async getBonusNum(WINNINGNUMS) {
    const BONUS = await Console.readLineAsync("보너스 번호를 입력해 주세요.");
    if(WINNINGNUMS.includes(BONUS)){
      throw new Error("[ERROR] 보너스 번호와 당첨번호 중 한개가 일치합니다.");
    }
    return BONUS;
  }

  // 당첨 여부를 계산해주는 메서드
  calculateWin(TICKETS, WINNINGNUMS, BONUS) {
    const WINLOG = [0, 0, 0, 0, 0];

    TICKETS.forEach(ticket => {
      const MATCHED = this.countMatchedNumbers(ticket, WINNINGNUMS);

      if (MATCHED >= 3 && MATCHED <= 6) {
        if (MATCHED === 5 && ticket.includes(BONUS)) {
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
    const PRIZELIST = ["5,000", "50,000", "1,500,000", "30,000,000", "2,000,000,000"];

    Console.print("당첨 통계\n---");
    for(let i = 0; i<WINLOG.length; i++) {
      if (i === 3) {
        Console.print(`${i + 2}개 일치, 보너스 볼 일치 (${PRIZELIST[i]}원) - ${WINLOG[4]}개`);
      } else if (i === 4) {
        Console.print(`${i + 2}개 일치 (${PRIZELIST[i]}원) - ${WINLOG[3]}개`);
      } else {
        Console.print(`${i + 3}개 일치 (${PRIZELIST[i]}원) - ${WINLOG[i]}개`);
      }
    }
  }

  // 총 수익률을 계산해주는 메서드
  calculateProfit(COUNT, WINLOG) {
    const PRICE = COUNT * 1000;
    const PRIZELIST = [5000, 50000, 1500000, 2000000000, 30000000];
    let sum = 0;
    for(let i = 0; i<WINLOG.length; i++){
      sum += (WINLOG[i] * PRIZELIST[i]);
    }

    const PROFIT = (sum / PRICE) * 100;
    const ROUNDEDPROFIT = Math.round(PROFIT * 100) / 100;
    Console.print(`총 수익률은 ${ROUNDEDPROFIT}%입니다.`)
  }
}

export default App;
