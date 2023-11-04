import { consolePrint } from '../../libararyFeatures/MissionUtilHandler.js';

export default async function purchaseResaultUI(count, purchaseData) {
  const purchaseCount = count;
  const guidanceText = `${purchaseCount}개를 구매했습니다.`;

  consolePrint(guidanceText);
  purchaseData.forEach((element) => {
    consolePrint(element);
  });
}
