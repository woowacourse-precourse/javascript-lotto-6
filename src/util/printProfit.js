import { printMessage } from "./printMessage.js";

function printProfit(prizeResult, cash) {
  const profit =
    5000 * prizeResult.result[0] +
    50000 * prizeResult.result[1] +
    1500000 * prizeResult.result[2] +
    30000000 * prizeResult.result[4] +
    2000000000 * prizeResult.result[3];
  printMessage(
    "총 수익률은 " + ((profit / cash) * 100).toFixed(1) + "%입니다."
  );
  return;
}
export default printProfit;
