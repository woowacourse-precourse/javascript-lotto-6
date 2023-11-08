import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from "./Lotto.js";

class App {
  async play() {
    try {
      const moneyInput = await Console.readLineAsync("구입금액을 입력해 주세요.\n");

      const lottoTickets = [];

      const purchasedLotto = Number(moneyInput) / 1000;

      for (let i = 0; i < purchasedLotto; i++) { 
        const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
        const lotto2 = new Lotto(lotto);
        lottoTickets.push(lotto2);
      }

      lottoTickets.forEach((lotto) => {
        const lottoNumbers = lotto.getNumbersString();
        Console.print(`[${lottoNumbers}]`);
      })

      let answerLotto = await Console.readLineAsync("\n당첨 번호를 입력해주세요.\n");
      answerLotto = answerLotto.split(',').map((number) => {
        return Number(number);
      })
      
      const bonusLotto = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");

      const lottoResult = lottoTickets.map((lottoTicket) => {
        return lottoTicket.judgeLotto(answerLotto);
      })

      const lottoBonusResult = lottoTickets.map((lottoTicket) => {
        return lottoTicket.judgeBonus(parseInt(bonusLotto));
      })


      
      
    } catch (error) {
      Console.print(error.message);
    }
    

  }
}

export default App;
