import { MissionUtils } from "@woowacourse/mission-utils";
import { LottoRandom } from "./LottoRandom";
import Lotto from "./Lotto";

class App {
  async play() {
    let lotto_price = await this.getIncomeAndCheck();
    let lotto_num = lotto_price / 1000;

    const lottoArray = new LottoRandom(lotto_num);

    MissionUtils.Console.print(`${lotto_num}개를 구매했습니다.`);
    lottoArray.printLottoSet();

    let real_num = await this.getRealLottoNumber();
    let bonus = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    lottoArray.getPrize(real_num, bonus);
    lottoArray.printResult();
    this.printReturnRate(lottoArray.win, lotto_price);
  }

  //함수: 로또구입금액을 입력받고, 1000단위가 아닐 경우 예외처리
  async getIncomeAndCheck() {
    let income_num;
    while (true) {
      try {
        let income = await MissionUtils.Console.readLineAsync(
          "구입금액을 입력해 주세요."
        );
        income_num = Number(income);
        if (isNaN(income_num))
          throw new Error("[ERROR] 구입 금액은 숫자를 입력해주세요");
        if (income_num % 1000 != 0)
          throw new Error("[ERROR] 구입 금액은 1,000원 단위로 입력해주세요.");
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
    return income_num;
  }

  async getRealLottoNumber() {
    let real_number, real_number_arr;
    while (true) {
      real_number = await MissionUtils.Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
      );
      real_number_arr = real_number.split(",");
      real_number_arr = real_number_arr.map((e) => Number(e));
      try {
        new Lotto(real_number_arr);

        break;
      } catch (error) {
        MissionUtils.Console.print(this.error);
      }
    }
    return real_number_arr;
  }

  printReturnRate(prize, PAYMENT) {
    let PRIZE =
      prize[0] * 5000 +
      prize[1] * 50000 +
      prize[2] * 1500000 +
      prize[3] * 30000000 +
      prize[4] * 2000000000;
    let RATE_RETURN = ((100 * PRIZE) / PAYMENT).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${RATE_RETURN}%입니다.`);
  }
}

export default App;
