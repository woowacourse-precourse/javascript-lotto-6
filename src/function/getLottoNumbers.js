import { Console, MissionUtils } from "@woowacourse/mission-utils";

export const getLottoNumbers = (count) => {
  const result = [];
  Console.print(`${count}개를 구매했습니다.`);
  for (let i = 1; i <= count; i++) {
    const lottoRandomNumber = MissionUtils.Random.pickUniqueNumbersInRange(
      1,
      45,
      6
    ).sort((a, b) => a - b);

    result.push(lottoRandomNumber);
    Console.print(`[${lottoRandomNumber.join(", ")}]`);
  }

  return result;
};
