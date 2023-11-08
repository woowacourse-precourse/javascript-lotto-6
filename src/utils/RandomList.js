import { Random } from "@woowacourse/mission-utils";

export default function GetRrandomList(lotto) {
  const lottoList = [];

  for (let i = 0; i < lotto; i++) {
    lottoList.push(Random.pickUniqueNumbersInRange(1, 45, 6));
  }
  return lottoList;
}
