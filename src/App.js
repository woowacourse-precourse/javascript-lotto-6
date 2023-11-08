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


      const resultCount = [0, 0, 0, 0, 0]
      let totalPrize = 0;
      
      for (let i = 0; i < lottoResult.length; i++) {

        if (lottoResult[i] === 6) {
          resultCount[0]++;
          totalPrize += 2000000000;
        }
        if (lottoResult[i] === 5 && lottoBonusResult[i] === 1) {
          resultCount[1]++;
          totalPrize += 30000000;
        }
        if (lottoResult[i] === 4 && lottoBonusResult[i] === 1) {
          resultCount[2]++;
          totalPrize += 1500000;
        }
        if (lottoResult[i] === 3 && lottoBonusResult[i] === 1) {
          resultCount[3]++;
          totalPrize += 50000;
        }
        if (lottoResult[i] === 2 && lottoBonusResult[i] === 1) {
          resultCount[4]++;
          totalPrize += 5000;
        }
      }
      
      Console.print('\n' + '당첨 통계');
      Console.print(`---`);
      Console.print(`3개 일치 (5,000원) - ${resultCount[4]}개`);
      Console.print(`4개 일치 (50,000원) - ${resultCount[3]}개`);
      Console.print(`5개 일치 (1,500,000원) - ${resultCount[2]}개`);
      Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultCount[1]}개`);
      Console.print(`6개 일치 (2,000,000,000원) - ${resultCount[0]}개`);
      
      const totalProfitRate = ((totalPrize / moneyInput) * 100).toFixed(1);

      Console.print(`총 수익률은 ${totalProfitRate}%입니다.`);
      
    } catch (error) {
      Console.print(error.message);
    }
    

  }
}

export default App;
