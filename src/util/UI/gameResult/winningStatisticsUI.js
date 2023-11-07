import { consolePrint } from '../../libararyFeatures/MissionUtilHandler.js';

export default function winningStatisticsUI(lottoResult) {
  const resultText = `
당첨 통계
---
3개 일치 (5,000원) - ${lottoResult.resultCount.get(4)}개
4개 일치 (50,000원) - ${lottoResult.resultCount.get(3)}개
5개 일치 (1,500,000원) - ${lottoResult.resultCount.get(2)}개
5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.resultCount.get(1)}개
6개 일치 (2,000,000,000원) - ${lottoResult.resultCount.get(0)}개
총 수익률은 ${lottoResult.rateOfReturn}%입니다.`;
  consolePrint(resultText);
}
