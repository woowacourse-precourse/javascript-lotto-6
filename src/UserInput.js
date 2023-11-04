import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant.js";

const UserInput = {
  async inputAmount() {
    const lottoAmount = await Console.readLineAsync(
      `${MESSAGE.PURCHASE_AMOUNT}\n`
    );
    return Number(lottoAmount);
  },

  async inputNumber() {
    const lottoNumbersInput = await Console.readLineAsync(
      `${MESSAGE.LOTTO_NUMBER}\n`
    );

    // 입력받은 로또 번호를 `,` 또는 공백을 기준으로 분리하여 배열로 만들기
    const lottoNumbersArray = lottoNumbersInput
      .split(/[,\s]+/)
      .map((number) => parseInt(number, 10));

    // 유효한 로또 번호인지 검사
    if (
      lottoNumbersArray.length !== 6 ||
      !lottoNumbersArray.every(
        (number) => !isNaN(number) && number >= 1 && number <= 45
      )
    ) {
      console.log("올바른 로또 번호를 입력하세요.");
      // 유효하지 않은 경우 다시 입력받을 수 있도록 재귀 호출
      return this.inputNumber();
    }

    return lottoNumbersArray;
  },
  async inputBonus() {
    const bonusNumber = await Console.readLineAsync(
      `${MESSAGE.BONUS_NUMBER}\n`
    );
    return Number(bonusNumber);
  },
};

export default UserInput;
