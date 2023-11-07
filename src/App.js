import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from "./Lotto.js";

class App {
  async play() {
    
    const input = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    const lottoArray = [];

    const purchasedLotto = Number(input) / 1000
    Console.print(`\n${purchasedLotto}개를 구매했습니다.`)

    for (let i = 0; i < purchasedLotto; i++) { 
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      const lotto2 = new Lotto(lotto);
      lottoArray.push(lotto2);
    }
    lottoArray.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers()
      Console.print(`[${lottoNumbers}]`);
    })

    const answerLotto = await Console.readLineAsync("\n당첨 번호를 입력해주세요.\n");

    const bonusLotto = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");

    const lottoResult = lottoArray.map((lotto) => {
      return lotto.judgingLotto(answerLotto);
    })

    Console.print(lottoResult);
    





  }
}

export default App;
