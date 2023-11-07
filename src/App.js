import { Console, Random } from '@woowacourse/mission-utils';
import ERROR from './error.js';

class App {
  constructor() {
    this.winningLotto;
    this.userMoneyInput;
    this.userByLottoList = [];
  }

  async play() {
    try {
      await this.userInput();
      await this.totalLottoListUser();
      await this.settingLottoNumber();
      await this.settingLottoBonusNumber();
    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  async userInput() {
    while (true) {
      const userInput = await this.getUserMoney();
      if (this.checkUserMoney(userInput)) {
        this.userMoneyInput = Number(userInput);
        break;
      }
    }
  }

  async getUserMoney() {
    return await Console.readLineAsync("구입금액을 입력해 주세요");
  }

  checkUserMoney(userInput) {
    const inputNumber = Number(userInput);
    if (isNaN(inputNumber) || inputNumber % 1000 !== 0 || inputNumber === 0) {
      throw new Error(ERROR.INVALID_INPUT);
    }
    return true;
  }

  userByLotto() {
    const count = this.userMoneyInput / 1000;
    Console.print(`${count}개를 구매했습니다.`);

    // Modify the code to print expected log messages
    for (let i = 0; i < count; i++) {
      const randomNumbers = this.generateRandomNumber().join(', ');
      Console.print(`[${randomNumbers}]`);
    }

    return count;
  }

  totalLottoListUser() {
    const num = this.userByLotto();
    let lottoList = [];

    for (let i = 0; i < num; i++) {
      let randomNumbers = this.generateRandomNumber().join(',');
      randomNumbers = randomNumbers.split(',').map(Number);
      lottoList.push(randomNumbers);
    }
    this.userByLottoList = lottoList;
  }

  generateRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  async settingLottoNumber() {
    while (true) {
      try {
        const result = await Console.readLineAsync("당첨 번호를 입력해 주세요");
        const numbers = result.split(',').map(Number);
        const isDuplicate = new Set(numbers).size !== numbers.length;

        if (!isDuplicate) {
          this.winningLotto = numbers;
          break; 
        } else {
          Console.print(ERROR.INVALID_INPUT_IS_DUPLICATED);
        }
      } catch (error) {
        Console.print(ERROR.INVALID_INPUT_LOTTO);
      }
    }
  }

  async settingLottoBonusNumber() {
    while (true){
      try{
        const result =  await Console.readLineAsync("보너스 번호를 입력해 주세요");
        const isDuplicate = this.winningLotto.includes(Number(result));
        if (!isDuplicate) {
          this.winningLotto.push(Number(result));
          break;
        } else {
          Console.print(ERROR.INVALID_INPUT_IS_DUPLICATED);
        }
      } catch (error) {
        Console.print(ERROR.INVALID_INPUT_LOTTO);
      }
    }
  }

  async checkLottoResult(){
    console.log("this.userByLottoList",this.userByLottoList);
    console.log("this.winningLotto", this.winningLotto);
  }
}

export default App;
