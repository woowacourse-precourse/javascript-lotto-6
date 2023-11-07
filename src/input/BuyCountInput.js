import { Console } from '@woowacourse/mission-utils';
// 기능1의 입력 받는곳
export async function buycountinput() {
  const money = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return money;
}
