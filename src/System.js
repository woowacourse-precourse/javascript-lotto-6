import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, INPUT_MESSAGE } from "./constants/constants";
import Lotto from "./Lotto";
import generateLottoNumbers from "./utils/generateLottoNumbers";

class System {
  saveLottoNumbers() {
    let lotto;
    while (true) {
      lotto = generateLottoNumbers();
      try {
        lotto.duplicate(); // 중복 검사를 실행하여 중복이 있으면 예외가 발생
        break;
      } catch (error) {
        console.error(error.message); // 중복이 있으면 예외 메시지를 출력
      }
    }

    return lotto;
  }

  async purchaseLottos(lottoCount) {
    const lottos = [];
    for (let i = 0; i < lottoCount; i++) {
      const lotto = this.saveLottoNumbers();
      lottos.push(lotto);
    }
    return lottos;
  }

  async getLotto() {
    let lotto;
    while (true) {
      const lottoNumbers = await this.#inputLottoNumbers();
      try {
        lotto = new Lotto(lottoNumbers);
        lotto.duplicate();
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return lotto;
  }

  async #inputLottoNumbers() {
    const userInput = await Console.readLineAsync(INPUT_MESSAGE.lottoNumber);
    const lottoNumbers = userInput.split(",").map(Number);

    return lottoNumbers;
  }

  async getBonusNumber(lotto) {
    let bonusNumber = 0;
    let lottoNumbersSet = new Set();
    while (true) {
      const inputBonusNumber = await Console.readLineAsync(
        INPUT_MESSAGE.bonusNumber
      );
      bonusNumber = Number(inputBonusNumber);
      lottoNumbersSet = new Set(lotto.getNumbers());
      try {
        this.isDuplicateLottoNumber(bonusNumber, lottoNumbersSet);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return [bonusNumber, lottoNumbersSet];
  }

  isDuplicateLottoNumber(bonusNumber, lottoNumbersSet) {
    if (lottoNumbersSet.has(bonusNumber)) {
      throw new Error(ERROR_MESSAGE.duplicateLottoNumber);
    }
  }
}

export default System;
