import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    while (true) {
      let count, change, winNumber;
      try {
        [count, change] = await this.userPriceInput();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        // throw error;
      }
    }

    this.printCnt(count, change);
    const lotto = this.printLottoNumber(count);
    
    while (true) {
      try {
        winNumber = await this.userWinningInput();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
        // throw error;
      }
    }
  }
  async userPriceInput() {
    try {
      const price = await MissionUtils.Console.readLineAsync (
        "구입금액을 입력해 주세요.\n"
      );
      if (this.isNumber(price)) {
        throw new Error("[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.")
      }
      const cnt = price / 1000;
      const change = price % 1000;
      return [cnt, change];
    } catch(error) {
      throw error;
    }
  }

  isNumber(input) {
    return typeof input === 'number' && !isNaN(input);
  }

  isLottoNumber(input) {
    return input >= 1 && input <= 45;
  }

  printCnt(count, change) {
    MissionUtils.Console.print(`${count}개 구매했습니다.`);
    if (change > 0) {
      MissionUtils.Console.print(`거스름돈은 ${change}원입니다.`)
    }
  }

  printLottoNumber(count) {
    const lotto = [];
    for (let i = 0; i < count; i++) {
      const random = this.generateRandomNumber(6);
      MissionUtils.Console.print(`[${random.join(',')}]`);
      lotto.add();
    }
    return lotto;
  }
  
  generateRandomNumber(len) {
    const randomList = new Set();
    while (randomList.size < len) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 45);
      randomList.push(randomNumber);
    }
    return randomList.sort();
  }
  
  async userWinningInput() {
    try {
      let winNumber = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요."
      );
      winNumber = winNumber.split(',').map(Number);
      if (this.isNumber(winNumber)) {
        throw new Error("[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.")
      }
      if (this.isLottoNumber(winNumber)) {
        throw new Error("[ERROR] 잘못된 로또 번호 입니다. 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
      }
    } catch (error) {
      throw error;
    }
  }
}
  

export default App;
