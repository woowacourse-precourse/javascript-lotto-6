import { Console } from "@woowacourse/mission-utils";
import { EMPTY_LINE, INPUT_MESSAGE } from "../constants/messages.js";

// 입력받은 값에 대한 검증 및 가공 처리
class InputManager {
  async moneyForLotto() {
    Console.print(INPUT_MESSAGE.moneyForLotto);
    const moneyForLotto = await Console.readLineAsync(EMPTY_LINE);
    Console.print(EMPTY_LINE);

    return moneyForLotto;
  }

  async winningBallNumbers() {
    Console.print(INPUT_MESSAGE.winningBalls);
    const winningBalls = await Console.readLineAsync(EMPTY_LINE);
    Console.print(EMPTY_LINE);

    return winningBalls;
  }

  async bonusBallNumbers() {
    Console.print(INPUT_MESSAGE.bonusBall);
    const bonusBall = await Console.readLineAsync(EMPTY_LINE);
    Console.print(EMPTY_LINE);

    return bonusBall;
  }
}

export default InputManager;
