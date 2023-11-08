import { Console } from "@woowacourse/mission-utils";
import winningNumbersError from "../errors/winningNumbersError";
import bonusNumberError from "../errors/bonusNumberError";

const numberInput = async () => {
  const winningNumbers = (
    await Console.readLineAsync("당첨번호를 입력해 주세요.")
  )
    .split(",")
    .map(Number);
  const bonusNumbers = await Console.readLineAsync(
    "보너스 번호를 입력해 주세요."
  );
  winningNumbersError(winningNumbers);
  bonusNumberError(winningNumbers, bonusNumbers);
  return [winningNumbers, bonusNumbers];
};

export default numberInput;
