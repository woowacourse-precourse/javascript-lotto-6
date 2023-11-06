import { Random, Console } from '@woowacourse/mission-utils';
import  Lotto  from './Lotto.js';
import ERROR from './error.js';


class App {
  async play() {
    this.gameSetting();

  }
  
  async gameSetting(){
    await this.settingUserInput();
  }

  async settingUserInput(){
    let userInput;
    let isValidInput = false;

    while (!isValidInput) {
      userInput = await this.getUserInput();

      try {
        this.checkInput(userInput);
        isValidInput = true;
      } catch (error) {
        console.error("1000원 단위로 입력해 주세요");
      }
    }
  }

  async getUserInput() {
    const userInput = await Console.readLineAsync("구입금액을 입력해 주세요");
    return userInput;
  }

  checkInput(userInput){
    if (userInput % 1000 !== 0){
      throw new Error(ERROR.INVALID_INPUT);
    }
  }





}



export default App;
