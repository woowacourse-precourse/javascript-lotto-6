import { Random } from "@woowacourse/mission-utils";

const generateLotto = () => {
  const randomLotto = Random.pickUniqueNumbersInRange(1, 45, 6);
  const sortedLotto = randomLotto.sort((a, b) => a - b);
  return sortedLotto;
};

export default generateLotto;
