import { Console } from '@woowacourse/mission-utils';
// 기능3 사용자 입력
export async function bonusinput() {
  const bonus = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');
  return bonus;
}
