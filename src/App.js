/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
import { MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class App {
  async play() {
    await this.userInputMoney();
    const userNumber = await this.userInputLotto();
    await this.lotto(userNumber);
  }

  async userInputMoney() {
    const onlyHasNumber = /^\d+$/;
    const userMoney = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
    const gameRound = userMoney / 1000;
    if (!onlyHasNumber.test(userMoney)) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }
    MissionUtils.Console.print('구입금액을 입력해 주세요.');
    MissionUtils.Console.print(`${userMoney}`);
    MissionUtils.Console.print(`${gameRound}개를 구매했습니다.`);
    this.pickLottoNumber(gameRound);
  }

  async userInputLotto() {
    const userNumber = await MissionUtils.Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
    MissionUtils.Console.print(`당첨 번호를 입력해 주세요.\n${userNumber}`);
    this.pickLottoNumber(userNumber);
    return userNumber;
  }

  async pickLottoNumber(num) {
    const pickNumberArray = [];
    for (let i = 0; i < num; i++) {
      const userlottoNum = [...new Set(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6))];
      MissionUtils.Console.print(userlottoNum);
      pickNumberArray.push(userlottoNum);
    }

    return pickNumberArray;
  }

  async lotto(userNumber) {
    const lotto = new Lotto(userNumber);
  }
}

export default App;
