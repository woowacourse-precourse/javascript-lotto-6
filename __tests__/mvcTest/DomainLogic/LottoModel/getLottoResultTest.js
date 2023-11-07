import { Random } from '@woowacourse/mission-utils';
import LottoModel from '../../../../src/mvc/model/LottoModel';

const mockRandoms = numbers => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickUniqueNumbersInRange);
};

const mockLottoModel = (lottoNumbersArray, winningNumbers, bonusNumber) => {
  mockRandoms(lottoNumbersArray);
  const model = new LottoModel();
  model.purchaseLottos(lottoNumbersArray.length);
  model.makeLottoBoard(winningNumbers, bonusNumber);
  return model;
};

test.each([
  [
    [
      [
        [1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 7],
        [10, 11, 12, 13, 14, 15],
        [3, 4, 5, 6, 7, 8],
        [40, 41, 42, 43, 44, 45],
      ],
      [1, 2, 3, 4, 5, 6],
      7,
    ],
    Object.freeze([2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1]),
  ],
  [
    [
      [
        [1, 2, 3, 4, 7, 8],
        [10, 11, 12, 13, 14, 15],
        [1, 10, 20, 30, 40, 45],
      ],
      [10, 15, 20, 25, 30, 35],
      40,
    ],
    Object.freeze([1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0]),
  ],
])('getLottoResult()', (input, expectedValue) => {
  //when
  const model = mockLottoModel(...input);
  const lottoResult = model.getLottoResult();

  //then
  expect(lottoResult).toEqual(expectedValue);
});
