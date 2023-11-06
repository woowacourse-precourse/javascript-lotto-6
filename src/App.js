import { MissionUtils, Console } from "@woowacourse/mission-utils";

let lottoComputerNums = [];
let userSixNums = 0;
let computerBonus = 0;
let userBonus = 0;
let userBuy = 0;

let three = 0;
let four = 0;
let five = 0;
let fiveBonus = 0;
let six = 0;

let rateOfReturn = 0;

class App {
  async play() {
    this.getUserBuyCount();
  }
  async getUserBuyCount() {
    try {
      userBuy = await Console.readLineAsync("구입금액을 입력해주세요.");
      if (userBuy % 1000 !== 0) {
        throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      this.lottoCount(userBuy);
    } catch (error) {
      console.error(error.message);
      this.getUserBuyCount();
    }
  }
  lottoCount(userBuy) {
    const userBuyLotto = userBuy / 1000;
    Console.print(`${userBuyLotto}개를 구매했습니다`);
    Console.print("");
    this.computerNums(userBuyLotto);
    this.getUserNum();
  }
  // // 컴퓨터 당첨 번호 출력하기
  computerNums(userBuyLotto) {
    for (let i = 0; i < userBuyLotto; i++) {
      this.getComputerNum();
    }
    this.getComputerBonus();
  }
  getComputerBonus() {
    computerBonus = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 1);
  }

  getComputerNum() {
    const computerNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    //오름차순 정렬
    const computerNum_array = computerNum.sort(function (a, b) {
      if (a > b) return 1;
      if (a === b) return 0;
      if (a < b) return -1;
    });
    lottoComputerNums.push(computerNum_array);
    Console.print(computerNum_array);
  }

  async getUserNum() {
    const userNums = await Console.readLineAsync("당첨번호를 입력해주세요.");
    userSixNums = userNums.split(",");
    this.checkUserNum(userSixNums);
  }
  checkUserNum(userSixNums) {
    try {
      const set = new Set(userSixNums);
      for (let i = 0; i < userSixNums.length; i++) {
        if (userSixNums[i] > 45 || userSixNums[i] < 1) {
          throw new Error("로또 번호는 1부터 45 사이의 숫자여야 합니다.");
        } else if (
          userSixNums.length !== 6 ||
          userSixNums.length !== set.size // 중복된 숫자 확인
        ) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
      }
      this.getUserBonusNum();
    } catch (error) {
      console.error(error.message);
      this.getUserNum();
    }
  }
  async getUserBonusNum() {
    userBonus = await Console.readLineAsync("보너스 번호를 입력해주세요.");
    this.checkBonusNum(userBonus);
  }
  checkBonusNum(userBonus) {
    try {
      for (let i = 0; i < userBonus.length; i++) {
        if (userBonus[i] > 45 || userBonus[i] < 1) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        this.winning();
      }
    } catch (error) {
      console.error(error.message);
      this.getUserBonusNum();
    }
  }
  winning() {
    //사용할 수 있는/ 필요한 변수 : lottoComputerNums, userSixNums, userBonus, computerBonus
    Console.print("당첨 통계");
    Console.print("---");

    for (let i = 0; i < lottoComputerNums.length; i++) {
      this.winningOneCheck(i);
    }

    Console.print(
      `3개 일치 (5,000원) - ${three}개\n4개 일치 (50,000원) - ${four}개\n5개 일치 (1,500,000원) - ${five}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${fiveBonus}개\n6개 일치 (2,000,000,000원) - ${six}개`
    );
    this.rateOfReturn();
  }
  winningOneCheck(i) {
    let count = 0;
    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 6; k++) {
        if (lottoComputerNums[i][j] == userSixNums[k]) {
          count += 1;
        }
      }
    }
    if (count == 3) {
      three += 1;
    } else if (count == 4) {
      four += 1;
    } else if (count == 5 && userBonus === computerBonus) {
      fiveBonus += 1;
    } else if (count == 5) {
      five += 1;
    } else if (count == 6) {
      six += 1;
    }
  }
  rateOfReturn() {
    rateOfReturn =
      (three * 5000 +
        four * 50000 +
        five * 1500000 +
        fiveBonus * 30000000 +
        six * 2000000000) /
      userBuy;
    Console.print(`총 수익률은 ${rateOfReturn}입니다.`);
  }
}
const app = new App();
app.play();

export default App;
