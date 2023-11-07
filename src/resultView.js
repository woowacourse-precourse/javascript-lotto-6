import { MissionUtils } from '@woowacourse/mission-utils';

export default function resultView(execution, purchase) {
  MissionUtils.Console.print(`${purchase / 1000}개를 구매했습니다.`);
  const formattedResults = execution.map((result) => `[${result.join(', ')}]`);
  formattedResults.forEach((result) => MissionUtils.Console.print(result));
}
