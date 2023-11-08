import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      let [count, change] = await this.userPriceInput();
      this.printCnt(count, change);
      const lotto = this.printLottoNumber(count);

    } catch (error) {
      [count, change] = await this.userPriceInput();
    }
  }
  async userPriceInput() {
    try {
      const price = await MissionUtils.Console.readLineAsync (
        "구입금액을 입력해 주세요.\n"
      );
      if (!this.notNumber(price)) {
        throw new Error("[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.")
      }
      const cnt = price / 1000;
      const change = price % 1000;
      return [cnt, change];
    } catch(error) {
      throw error;
    }
  }

  notNumber(input) {
    return typeof input === 'number' && !isNaN(input);
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
}
  

export default App;
