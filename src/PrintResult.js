import { WINNING_STATISTICS_PRINT_MESSAGE } from "./constants.js";
import { printMessage } from "./PrintMessages.js";

function form(idx, n) {
  if (idx === 0) {
    return `3개 일치 (5,000원) - ${n}개`;
  } else if (idx === 1) {
    return `4개 일치 (50,000원) - ${n}개`;
  } else if (idx === 2) {
    return `5개 일치 (1,500,000원) - ${n}개`;
  } else if (idx === 3) {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${n}개`;
  } else if (idx === 4) {
    return `6개 일치 (2,000,000,000원) - ${n}개`;
  }
}

export const printResult = (input) => {
  printMessage("\n");
  printMessage(WINNING_STATISTICS_PRINT_MESSAGE);
  printMessage("---");
  input = input.reverse();
  input.map((i, el) => printMessage(form(el, i)));
};
