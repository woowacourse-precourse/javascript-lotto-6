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

    while (true) {
      try {
        const bonusNumber = await this.userBonusInput();
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    const winList = [0, 0, 0, 0, 0];
    lotto.map((l) => {
      const idx = this.checkWinning(l, winNumber, bonusNumber);
      winList[idx] = winList[idx] + 1;
    });

    this.printWinningList(winList);
    this.printROI(winList, count);
  }
  async userPriceInput() {
    try {
      const price = await MissionUtils.Console.readLineAsync (
        "구입금액을 입력해 주세요.\n"
      );
      if (!this.isNumber(price)) {
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
      if (!this.isNumber(winNumber)) {
        throw new Error("[ERROR] 잘못된 형식입니다. 숫자를 입력해주세요.")
      }
      if (!this.isLottoNumber(winNumber)) {
        throw new Error("[ERROR] 잘못된 로또 번호 입니다. 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
      }
    } catch (error) {
      throw error;
    }
  }

  async userBonusInput() {
    try {
      let bonusNumber = await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요.\n"
      );
      if (!this.isNumber(bonusNumber)) {
        throw new Error("[Error] 잘못된 형식입니다. 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
      }
      if (!this.isLottoNumber(bonusNumber)) {
        throw new Error("[Error] 잘못된 로또 번호 입니다. 로또 번호는 1부터 45 사이의 숫자여야 합니다.")
      }
    } catch (error) {
      throw error;
    }
  }

  checkWinning(userNumber, winNumber, bonusNumber) {
    const matching = userNumber.filter((e) => {
      winNumber.includes(e);
    });
    bonus = winNumber.includes(bonusNumber);
    return this.mappingCount(matching.length, bonus);
  }

  mappingCount(len, bonus) {
    switch (len) {
      case 3:
        return 0;
      case 4:
        return 1;
      case 5:
        if (bonus) return 3;
        else return 2;
      case 6:
        return 4;
    }
  }

  printWinningList(winList) {
    MissionUtils.Console.print("당첨 통계\n---\n");
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${winList[0]}개\n`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${winList[1]}개\n`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winList[2]}개\n`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${winList[3]}개\n`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winList[4]}개\n`);
  }

  printROI(winList, count) {
    const price = [5000, 50000, 1500000, 30000000, 2000000000];
    let winnings = 0;
    winList.map((w, idx) => {
      winnings = winnings + w * price[idx];
    })
    count = count * 1000 / 100;
    const result = winnings / count;
    MissionUtils.Console.print('총 수익률은 ${Number(result.toFixed(2))%입니다.\n}');
  }
}
  

export default App;
