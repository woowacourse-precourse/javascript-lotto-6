import { consolePrint } from '../../libararyFeatures/MissionUtilHandler.js';

export default async function purchaseResaultUI(count, purchaseData) {
  const purchaseCount = count;
  const guidanceText = `${purchaseCount}개를 구매했습니다.`;
  let resultTest = `\n${guidanceText} \n`;

  purchaseData.forEach((element) => {
    resultTest += `[${element}] \n`;
  });
  consolePrint(resultTest);
}
