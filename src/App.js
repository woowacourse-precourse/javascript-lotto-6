import { print } from "./view/print";
import { readLineAsync } from "./view/readLineAsync";
import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/MESSAGE";
import { NUMBERS } from "./constant/NUMBERS";
import Lotto from "./model/Lotto";

const { Random } = MissionUtils;

// - 구매 금액 입력 받기
const inputAmount = async () =>{
  const amount = await readLineAsync(MESSAGE.INPUT_AMOUNT);
  const remainder = amount%NUMBERS.LOTTO_PRICE;
  const quotient = amount/NUMBERS.LOTTO_PRICE;

  // 에러 처리
  if (remainder) {
    throw new Error(ERROR_MESSAGE.AMOUNT_REMAINDER);
  }

  return quotient;
};


class App {

  async play() {
    const progressNumber = await inputAmount(); // 구입금액을 입력해 주세요.
  }

}

export default App;
