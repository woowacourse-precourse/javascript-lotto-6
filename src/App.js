import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";

class App {
  constructor() {
    this.lottoList;
    this.winNumber;
    this.bonusNumber;
    this.winDetail = {
      match3: 0,
      match4: 0,
      match5: 0,
      match5Bonus: 0,
      match6: 0,
    };
    this.profit = {
      match3: 5000,
      match4: 50000,
      match5: 1500000,
      match5Bonus: 30000000,
      match6: 2000000000,
    };
  }
  async play() {
    await this.setLottoList();
    await this.inputWinNumber();
    await this.inputBonusNumber();
    this.printLottoList();
    this.setWinDetail();
    this.printResult();
  }
  async buyLotto() {
    MissionUtils.Console.print(
      "로또 구입 금액을 입력해주세요.(로또 티켓 1장= 1000원)"
    );
    const money = await MissionUtils.Console.readLineAsync(
      "로또 구입 금액을 입력해주세요.(로또 티켓 1장= 1000원)"
    );
    // 유효성 검사 필요, money
    const LOTTO_PRICE = 1000;
    const lottoTiket = money / LOTTO_PRICE;
    MissionUtils.Console.print(`${lottoTiket}개를 구매했습니다.`);
    return lottoTiket;
  }
  async setLottoList() {
    this.lottoList = [];
    const lottoTiket = await this.buyLotto();
    const DRAW_COUNT = 6;
    for (let i = 0; i !== lottoTiket; i++) {
      let lotto = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        DRAW_COUNT
      ).sort(function (a, b) {
        return a - b;
      });
      this.lottoList.push(lotto);
    }
    return;
  }
  async inputWinNumber() {
    MissionUtils.Console.print(
      "당첨 번호를 입력해주세요. \n 번호는 6개가 필요하며 쉼표(,)로 구분해서 한꺼번에 입력해주세요. \n 번호의 범위는 1에서 45까지이며 중복되어선 안됩니다."
    );
    let winNumber = await MissionUtils.Console.readLineAsync(
      "당첨 번호를 입력해주세요. \n 번호는 6개가 필요하며 쉼표(,)로 구분해서 한꺼번에 입력해주세요. \n 번호의 범위는 1에서 45까지이며 중복되어선 안됩니다."
    );

    const changeWinNumber = (element) => Number(element.trim());
    winNumber = winNumber.split(",").map(changeWinNumber);
    // 유효성 검사 필요, winNumber
    this.winNumber = new Lotto(winNumber);
  }
  async inputBonusNumber() {
    MissionUtils.Console.print(
      "보너스 번호를 입력해주세요. \n 번호의 범위는 1에서 45까지이며 당첨번호와 중복되어선 안됩니다."
    );
    let bonusNumber = Number(
      await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해주세요. \n 번호의 범위는 1에서 45까지이며 당첨번호와 중복되어선 안됩니다."
      )
    );
    // console.log("bonusNumber", bonusNumber);
  }
  validateBonusNumber() {}
  printLottoList() {
    this.lottoList.forEach((element, index) => {
      MissionUtils.Console.print(
        index == 0
          ? `[${element.join().replaceAll(",", ", ")}]`
          : `\n [${element.join().replaceAll(",", ", ")}]`
      );
    });
    //임시로 주석 처리
  }

  setWinDetail() {
    const matchLotto = (lottoArray) =>
      lottoArray.filter((element) =>
        this.winNumber.getNumber().includes(element)
      ).length;

    this.lottoList.forEach((lottoArray, index, array) => {
      const match = matchLotto(lottoArray);

      switch (match) {
        case 3:
          this.winDetail.match3++;
          break;
        case 4:
          this.winDetail.match4++;
          break;
        case 5:
          if (array[index].include(this.bonusNumber))
            this.winDetail.match5Bonus++;
          else this.winDetail.match5++;
          break;
        case 6:
          this.winDetail.match5++;
          break;
        default:
          break;
      }
    });
  }

  printResult() {
    console.log("printResult");
    MissionUtils.Console.print(`당첨 통계 \n --- \n  `);
    this.printWinDetail();
    this.printProfit();
  }

  printWinDetail() {
    MissionUtils.Console.print(
      `3개 일치 (${this.profit.match3.toLocaleString()}원) - ${
        this.winDetail.match3
      }개
      \n4개 일치 (${this.profit.match4.toLocaleString()}원) - ${
        this.winDetail.match4
      }개
      \n5개 일치 (${this.profit.match5.toLocaleString()}원) - ${
        this.winDetail.match5
      }개
      \n5개 일치, 보너스 볼 일치 (${this.profit.match5Bonus.toLocaleString()}원) - ${
        this.winDetail.match5Bonus
      }개
      \n6개 일치 (${this.profit.match6.toLocaleString()}원) - ${
        this.winDetail.match6
      }개
      `
    );
  }
  printProfit() {
    let profit = 0;
    const count = Object.keys(this.profit).length;

    for (let i = 3; i !== count + 2; i++) {
      profit += this.profit[`match${i}`] * this.winDetail[`match${i}`];
    }
    profit += this.profit.match5Bonus * this.winDetail.match5Bonus;
    const inputMoney = this.lottoList.length * 1000;
    const rateProfit = ((profit / inputMoney) * 100).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${rateProfit}%입니다. `);
  }

  // reset(){}
}

export default App;
