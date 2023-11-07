import { MissionUtils } from "@woowacourse/mission-utils";

// 로또 구입 금액 입력
export async function inputAmount(){
  const amount = await MissionUtils.Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return amount;
}