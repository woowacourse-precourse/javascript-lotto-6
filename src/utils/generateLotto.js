import { Random } from "@woowacourse/mission-utils";

const generateLotto = (count) => {
  const lottoArray = [];
  Array.from({ length: count }).forEach(() =>
    lottoArray.push(Random.pickUniqueNumbersInRange(1, 45, 6))
  );
  return lottoArray;
};

export default generateLotto;
