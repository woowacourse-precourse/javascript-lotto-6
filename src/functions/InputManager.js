import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/messages.js";

// 입력받은 값에 대한 검증 및 가공 처리
class InputManager {
  async moneyForLotto() {
    Console.print(INPUT_MESSAGE.moneyForLotto);
    const moneyForLotto = await Console.readLineAsync("");
    Console.print("");

    return moneyForLotto;
  }

  async winningBallNumbers() {
    Console.print(INPUT_MESSAGE.winningBalls);
    const winningBalls = await Console.readLineAsync("");
    Console.print("");

    return winningBalls;
  }

  async bonusBallNumbers() {
    Console.print(INPUT_MESSAGE.bonusBall);
    const bonusBall = await Console.readLineAsync("");
    Console.print("");

    return bonusBall;
  }
}

export default InputManager;
