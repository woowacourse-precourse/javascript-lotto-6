import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  async play() {
    let lottoCount = await getUserInput("구입금액을 입력해 주세요.\n", (answer)=>{return buyLotto(Number(answer))});
    
    let lottoTickets = [];
    for (let i=0; i<lottoCount; i++){
      lottoTickets.push(getLottoTicket())
    }

    Console.print(`\n${lottoCount}개를 구매했습니다.`)
    for (let lottoTicket of lottoTickets){
      Console.print(`[${lottoTicket.join(', ')}]`)
    }
    
    const lotto = await getUserInput("\n당첨 번호를 입력해 주세요.\n", (winningNumbers) => new Lotto(winningNumbers.split(",").map(number=>Number(number))))
    
    await getUserInput("\n보너스 번호를 입력해 주세요.\n",(bonusNumber) => lotto.addBonusNumber(bonusNumber));
    

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
    let income = 0;
    Object.entries(result).forEach((entry, index)=>{
      income += [5000,50000,1500000,30000000,2000000000][index]*entry[1]
      Console.print(`${entry[0]} - ${entry[1]}개`)
    })

    
    Console.print(`\n총 수익률은 ${income/(lottoCount*10)}%입니다.`)
  }
}

export default App;

const buyLotto = (budget) => {
  if (budget%1000!==0) throw new Error("[ERROR] 구입금액은 1000단위 숫자여야 합니다.");
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

const getUserInput = async (message, callback) => {
  while (true){
    try{
      let answer = await Console.readLineAsync(message);
      return callback(answer)
    }catch(e){
      Console.print(e.message)
    }
  }
}
