import { consolePrint } from '../../libararyFeatures/MissionUtilHandler.js';

export default async function purchaseResaultUI(count, purchaseData) {
  const purchaseCount = count;
  const guidanceText = `${purchaseCount}개를 구매했습니다.`;
  let resultText = `\n${guidanceText}\n`;

  purchaseData.forEach((element) => {
    const purchaseString = `[${element.join(', ')}]\n`;
    resultText += purchaseString;
  });
  consolePrint(resultText);
}
