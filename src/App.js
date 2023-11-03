import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { INPUT_MESSAGES, OUTPUT_MESSAGES } from "./constants/Messages.js";

/*
추가된 요구 사항
함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.
  함수(또는 메서드)가 한 가지 일만 잘 하도록 구현한다.
else를 지양한다.
  힌트: if 조건절에서 값을 return하는 방식으로 구현하면 else를 사용하지 않아도 된다.
  때로는 if/else, switch문을 사용하는 것이 더 깔끔해 보일 수 있다. 어느 경우에 쓰는 것이 적절할지 스스로 고민해 본다.
도메인 로직에 단위 테스트를 구현해야 한다. 단, UI(Console.readLineAsync, Console.print) 로직에 대한 단위 테스트는 제외한다.
  핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분한다.
  단위 테스트 작성이 익숙하지 않다면 __tests__/LottoTest.js를 참고하여 학습한 후 테스트를 구현한다.
*/

class App {
  async play() {
    const INPUT_CASH = await this.inputCash();
    this.showLottoNumbers(this.validateCash(INPUT_CASH));
    const WINNING_NUMBER = await this.inputWinningNumber();
    this.validateWinningNumber(WINNING_NUMBER);
    const BOUNUS_NUMBER = await this.inputBonusNumber();
    this.validateBonusNumber(BOUNUS_NUMBER);
    MissionUtils.Console.print(WINNING_NUMBER, BOUNUS_NUMBER);
  }

  inputCash() {
    const INPUT_CASH = MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.INPUT_CASH_MESSAGE
    );
    return INPUT_CASH;
  }

  validateCash(CASH) {
    const CHANGE = +CASH % 1000;
    if (CHANGE === 0) {
      const NUMBER_OF_GAMES = CASH / 1000;
      return NUMBER_OF_GAMES;
    }
    throw new Error("[ERROR] 구입금액은 1000 단위 정수로 입력이 가능합니다.");
  }

  showLottoNumbers(cash) {
    MissionUtils.Console.print(cash + OUTPUT_MESSAGES.OUTPUT_PURCHASE_QUANTITY);
    const ARRAY_OF_GAMES = [];
    for (let i = 0; i < cash; i++) {
      const LOTTO_NUMBER = MissionUtils.Random.pickUniqueNumbersInRange(
        1,
        45,
        6
      );
      console.log(LOTTO_NUMBER);
      ARRAY_OF_GAMES.push(LOTTO_NUMBER);
    }
    console.log("");
    return ARRAY_OF_GAMES;
  }

  inputWinningNumber() {
    const WINNING_NUMBER = MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.INPUT_WINNING_NUMBER
    );
    return WINNING_NUMBER;
  }

  validateWinningNumber(WINNING_NUMBER) {
    const WINNING_NUMBER_ARRAY = WINNING_NUMBER.split(",");
    const UNIQUE_ARRAY = [...new Set(WINNING_NUMBER_ARRAY)];
    if (WINNING_NUMBER_ARRAY.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (
      WINNING_NUMBER_ARRAY.forEach((number) => {
        +number < 1 || +number > 45;
      })
    ) {
      throw new Error("[ERROR] 로또 번호는 1 ~ 45 사이의 수여야 합니다.");
    }
    if (WINNING_NUMBER_ARRAY.length !== UNIQUE_ARRAY.length) {
      console.log(WINNING_NUMBER_ARRAY);
      console.log(UNIQUE_ARRAY);
      throw new Error("[ERROR] 로또 번호는 중복되지 않는 수여야 합니다.");
    }
    //정수 여부 확인?
  }

  inputBonusNumber() {
    const BOUNUS_NUMBER = MissionUtils.Console.readLineAsync(
      INPUT_MESSAGES.INPUT_BOUNUS_NUMBER
    );
    return BOUNUS_NUMBER;
  }

  validateBonusNumber(BOUNUS_NUMBER) {
    if (BOUNUS_NUMBER < 1 || BOUNUS_NUMBER > 45) {
      throw new Error("[ERROR] 보너스 번호는 1 ~ 45 사이의 수여야 합니다.");
    }
  }
}

export default App;
