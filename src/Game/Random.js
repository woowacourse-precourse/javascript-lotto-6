import { MissionUtils } from '@woowacourse/mission-utils';
// 기능2의 랜덤값
export function random(buy) {
  let numbers = [];
  // prettier-ignore
  for (let i = 0; i < buy; i++) {
    numbers.push(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, c) => a - c,));
  }
  return numbers;
}
