import { MissionUtils } from '@woowacourse/mission-utils';

export const mockReadLineAsync = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  inputs.forEach((input) =>
    MissionUtils.Console.readLineAsync.mockResolvedValueOnce(input)
  );
};

export const mockPickNumberInRange = (randoms) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  randoms.forEach((random) =>
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(random)
  );
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};
