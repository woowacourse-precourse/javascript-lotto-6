import { printMessage } from "./printMessage.js";

function printResult(prizeResult) {
  printMessage("당첨통계");
  printMessage("---");
  printMessage("3개 일치 (5,000원) - " + prizeResult.result[0] + "개");
  printMessage("4개 일치 (50,000원) - " + prizeResult.result[1] + "개");
  printMessage("5개 일치 (1,500,000원) - " + prizeResult.result[2] + "개");
  printMessage(
    "5개 일치, 보너스 볼 일치 (30,000,000원) - " + prizeResult.result[4] + "개"
  );
  printMessage("6개 일치 (2,000,000,000원) - " + prizeResult.result[3] + "개");
  return;
}
export default printResult;
