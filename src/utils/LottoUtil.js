import { Random } from '@woowacourse/mission-utils';

export const generateLottoNumbers = (min, max, length) =>
  Random.pickUniqueNumbersInRange(min, max, length).sort((a, b) => a - b);

export const calculateMatchingCount = (lottoA, lottoB) =>
  lottoA.getNumbers().filter((number) => lottoB.getNumbers().includes(number))
    .length;
