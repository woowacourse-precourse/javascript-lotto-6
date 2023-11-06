import { print } from "./view/print";
import { readLineAsync } from "./view/readLineAsync";
import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./constant/MESSAGE";
import { NUMBERS } from "./constant/LOTTO_SETTINGS";
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

const printProgressNumber = async (progressNumber) => {
  print(`${progressNumber}${MESSAGE.TOTAL_PURCHASE}`);
}


// Lotto class
// ----------- 로또 발행
const totalLotto = []; // 전체 로또 번호 보관
// 발행한 로또 수량 및 번호를 출력한다.
const drawLottoNumber = async () => {
  const lotto = Random.pickUniqueNumbersInRange(NUMBERS.LOTTO_MIN_NUMBER, NUMBERS.LOTTO_MAX_NUMBER, NUMBERS.LOTTO_LENGTH);
  lotto.sort((a,b) => a-b);
  print(lotto);
  totalLotto.push(lotto);
};

// 발행한 로또 출력
const printLotto = (totalLotto) => {
  const lotto = totalLotto
  .map((numbers) => `[${numbers.join(", ")}]`)
  .join("\n");

  print(lotto);
}

// Answer class
// ----- 당첨 번호 입력 기능
// 보너스 번호 입력 받기

class App {

  async play() {
    const progressNumber = await inputAmount(); // 구입금액을 입력해 주세요.
    await printProgressNumber(progressNumber);
    for (let i=0; i < progressNumber; i++) {
      await drawLottoNumber();
    }
    printLotto(totalLotto); // 발행한 로또 출력

    const myInput = await inputAnswer();
  }

}

export default App;
