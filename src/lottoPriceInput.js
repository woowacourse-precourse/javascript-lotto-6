import { MissionUtils } from '@woowacourse/mission-utils';

export default async function lottoPriceInput(answer) {
  const price = await MissionUtils.Console.readLineAsync(answer);
  return price;
}
