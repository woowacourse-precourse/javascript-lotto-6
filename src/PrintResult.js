import { WINNING_STATISTICS_PRINT_MESSAGE } from "./utils/message.js";
import { print } from "./utils/print.js";

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
  print(`\n${WINNING_STATISTICS_PRINT_MESSAGE}`);
  print("---");

  let reversed = input.reverse();
  reversed.map((i, el) => print(form(el, i)));
};
