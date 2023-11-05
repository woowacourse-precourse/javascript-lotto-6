import { Console } from "@woowacourse/mission-utils";
  const AMOUNT_MESSAGE = "구입금액을 입력해 주세요: ";
class Inoutput {
  static async buyLotto() {
    const LottoCount = await Console.readLineAsync(AMOUNT_MESSAGE);
    const amount = parseInt(LottoCount, 10);
    console.log(amount);
    return amount;
  }

  
}

export default Inoutput;
