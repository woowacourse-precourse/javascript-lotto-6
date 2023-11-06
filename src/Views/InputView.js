import { Console } from "@woowacourse/mission-utils";

class InputView {
  async getBuyMoneyInput() {
    let isValidInput = false;
    let userMoneyNumber;

    while (!isValidInput) {
      try {
        const userMoneyInput = await Console.readLineAsync(
          "구입금액을 입력해 주세요.\n"
        );
        userMoneyNumber = Number(userMoneyInput);
        this.#validateMoneyInput(userMoneyNumber);
        isValidInput = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return userMoneyNumber;
  }

  async getTargetLottoInfoInput() {
    const targetNumberList = await this.#getTargetLottoNumberInput();
    const targetBonusNumber = await this.#getTargetLottoBonusNumberInput(
      targetNumberList
    );

    return { targetNumberList, targetBonusNumber };
  }

  async #getTargetLottoNumberInput() {
    let isValidInput = false;
    let targetNumberList;
    while (!isValidInput) {
      try {
        const targetLottoInput = await Console.readLineAsync(
          "당첨 번호를 입력해 주세요.\n"
        );
        targetNumberList = targetLottoInput.split(",").map(Number);
        this.#validateLottoNumberInput(targetNumberList);
        isValidInput = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return targetNumberList;
  }

  async #getTargetLottoBonusNumberInput(targetNumberList) {
    let isValidInput = false;
    let targetBonusNumber;
    while (!isValidInput) {
      try {
        const targetBonusInput = await Console.readLineAsync(
          "보너스 번호를 입력해 주세요\n"
        );
        targetBonusNumber = Number(targetBonusInput);
        this.#validateLottoBonusNumberInput(
          targetNumberList,
          targetBonusNumber
        );
        isValidInput = true;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return targetBonusNumber;
  }

  #validateMoneyInput(userMoneyInput) {
    if (!userMoneyInput) {
      throw new Error("[ERROR] 금액을 입력해 주세요");
    }

    if (Number.isNaN(userMoneyInput)) {
      throw new Error("[ERROR] 숫자를 입력해 주세요");
    }

    if (userMoneyInput % 1000 !== 0) {
      throw new Error("[ERROR] 금액은 1000원 단위로 입력해 주세요");
    }
  }

  #validateLottoNumberInput(lottoNumber) {
    if (lottoNumber.some((number) => Number.isNaN(number))) {
      throw new Error("[ERROR] 숫자를 입력해 주세요");
    }

    if (lottoNumber.some((number) => number < 1 || number > 45)) {
      throw new Error("[ERROR] 1~45 사이의 숫자를 입력해 주세요");
    }

    if (lottoNumber.length !== 6) {
      throw new Error("[ERROR] 당첨 로또 번호는 6개여야 합니다.");
    }

    if (new Set(lottoNumber).size !== 6) {
      throw new Error("[ERROR] 당첨 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  #validateLottoBonusNumberInput(lottoNumber, bonusNumber) {
    if (Number.isNaN(bonusNumber)) {
      throw new Error("[ERROR] 숫자를 입력해 주세요");
    }

    if (lottoNumber.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호에 포함될 수 없습니다.");
    }
  }
}

export default InputView;
