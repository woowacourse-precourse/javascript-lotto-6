import { consolePrint } from '../../libararyFeatures/MissionUtilHandler.js';
import parseToMap from '../../parse/parseToMap.js';
import getRateOfReturn from '../../yield/getRateOfReturn.js';

export default function winningStatisticsUI(matchResult, purchaseAmount) {
  const resultCount = parseToMap(matchResult);
  const rateOfReturn = getRateOfReturn(resultCount, purchaseAmount);
  const resultText = `
당첨 통계
---
3개 일치 (5,000원) - ${resultCount.get(4)}개
4개 일치 (50,000원) - ${resultCount.get(3)}개
5개 일치 (1,500,000원) - ${resultCount.get(2)}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${resultCount.get(1)}개
6개 일치 (2,000,000,000원) - ${resultCount.get(0)}개
총 수익률은 ${rateOfReturn}%입니다.`;
  consolePrint(resultText);
}
