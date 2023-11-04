import { MissionUtils } from '@woowacourse/mission-utils';

export const print = (message) => {
  MissionUtils.Console.print(message);
};

export const readLineAsync = async (query) => {
  const input = await MissionUtils.Console.readLineAsync(query);
  return input;
};

export const pickUniqueNumbersInRange = (
  startInclusive,
  endInclusive,
  count,
) => {
  const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(
    startInclusive,
    endInclusive,
    count,
  );
  return lottoNumber;
};
