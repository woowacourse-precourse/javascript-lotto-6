import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Controller from "./Controller.js";

class View {
  constructor() {}

  //구입금액입력
  async inputLottoPrice() {
    while (true) {
      try {
        let money = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
        money = parseInt(money);

        this.validateLottoPrice(money);

        let amount = money / 1000;

        return amount;
      } catch (e) {
        Console.print(e.message);
        continue;
      }
    }
  }

  //구입금액확인
  validateLottoPrice(money) {
    if (money % 1000) {
      throw new Error("[Error] 숫자가 잘못된 형식입니다.");
    }
  }

  //당첨번호입력
  async inputLottoNumbers() {
    while (true) {
        
      try {
        let lottoNumbers = await Console.readLineAsync(
          "\n당첨 번호를 입력해 주세요.\n"
        )
        lottoNumbers = lottoNumbers.split(",").map(Number);

        const userLotto = new Lotto(lottoNumbers);

        this.validateLottoNumber(userLotto.printNumbers(lottoNumbers));

        return userLotto.printNumbers(lottoNumbers);
      } catch (err) {
        Console.print(err.message);
        continue;
      }
    }
  }

  //당첨번호확인
  validateLottoNumber(userLotto) {
    let errorFlag = userLotto.some((item) => {
      return ((item < 1) || (item > 45));
    });

    let setUserLotto = new Set(userLotto);

    if (!userLotto) {throw new Error("[ERROR] 당첨번호 6개를 입력해주세요.");}

    if (errorFlag) {throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");}

    if (setUserLotto.size < 6) {throw new Error("[ERROR] 로또 번호는 중복된 숫자가 없어야 합니다.");}
  }

  //보너스번호입력
  async inputBonusNumber() {
    let errorFlag = "";
    let bonus;

    while (true) {
      try {
        bonus = await Console.readLineAsync("\n보너스 번호를 입력해 주세요.\n");
        bonus = parseInt(bonus);

        this.validateBonusNumber(bonus);

        return bonus;
      } catch (err) {
        Console.print(err.message);
        continue;
      }
    }
  }

  //보너스번호확인
  validateBonusNumber(bonus) {
    if (isNaN(bonus)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
  }

  //로또번호출력
  printLottoNumbers(amount, ArrayLottos) {
    Console.print("\n" + amount + "개를 구매했습니다.");

    for (let loc = 0; loc < ArrayLottos.length; loc++) {
      Console.print("[" + ArrayLottos[loc].join(", ") + "]");
    }
  }

  //당첨통계출력
  printLottoStat(winnerTotal) {
    Console.print("\n당첨 통계\n---");

    let winnerTitle = [
      "3개 일치",
      "4개 일치",
      "5개 일치",
      "5개 일치, 보너스 볼 일치",
      "6개 일치",
    ];
    let winnerMoney = [5000, 50000, 1500000, 30000000, 2000000000];

    for (let loc = 0; loc < winnerTotal.length; loc++) {
      Console.print(
        winnerTitle[loc] +
          " (" +
          winnerMoney[loc].toLocaleString() +
          "원) - " +
          winnerTotal[loc] +
          "개"
      );
    }
  }

  //당첨수익률출력
  printLottoRate (amount, winnerTotal) {
    let rateOfReturn = 0;
    let winnerMoney = [5000, 50000, 1500000, 30000000, 2000000000];

    for (let loc = 0; loc < winnerTotal.length; loc++) {
      rateOfReturn += winnerMoney[loc] * winnerTotal[loc];
    }

    rateOfReturn = (rateOfReturn / (amount * 1000)) * 100;
    rateOfReturn = rateOfReturn.toFixed(1);

    Console.print("총 수익률은 " + rateOfReturn + "%입니다.");
  }
}

export default View;
