import { Console } from "@woowacourse/mission-utils";

async function printCountMessage(buy) {
  await Console.print(`${buy.getCount()}개를 구매했습니다.`);
}
async function printRandomNumbers(buy) {
  await buy.getRandomNumbers().map((numbers) => {
    numbers.sort(function (a, b) {
      return a - b;
    });
    Console.print(`[${numbers.join(", ")}]`);
  });
}
async function printLotteryStatistics(result) {
  Console.print("당첨 통계\n---");
  Console.print(`3개 일치 (5,000원) - ${result.getThreeMatch()}개`);
  Console.print(`4개 일치 (50,000원) - ${result.getFourMatch()}개`);
  Console.print(`5개 일치 (1,500,000원) - ${result.getFiveMatch()}개`);
  Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.getFiveBonusMatch()}개`
  );
  Console.print(`6개 일치 (2,000,000,000원) - ${result.getSixMatch()}개`);
}
async function printProfitMargin(result, buy) {
  const profitMargin = Number(
    ((result.getPrizeAmount() / buy.getAmount()) * 100).toFixed(1)
  ).toLocaleString();
  Console.print(`총 수익률은 ${profitMargin}%입니다.`);
}

const OutputMessages = {
  printCountMessage,
  printRandomNumbers,
  printLotteryStatistics,
  printProfitMargin,
};

export default OutputMessages;
