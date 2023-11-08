import { Random } from '@woowacourse/mission-utils';

const randomLottogenerator = () => {
  const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);

  return lotto;
}

export default randomLottogenerator;