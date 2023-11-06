import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    const budget = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const lottoCount = buyLotto(budget);
    let lottoTickets = [];

    for (let i=0; i<lottoCount; i++){
      lottoTickets.push(getLottoTicket())
    }

    Console.print("")
    
    Console.print(`${lottoCount}개를 구매했습니다.`)
    for (let lottoTicket of lottoTickets){
      Console.print(`[${lottoTicket.join(', ')}]`)
    }
    
    const winningNumbers = await Console.readLineAsync("\n당첨 번호를 입력해 주세요.\n");
    const lotto = new Lotto(winningNumbers.split(",").map(number=>Number(number)));
    
    const bonusNumber = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
    lotto.addBonusNumber(bonusNumber)

    let result = {
      "3개 일치 (5,000원)":0, 
      "4개 일치 (50,000원)":0, 
      "5개 일치 (1,500,000원)":0, 
      "5개 일치, 보너스 볼 일치 (30,000,000원)":0, 
      "6개 일치 (2,000,000,000원)":0
    }

    for (let ticket of lottoTickets){
      const count = lotto.checkResult(ticket);
      recordResult(result, count);
    }

    Console.print("\n당첨 통계")
    Object.entries(result).forEach((entry)=>{Console.print(`${entry[0]} - ${entry[1]}개`)})

  }
}

export default App;

const buyLotto = (budget) => {
  if (budget%1000>0) throw new Error("[Error] 구입금액은 1000단위여야 합니다.");
  return budget/1000
}

const getLottoTicket = () => {
  return Random.pickUniqueNumbersInRange(1, 45, 6);
}

const recordResult = (result, count) => {
  switch(count){
    case 3: 
      result["3개 일치 (5,000원)"]++;
      break;
    case 4: 
      result["4개 일치 (50,000원)"]++;
      break;
    case 5: 
      result["5개 일치 (1,500,000원)"]++;
      break;
    case 5.5: 
      result["5개 일치, 보너스 볼 일치 (30,000,000원)"]++;
      break
    case 6: 
      result["6개 일치 (2,000,000,000원)"]++;
      break;
  }
}