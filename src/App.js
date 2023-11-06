import { Random, Console } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import ERROR from './error.js';


class App {

  constructor() {
    this.userMoneyInput;
  }
  async play() {
    // 사용자의 입력 받기
    await this.userInput();
    console.log(this.userMoneyInput);
  }

  async userInput() {
    let userInput;
    let isValidInput = false;

    while (!isValidInput) {
      userInput = await this.getUserMoney();

      try {
        this.checkUserMoney(userInput);
        isValidInput = true;
      } catch (error) {
        // 에러 메시지 출력 및 다시 입력 받기
        console.error(error.message);
      }
    }
    this.userMoneyInput = Number(userInput);
  }

  async getUserMoney() {
    return await Console.readLineAsync("구입금액을 입력해 주세요");
  }

  checkUserMoney(userInput) {
    if (userInput % 1000 !== 0) {
      throw new Error(ERROR.INVALID_INPUT);
    }
  }





}



export default App;
