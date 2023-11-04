import { Console } from "@woowacourse/mission-utils";

class Inoutput {
  static async buyLotto() {
    const BUY_MENT = "구입금액을 입력해 주세요: ";
    const LottoCount = await Console.readLineAsync(BUY_MENT);
    const amount = parseInt(LottoCount, 10);
    console.log(amount);
    return amount;
  }
}

export default Inoutput;
