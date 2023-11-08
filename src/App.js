import { MissionUtils } from "@woowacourse/mission-utils";
import { LottoRandom } from "./LottoRandom";
import Lotto from "./Lotto";

class App {
  async play() {
    let lotto_price = await this.getIncomeAndCheck();
    let lotto_num = lotto_price / 1000;

    MissionUtils.Console.print(`${lotto_num}개를 구매했습니다.`);

    const lottoArray = new LottoRandom(lotto_num);
    lottoArray.printLottoSet();
    // 보너스 번호를 입력 받는다.
    let real_num = await this.getRealLottoNumber();
    let bonus = await MissionUtils.Console.readLineAsync(
      "보너스 번호를 입력해 주세요."
    );
    lottoArray.getPrize(real_num, bonus);
    lottoArray.getResult();
    this.printReturnRate(lottoArray.win, lotto_price);
  }

  //[x]구입 금액은 1,000원 단위로 입력 받으며 1,000원으로 나누어 떨어지지 않는 경우 예외 처리한다.
  async getIncomeAndCheck() {
    let income_num;
    while (true) {
      try {
        let income = await MissionUtils.Console.readLineAsync(
          "구입금액을 입력해 주세요."
        );
        income_num = Number(income);
        if (isNaN(income_num))
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
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
      if (real_number) {
        //[x] 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다.
        real_number_arr = real_number.split(",");
        real_number_arr = real_number_arr.map((e) => Number(e)); // 숫자로 변환

        try {
          new Lotto(real_number_arr);
          break;
        } catch (error) {
          MissionUtils.Console.print(error.message);
        }
      } else {
        MissionUtils.Console.print("[ERROR] 당첨 번호를 입력해주세요.");
      }
    }
    return real_number_arr;
  }

  // [x] 수익률은 소수점 둘째 자리에서 반올림한다
  printReturnRate(prize, num) {
    let all_prize =
      prize[0] * 5000 +
      prize[1] * 50000 +
      prize[2] * 1500000 +
      prize[3] * 30000000 +
      prize[4] * 2000000000;
    let rate = ((100 * all_prize) / num).toFixed(1);
    MissionUtils.Console.print(`총 수익률은 ${rate}%입니다.`);
  }
}

export default App;
