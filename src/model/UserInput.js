// 파일명 : UserInput.js
// 설명 : 사용자의 입력을 관리하는 클래스
import { MissionUtils } from '@woowacourse/mission-utils';
import Messages from '../utils/Messages.js';

class UserInput {
  //static 하게 관리
  #lottoInput;
  #bonusInput;
  #moneyInput;
  #messages = new Messages();

  async getStringInputs() {
    return {
      lottoInput: this.#lottoInput,
      bonusInput: this.#bonusInput,
      moneyInput: this.#moneyInput,
    };
  }

  async setMoneyInput() {
    const money = await MissionUtils.Console.readLineAsync(
      this.#messages.getInputMsg('money')
    );
    this.#moneyInput = money;
    return money;
  }

  async setBonusInput() {
    const bonus = await MissionUtils.Console.readLineAsync(
      this.#messages.getInputMsg('bonus')
    );
    this.#bonusInput = bonus;
    return bonus;
  }

  async setLottoInput() {
    const lotto = await MissionUtils.Console.readLineAsync(
      this.#messages.getInputMsg('lotto')
    );
    this.#lottoInput = lotto;
    return lotto;
  }
}

export default UserInput;
