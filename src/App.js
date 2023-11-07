import { Console, Random } from '@woowacourse/mission-utils';
import ERROR from './error.js';

class App {
  constructor() {
    this.winningLotto;
    this.userMoneyInput;
    this.userByLottoList = [];
    this.countWinner = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      0: 0
    }
  }

  async play() {
    await this.user();
    await this.lottoMachine();
  }

  async user(){
    await this.getUserInput();
    this.totalLottoListUser();
  }

  async lottoMachine(){
    await this.setLottoNumber();
    await this.setLottoBonusNumber();
    this.checkLottoResult();
  }


  async getUserInput() {
    while (true) {
      const userInput = await this.getUserMoney();
      if (this.checkUserMoney(userInput)) {
        this.userMoneyInput = Number(userInput);
        break;
      }
    }
  }

  async getUserMoney() {
    let userInput;
    while (true) {
      userInput = await Console.readLineAsync("구입금액을 입력해 주세요");
      try {
        this.checkUserMoney(userInput);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return userInput;
  }

  checkUserMoney(userInput) {
    const inputNumber = Number(userInput);
    if (isNaN(inputNumber) || inputNumber % 1000 !== 0 || inputNumber === 0) {
      throw new Error(ERROR.INVALID_INPUT);
    }
    return true;
  }

  lottoQuantity() {
    const count = this.userMoneyInput / 1000;
    Console.print(`${count}개를 구매했습니다.`);
    return count;
  }

  totalLottoListUser() {
    const num = this.lottoQuantity();
    let lottoList = [];

    for (let i = 0; i < num; i++) {
      let randomNumbers = this.generateLotto();
      randomNumbers.sort(function (a, b) {
        return a - b;
      })
      Console.print(`[${randomNumbers.join(', ')}]`);

      lottoList.push(randomNumbers);
    }
    this.userByLottoList = lottoList;
  }

  generateLotto() {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 7);
    return lottoNumber;
  }

  async setLottoNumber() {
    while (true) {
      try {
        const result = await Console.readLineAsync("당첨 번호를 입력해 주세요");
        const numbers = result.split(',').map(Number);
        const isDuplicate = new Set(numbers).size !== numbers.length;

        if (!isDuplicate && numbers.length === 6) {
          this.winningLotto = numbers;
          break;
        } 
      } catch (error) {
        Console.print(ERROR.INVALID_INPUT_LOTTO);
      }
    }
  }



  async setLottoBonusNumber() {
    while (true) {
      try {
        const result = await Console.readLineAsync("보너스 번호를 입력해 주세요");
        const isDuplicate = this.winningLotto.includes(Number(result));
        if (!isDuplicate) {
          this.winningLotto.push(Number(result));
          break;
        }
      } catch (error) {
        Console.print(ERROR.INVALID_INPUT_LOTTO);
      }
    }
  }

  async checkLottoResult() {
    const mainNumber = this.winningLotto.slice(0, 6);
    const bonusNumber = this.winningLotto.slice(6);

    this.userByLottoList.forEach((lotto, index) => {
        this.checkUserLotto(mainNumber,bonusNumber,lotto);
    });

    // 아무도 걸리지 않은 등수 값 0 처리 
    for (const score in this.countWinner) {
      if (this.countWinner[score] === 0) {
        this.countWinner[score] = 0;
      }
    }

    const totalSpentMoney = this.userMoneyInput;

    const totalWinnings = (this.countWinner[5] * 5000) +
      (this.countWinner[4] * 50000) +
      (this.countWinner[3] * 1500000) +
      (this.countWinner[2] * 30000000) +
      (this.countWinner[1] * 2000000000);

    const profitRate = (totalWinnings / totalSpentMoney) * 100;
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${this.countWinner[5]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.countWinner[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.countWinner[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.countWinner[2]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${this.countWinner[1]}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  checkUserLotto(mainNumber,bonusNumber,lotto){
    let checkNumber = mainNumber.filter(x => lotto.includes(x));
    let countScore = checkNumber.length;
    if (countScore === 3) {
      this.countWinner[5]++;
    } else if (countScore === 4) {
      this.countWinner[4]++;
    } else if (countScore === 5) {
      // 3등부터는 보너스 유무 중요
      const bonusMatch = lotto.includes(bonusNumber[0]);
      if (bonusMatch) {
        this.countWinner[3]++; // 보너스 포함 5개 3등
      } else {
        this.countWinner[2]++; // 보너스 제외 5개 2등 
      }
    } else if (countScore === 6) {
      this.countWinner[1]++;
    } else {
      this.countWinner[6]++;
    }
  }


  
}

export default App;
