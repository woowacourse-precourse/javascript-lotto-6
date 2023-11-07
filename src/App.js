/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './Input.js';

class App {
  async play() {
    const input = new Input();
    const cash = await input.simpleInput('금액을 입력해주세요\n');
    MissionUtils.Console.print(cash);
    const winningLotto =
      await input.inputChangeToArr('당첨번호를 입력해주세요.\n');
    MissionUtils.Console.print(winningLotto);
  }
}

export default App;
