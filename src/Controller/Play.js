import Create from './Create.js';
import User from '../Domain/User.js';
import Lotto from '../Lotto.js';
import Print from '../View/Output.js';
import { Console } from '@woowacourse/mission-utils';

class PlayLottery {
  constructor() {
    this.user = new User();
    this.create = new Create();
  }

  async draw() {
    try {
      await this.compareUserWith(await this.create.RandomLottery());
    } catch (error) {
      Print.output(error.message);
      // await this.draw(); // 에러 시 다시 해당 시점부터 재실행 (이따 기능 추가 커밋때 살릴 것)
    }
  }

  async compareUserWith(randoms) {
    const lotto = new Lotto(await this.create.userLotteryNumber());
    const { matchResult, marginResult } = await lotto.compareWith(randoms);

    Print.repeatResult(matchResult); // 숫자 비교결과 출력
    Console.print(`총 수익률은 ${marginResult}%입니다.`);
  }
}

export default PlayLottery;
