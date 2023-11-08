import { MissionUtils } from "@woowacourse/mission-utils";

export function printWinningList(winList) {
  MissionUtils.Console.print("당첨 통계\n---\n");
  MissionUtils.Console.print(`3개 일치 (5,000원) - ${winList[0]}개\n`);
  MissionUtils.Console.print(`4개 일치 (50,000원) - ${winList[1]}개\n`);
  MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${winList[2]}개\n`);
  MissionUtils.Console.print(
    `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winList[3]}개\n`
  );
  MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${winList[4]}개\n`);
}

export function printROI(winList, count) {
  const price = [5000, 50000, 1500000, 30000000, 2000000000];
  let winnings = 0;
  winList.map((w, idx) => {
    winnings = winnings + w * price[idx];
  });
  count = (count * 1000) / 100;
  const result = winnings / count;
  MissionUtils.Console.print(
    "총 수익률은 ${Number(result.toFixed(2))%입니다.\n}"
  );
}
