import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "../Lotto.js";
import winningNumbersSentence from "./winningNumbersSentence.js";

async function winningNumbers() {
  try {
    winningNumbersSentence();
    const GET_WINNINGNUMBERS = await MissionUtils.Console.readLineAsync("");
    const WINNING_NUMBERS = typeChangeToNumber(GET_WINNINGNUMBERS);
    new Lotto(WINNING_NUMBERS);
    return WINNING_NUMBERS;
  } catch (error) {
    MissionUtils.Console.print(error);
  }
}

function typeChangeToNumber(input) {
  return input.split(",").map((element) => Number(element));
}

export default winningNumbers;
