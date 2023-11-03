import { Console } from '@woowacourse/mission-utils';
import PromptMessage from '../constants/PromptMessage.js';

class InputView {
  constructor() {
    this.price = 0;
    this.winNum = 0;
    this.bonusNum = 0;
  }

  // 구입 금액 입력
  async getPrice() {
    const price = await Console.readLineAsync(PromptMessage.ENTER_PRICE);
    this.price = price;
    Console.print(this.price);
  }

  // 당첨 번호 입력
  async getWinNum() {
    const winNum = await Console.readLineAsync(PromptMessage.ENTER_WIN_NUM);
    this.winNum = winNum.split(',').map((e) => parseInt(e.trim(), 10));
    Console.print(this.winNum);
  }

  // 보너스 번호 입력
  async getBonusNum() {
    const bonusNum = await Console.readLineAsync(PromptMessage.ENTER_BONUS_NUM);
    this.bonusNum = parseInt(bonusNum, 10);
    Console.print(this.bonusNum);
  }
}

export default InputView;
